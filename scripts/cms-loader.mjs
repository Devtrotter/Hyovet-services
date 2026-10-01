/**
 * Hook de résolution Node pour charger des fichiers de données Next.js hors
 * de Next : chargé par `node --import ./scripts/cms-loader.mjs`.
 *
 * Un fichier de données « à la Devtrotter » ressemble à :
 *
 *     import "server-only";
 *     import heroImage from "@public/images/home/hero.webp";
 *     export const heroData = { image: { src: heroImage, alt: "…" } } as const;
 *
 * Sous Node pur, les trois lignes échouent : `server-only` lève une erreur
 * hors React Server Components, `@public/…` est un alias tsconfig, et un
 * `.webp` n'est pas un module. Ce hook rend chacune inoffensive :
 *  - `server-only` → module vide ;
 *  - alias `paths` du tsconfig (`@/…`, `@public/…`) → chemin réel, avec
 *    résolution des extensions omises (`.ts`, `.tsx`, `/index.ts`) ;
 *  - image (png, jpg, webp, avif, gif, svg, ico) → objet `{ src, width, height }`
 *    dont `src` est le chemin public (`/images/home/hero.webp`), exactement
 *    ce que le JSON doit contenir.
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve as resolvePath, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { register } from "node:module";
import { isMainThread } from "node:worker_threads";

// Chargé par `--import`, le fichier s'enregistre lui-même comme module de hooks
// (les hooks tournent dans un thread séparé, où isMainThread est faux).
if (isMainThread) register(import.meta.url);

const IMAGE_RE = /\.(png|jpe?g|webp|avif|gif|svg|ico|bmp)$/i;
const TS_EXTS = [".ts", ".tsx", ".mts", ".js", ".mjs"];

function findProjectRoot(from) {
  let dir = from;
  for (let i = 0; i < 12; i++) {
    if (existsSync(join(dir, "package.json"))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return from;
}

const projectRoot = findProjectRoot(process.cwd());

/**
 * tsconfig accepte commentaires et virgules finales. On les retire hors des
 * chaînes seulement : un glob comme "@/*" contient `/*` et ne doit pas être
 * pris pour un début de commentaire.
 */
function stripJsonc(text) {
  let out = "";
  let i = 0;
  let inString = false;
  while (i < text.length) {
    const c = text[i];
    const next = text[i + 1];
    if (inString) {
      out += c;
      if (c === "\\") {
        out += next ?? "";
        i += 2;
        continue;
      }
      if (c === '"') inString = false;
      i++;
      continue;
    }
    if (c === '"') {
      inString = true;
      out += c;
      i++;
    } else if (c === "/" && next === "/") {
      while (i < text.length && text[i] !== "\n") i++;
    } else if (c === "/" && next === "*") {
      i += 2;
      while (i < text.length && !(text[i] === "*" && text[i + 1] === "/")) i++;
      i += 2;
    } else {
      out += c;
      i++;
    }
  }
  return out.replace(/,(\s*[}\]])/g, "$1");
}

function loadPaths() {
  const file = join(projectRoot, "tsconfig.json");
  if (!existsSync(file)) return { baseUrl: projectRoot, paths: {} };
  let json = {};
  try {
    json = JSON.parse(stripJsonc(readFileSync(file, "utf8")));
  } catch {
    return { baseUrl: projectRoot, paths: {} };
  }
  const co = json.compilerOptions ?? {};
  return { baseUrl: resolvePath(projectRoot, co.baseUrl ?? "."), paths: co.paths ?? {} };
}

const { baseUrl, paths } = loadPaths();

/** `@public/images/x.webp` → `/images/x.webp` ; `../../public/images/x.webp` → `/images/x.webp`. */
function publicPath(specifier, parentPath) {
  for (const [pattern, targets] of Object.entries(paths)) {
    const prefix = pattern.replace(/\*$/, "");
    const target = (targets[0] ?? "").replace(/\*$/, "");
    if (specifier.startsWith(prefix) && /public\/?$/.test(target)) return "/" + specifier.slice(prefix.length).replace(/^\/+/, "");
  }
  const abs = specifier.startsWith(".") && parentPath ? resolvePath(dirname(parentPath), specifier) : specifier;
  const idx = abs.split(sep).join("/").indexOf("/public/");
  if (idx >= 0) return abs.split(sep).join("/").slice(idx + "/public".length);
  return specifier;
}

function applyAlias(specifier) {
  for (const [pattern, targets] of Object.entries(paths)) {
    const star = pattern.endsWith("*");
    const prefix = star ? pattern.slice(0, -1) : pattern;
    if (star ? specifier.startsWith(prefix) : specifier === prefix) {
      const target = (targets[0] ?? "").replace(/\*$/, "");
      return resolvePath(baseUrl, target + (star ? specifier.slice(prefix.length) : ""));
    }
  }
  return null;
}

function withExtension(path) {
  if (existsSync(path) && statSync(path).isFile()) return path;
  for (const ext of TS_EXTS) if (existsSync(path + ext)) return path + ext;
  for (const ext of TS_EXTS) if (existsSync(join(path, "index" + ext))) return join(path, "index" + ext);
  return null;
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier === "server-only" || specifier === "client-only") {
    return { url: "data:text/javascript,export {}", shortCircuit: true };
  }
  const parentPath = context.parentURL?.startsWith("file:") ? fileURLToPath(context.parentURL) : null;

  if (IMAGE_RE.test(specifier)) {
    const src = publicPath(specifier, parentPath);
    const code = `export default ${JSON.stringify({ src, width: 0, height: 0, blurDataURL: "" })};`;
    return { url: "data:text/javascript," + encodeURIComponent(code), shortCircuit: true };
  }

  const aliased = applyAlias(specifier);
  if (aliased) {
    const file = withExtension(aliased);
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  }

  // import relatif sans extension (style Next) → on complète
  if ((specifier.startsWith("./") || specifier.startsWith("../")) && parentPath && !/\.[a-z]+$/i.test(specifier)) {
    const file = withExtension(resolvePath(dirname(parentPath), specifier));
    if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  }

  return nextResolve(specifier, context);
}

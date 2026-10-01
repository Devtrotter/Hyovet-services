/**
 * Exporte le contenu ÉDITABLE du site en un JSON « CMS » organisé par page.
 *
 *     npm run content:cms                  → écrit vers CONFIG.output
 *     npm run content:cms -- --out x.json  → écrit ailleurs
 *     npm run content:cms -- --dry         → n'écrit rien, affiche seulement le rapport
 *
 * Les fichiers TypeScript du dossier data restent la source de vérité. Ce
 * script en dérive une version « client » : uniquement ce qu'un back-office
 * doit pouvoir modifier (textes, images, liens, prix, listes), sans les
 * identifiants techniques, icônes, schémas de formulaire ni composants
 * structurels (header, nav, footer, boutons flottants). Les articles de blog
 * et d'actualités en sont exclus : ils viennent d'un CMS, pas de ce JSON.
 *
 * Tout le paramétrage propre au projet tient dans SOURCE et CONFIG. Ne jamais
 * retoucher le JSON à la main : corriger ici et relancer.
 *
 * Commande npm à ajouter dans package.json (le loader rend importables les
 * fichiers Next : `server-only`, alias `@/…`, images importées) :
 *   "content:cms": "node --experimental-transform-types --import ./scripts/cms-loader.mjs scripts/export-cms.mts"
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { homedir } from "node:os";
import { pathToFileURL } from "node:url";

/* ================================================================== */
/*  1. SOURCE — où est le contenu et comment il est organisé           */
/* ================================================================== */
const PROJECT = "hyovet"; // nom du fichier de sortie (souvent le "name" du package.json)

const SOURCE = {
  /**
   * "single" : un module exporte tout l'objet racine
   *            (ex. src/data/content.ts → `export const content = { site, pages }`).
   * "tree"   : un fichier par page et par section, convention utils/data :
   *            content/<page>/<section>.ts, content/shared/<sujet>.ts, seo/<page>.ts.
   */
  mode: "tree" as "single" | "tree",

  single: {
    module: "../src/data/content.ts",
    exportName: "content", // "default" pour un export par défaut
  },

  tree: {
    dataDir: "../src/utils/data", // contient content/ et seo/
    appDir: "../src/app", // sert à retrouver l'ordre des sections (imports de page.tsx)
    /** Sous-dossiers de content/ qui ne sont pas des pages mais du contenu partagé. */
    sharedDirs: ["shared"],
    /** Fichier partagé qui tient lieu de bloc `site` (coordonnées, identité). */
    siteFile: "coordonnees",
  },
};

/* ================================================================== */
/*  2. CONFIG — ce qui est contenu, ce qui est technique                */
/* ================================================================== */
const CONFIG = {
  /** Fichier de sortie par défaut (surchargé par --out). */
  output: resolve(homedir(), "Desktop", "json", `${PROJECT}.json`),

  /**
   * Sections racine conservées, dans l'ordre de sortie. Tout le reste de la
   * racine (header, footer, floatingButtons, config…) est du squelette de
   * site : il n'est pas exporté. `seo` est toujours inséré après `site`.
   */
  keepRoot: ["site", "shared", "pages"],

  /**
   * Clés purement techniques, supprimées où qu'elles apparaissent. Un client
   * ne doit jamais voir un identifiant, un chemin d'icône, un numéro d'ordre
   * ou un libellé calculé (initiales, étoiles…). Compléter avec les clés
   * propres au projet ; retirer celles qui portent du contenu dans ce projet.
   */
  technicalKeys: [
    "key",
    "id",
    "slug",
    "anchor",
    "icon",
    "emoji",
    "n",
    "index",
    "order",
    "initials",
    "stars",
    "starsLabel",
    "checkIcon",
    "playIcon",
    "watermark",
    "variant",
    "color",
    "size",
    "tone",
    "accent",
    "theme",
    "align",
    "layout",
    "map",
    "displayHeight",
    "perPage",
    "enabled",
  ],

  /**
   * Chemins (point-séparés, `*` = n'importe quelle clé) supprimés en bloc :
   * schémas de formulaire, blocs purement navigationnels, sections dupliquant
   * le header/footer… Les textes de formulaire (consentement, bouton, phrase
   * de réassurance) restent : ce sont des libellés que le client peut vouloir
   * changer, contrairement aux champs eux-mêmes.
   */
  dropPaths: [
    "pages.*.form.sections",
    "pages.*.form.fields",
    "pages.*.explore",
    "site.nav",
    "site.footer",
    "pages.expertiseDetail.menu", // duplique le menu déroulant du header
  ],

  /**
   * Chemins conservés tels quels même s'ils ressemblent à une collection
   * indexée (voir la conversion en tableau ci-dessous). Rarement utile.
   */
  keepKeyedPaths: [] as string[],

  /**
   * Blog / actualités. Ces contenus-là ne s'éditent pas dans le back-office de
   * contenu : ils viennent d'un CMS ou d'une base, et une page par article
   * apparaîtrait de toute façon dans le JSON sans y avoir sa place. Sont donc
   * exclues la liste des articles et les pages d'article. La page liste, elle,
   * reste : son intro, ses libellés de filtres et son encart newsletter sont
   * bien du contenu que le client doit pouvoir changer.
   *
   * Les autres collections (cabinets, fiches expertise, réalisations…) ne sont
   * pas concernées : elles sont écrites à la main dans le dossier data.
   */
  blog: {
    /** Détection sur les noms usuels : blog, actu(alités), news, publication(s), article(s), post(s) et leur page de détail. */
    auto: true,
    /** Pages blog supplémentaires, nommées comme dans `pages` (ex. "veille", "veilleArticle"). */
    paths: [] as string[],
    /** Pages détectées à tort comme blog, à conserver entièrement (ex. une page vitrine appelée "publications"). */
    ignore: [] as string[],
  },


  /**
   * SEO. Mode "single" : les champs meta de chaque page sont sortis vers
   * `seo.<page>`, ceux du bloc `site` alimentent la page d'accueil. Mode
   * "tree" : `seo/<page>.ts` est un objet Metadata Next dont on garde ce qui
   * se rédige (title, description, openGraph, keywords). Une page sans meta
   * reçoit des chaînes vides pour que le client voie ce qu'il reste à écrire.
   */
  seo: {
    titleKeys: ["metaTitle", "seoTitle"],
    descriptionKeys: ["metaDescription", "seoDescription"],
    homePage: "home",
    metadataKeep: ["title", "description", "openGraph", "keywords"],
  },

  /**
   * Valeurs vides à créer : emplacements que le site prévoit mais que le
   * contenu n'a pas encore (vidéo à venir, image manquante…). Le client
   * peut ainsi les remplir sans qu'on ajoute la clé pour lui plus tard.
   */
  addEmpty: {} as Record<string, string[]>,

  /**
   * Ordre des pages dans la sortie (mode tree : la page d'accueil s'appelle
   * souvent "home"). Les pages absentes suivent, dans leur ordre d'origine.
   */
  pageOrder: [
    "home",
    "expertise",
    "expertise-detail",
    "cabinets",
    "cabinet",
    "publications",
    "publication",
    "recrutement",
    "contact",
    "mentions-legales",
    "politique-de-confidentialite",
    "not-found",
  ],
};

/* ================================================================== */
/*  3. CHARGEMENT DE LA SOURCE — normalement rien à modifier            */
/* ================================================================== */
type Json = null | boolean | number | string | Json[] | { [k: string]: Json };
const isObj = (v: unknown): v is Record<string, Json> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const report: string[] = [];
const log = (msg: string) => report.push(msg);
const here = dirname(new URL(import.meta.url).pathname);
const fromHere = (p: string) => resolve(here, p);

async function importModule(path: string): Promise<Record<string, unknown>> {
  return (await import(pathToFileURL(path).href)) as Record<string, unknown>;
}

/** L'export de données d'un module : `<nom>Data`/`<nom>Seo`, sinon l'unique export objet. */
function pickExport(mod: Record<string, unknown>, preferred: string[]): unknown {
  for (const name of preferred) if (name in mod && typeof mod[name] !== "function") return mod[name];
  const objects = Object.entries(mod).filter(([k, v]) => k !== "default" && typeof v === "object" && v !== null);
  if (objects.length === 1) return objects[0][1];
  if ("default" in mod) return mod.default;
  if (objects.length > 1) {
    log(`- ${preferred[0]} : plusieurs exports (${objects.map(([k]) => k).join(", ")}), fusionnés`);
    return Object.fromEntries(objects);
  }
  return undefined;
}

const camel = (s: string) => s.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());

function listModules(dir: string): { name: string; path: string }[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => (e.isFile() && /\.(ts|tsx|mts|js|mjs)$/.test(e.name) && !e.name.endsWith(".d.ts")) || e.isDirectory())
    .map((e) => ({
      name: e.name.replace(/\.(ts|tsx|mts|js|mjs)$/, ""),
      path: e.isDirectory() ? join(dir, e.name, "index.ts") : join(dir, e.name),
    }))
    .filter((m) => existsSync(m.path));
}

/** Ordre des sections d'une page d'après les imports de son page.tsx (sinon alphabétique). */
function sectionOrderFromApp(appDir: string, page: string): string[] {
  if (!existsSync(appDir)) return [];
  const stack = [appDir];
  const order: string[] = [];
  while (stack.length) {
    const dir = stack.pop()!;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (/^(page|layout)\.(tsx|jsx|ts|js)$/.test(e.name)) {
        const src = readFileSync(p, "utf8");
        const re = new RegExp(`content/${page}/([\\w-]+)`, "g");
        for (const m of src.matchAll(re)) if (!order.includes(m[1])) order.push(m[1]);
      }
    }
  }
  return order;
}

async function loadSource(): Promise<Record<string, Json>> {
  if (SOURCE.mode === "single") {
    const mod = await importModule(fromHere(SOURCE.single.module));
    const data = SOURCE.single.exportName === "default" ? mod.default : mod[SOURCE.single.exportName];
    if (!data) throw new Error(`Export "${SOURCE.single.exportName}" introuvable dans ${SOURCE.single.module}`);
    return toJson(data) as Record<string, Json>;
  }

  const dataDir = fromHere(SOURCE.tree.dataDir);
  const contentDir = join(dataDir, "content");
  const seoDir = join(dataDir, "seo");
  const root: Record<string, Json> = { site: {}, shared: {}, seo: {}, pages: {} };

  for (const entry of readdirSync(contentDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const isShared = SOURCE.tree.sharedDirs.includes(entry.name);
    const modules = listModules(join(contentDir, entry.name));
    const order = isShared ? [] : sectionOrderFromApp(fromHere(SOURCE.tree.appDir), entry.name);
    modules.sort((a, b) => {
      const ia = order.indexOf(a.name), ib = order.indexOf(b.name);
      if (ia === -1 && ib === -1) return a.name.localeCompare(b.name);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
    const target: Record<string, Json> = {};
    for (const m of modules) {
      const data = pickExport(await importModule(m.path), [camel(m.name) + "Data", camel(m.name)]);
      if (data === undefined) {
        log(`- content/${entry.name}/${m.name} : aucun export de données, ignoré`);
        continue;
      }
      target[camel(m.name)] = toJson(data);
    }
    if (isShared) {
      for (const [k, v] of Object.entries(target)) {
        if (k === camel(SOURCE.tree.siteFile) && isObj(v)) root.site = v;
        else (root.shared as Record<string, Json>)[k] = v;
      }
    } else {
      (root.pages as Record<string, Json>)[camel(entry.name)] = target;
      if (order.length === 0) log(`- pages.${camel(entry.name)} : ordre des sections non trouvé dans app/, ordre alphabétique`);
    }
  }

  for (const m of listModules(seoDir)) {
    const data = pickExport(await importModule(m.path), [camel(m.name) + "Seo", camel(m.name)]);
    if (data === undefined) continue;
    const meta = toJson(data);
    if (!isObj(meta)) continue;
    const kept: Record<string, Json> = {};
    for (const k of CONFIG.seo.metadataKeep) if (k in meta) kept[k] = meta[k];
    if (isObj(kept.title) && "default" in kept.title) kept.title = kept.title.default; // { default, template }
    (root.seo as Record<string, Json>)[camel(m.name)] = kept;
  }
  return root;
}

/* ================================================================== */
/*  4. TRANSFORMATIONS GÉNÉRIQUES — normalement rien à modifier         */
/* ================================================================== */

/**
 * Sérialise pour repartir d'un JSON pur : Date, undefined et fonctions sont
 * résolus, et une image importée statiquement (`{ src, width, height,
 * blurDataURL }`, ce que fournit le loader ou next/image) redevient son
 * chemin public : seul `src` est du contenu.
 */
function toJson(v: unknown): Json {
  const serialized = JSON.stringify(v, (_k, val) => {
      if (val === undefined) return null;
    if (isObj(val) && typeof val.src === "string" && typeof val.width === "number" && typeof val.height === "number") return val.src;
    return val;
  });
  return serialized === undefined ? null : JSON.parse(serialized);
}

function matchPath(pattern: string, path: string): boolean {
  const p = pattern.split(".");
  const q = path.split(".");
  if (p.length !== q.length) return false;
  return p.every((seg, i) => seg === "*" || seg === q[i]);
}

/** Supprime les chemins listés dans CONFIG.dropPaths. */
function dropPaths(node: Json, path = ""): Json {
  if (Array.isArray(node)) return node.map((v) => dropPaths(v, path + ".[]"));
  if (!isObj(node)) return node;
  const out: Record<string, Json> = {};
  for (const [k, v] of Object.entries(node)) {
    const full = path ? `${path}.${k}` : k;
    if (CONFIG.dropPaths.some((pat) => matchPath(pat, full))) {
      log(`- supprimé (dropPaths) : ${full}`);
      continue;
    }
    out[k] = dropPaths(v, full);
  }
  return out;
}

/** Sort les meta de chaque page vers `seo` ; complète les pages sans meta par des chaînes vides. */
function extractSeo(root: Record<string, Json>): Record<string, Json> {
  const seo: Record<string, Json> = isObj(root.seo) ? root.seo : {};
  const pick = (obj: Record<string, Json>, keys: string[]): string => {
    for (const k of keys) {
      if (k in obj) {
        const v = obj[k];
        delete obj[k];
        return typeof v === "string" ? v : "";
      }
    }
    return "";
  };
  const pages = isObj(root.pages) ? root.pages : {};
  const site = isObj(root.site) ? root.site : null;
  for (const [name, page] of Object.entries(pages)) {
    if (!isObj(page)) continue;
    const { title: t0, description: d0, ...rest } = isObj(seo[name]) ? seo[name] : {};
    // un `title` de page est un titre affiché, pas un titre d'onglet : seuls
    // les champs meta*/seo* sont extraits
    let title = pick(page, CONFIG.seo.titleKeys);
    let description = pick(page, CONFIG.seo.descriptionKeys);
    if (name === CONFIG.seo.homePage && site) {
      title = title || pick(site, CONFIG.seo.titleKeys);
      description = description || pick(site, CONFIG.seo.descriptionKeys);
    }
    const entry: Record<string, Json> = { title: (t0 as string) || title, description: (d0 as string) || description, ...rest };
    seo[name] = entry;
    if (!entry.title && !entry.description) log(`- seo.${name} : vide, à renseigner par le client`);
  }
  if (site) for (const k of [...CONFIG.seo.titleKeys, ...CONFIG.seo.descriptionKeys]) delete site[k];
  return seo;
}

const dropped = new Map<string, number>();

/**
 * Nettoyage récursif :
 *  - retire les clés techniques ;
 *  - dans un tableau, un objet réduit à un seul champ texte devient une chaîne
 *    (ex. `{ emoji, name }` → `"Football"`) : le client édite une liste, pas
 *    des objets à un champ ;
 *  - un objet d'au moins trois entrées (ou aux clés courtes type a1/a2/b) dont
 *    toutes les valeurs sont des objets de même forme est une collection
 *    indexée (ex. `photos: { a1, a2, b }`) → tableau, car ces clés sont des
 *    emplacements de mise en page, pas du contenu ;
 *  - `cta: "Libellé"` dans les éléments d'une liste dont le parent porte
 *    `href` → `cta: { label, href }`, et le `href` du parent disparaît :
 *    un lien se lit et s'édite comme une unité ;
 *  - les objets/tableaux devenus vides disparaissent.
 */
function clean(node: Json, path: string, inArray = false): Json {
  if (Array.isArray(node)) {
    return node.map((v) => clean(v, path + ".[]", true)).filter((v) => v !== undefined);
  }
  if (!isObj(node)) return node;

  const out: Record<string, Json> = {};
  for (const [k, v] of Object.entries(node)) {
    if (CONFIG.technicalKeys.includes(k)) {
      dropped.set(k, (dropped.get(k) ?? 0) + 1);
      continue;
    }
    const cleaned = clean(v, `${path}.${k}`);
    if (cleaned === undefined) continue;
    if (isObj(cleaned) && Object.keys(cleaned).length === 0) continue;
    if (Array.isArray(cleaned) && cleaned.length === 0) continue;
    out[k] = cleaned;
  }

  if (typeof out.href === "string") {
    for (const [k, v] of Object.entries(out)) {
      if (!Array.isArray(v) || v.length === 0 || !v.every((it) => isObj(it) && typeof it.cta === "string")) continue;
      out[k] = v.map((it) => ({ ...(it as Record<string, Json>), cta: { label: (it as Record<string, Json>).cta, href: out.href } }));
      delete out.href;
      log(`- ${path.replace(/^\./, "")}.${k}[].cta : libellé + href du parent fusionnés en { label, href }`);
      break;
    }
  }

  const keys = Object.keys(out);
  if (keys.length === 0) return undefined as unknown as Json;

  if (inArray && keys.length === 1 && typeof out[keys[0]] === "string" && ["name", "label", "title", "text"].includes(keys[0])) {
    return out[keys[0]];
  }

  const values = Object.values(out);
  const cleanPath = path.replace(/^\./, "");
  if (
    keys.length >= 2 &&
    (keys.length >= 3 || keys.every((k) => k.length <= 3)) &&
    values.every(isObj) &&
    !CONFIG.keepKeyedPaths.some((p) => matchPath(p, cleanPath)) &&
    new Set(values.map((v) => Object.keys(v as object).sort().join("|"))).size === 1 &&
    !/^(pages|site|shared|seo)(\.[^.]+)?$/.test(cleanPath)
  ) {
    log(`- ${cleanPath} : collection indexée (${keys.join(", ")}) convertie en tableau`);
    return values;
  }
  return out;
}

/* ---- Blog / actualités : la liste des articles et les pages d'article ---- */

const deaccent = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** Noms de page qui désignent un blog, liste comme article, au singulier comme au pluriel. */
const BLOG_NAME =
  /^(blogs?|actus?|actualites?|news|nouvelles?|publications?|articles?|posts?)(detail|article|post|item|single|page)?$/;

/** Champs qui trahissent un article : métadonnées d'édition, pas du texte de page. */
const ARTICLE_MARKERS = ["excerpt", "summary", "date", "publishedAt", "updatedAt", "author", "category", "readingTime"];
const ARTICLE_FIELDS = [...ARTICLE_MARKERS, "title", "slug", "href", "tags", "image", "cover", "content", "blocks"];

function isBlogPage(name: string): boolean {
  if (CONFIG.blog.ignore.includes(name)) return false;
  if (CONFIG.blog.paths.includes(name)) return true;
  if (!CONFIG.blog.auto) return false;
  return BLOG_NAME.test(deaccent(name).replace(/[^a-z]/g, ""));
}

/** Page d'article (à retirer) plutôt que page liste (à garder) : un pluriel frère, ou un suffixe de détail. */
function isBlogDetail(name: string, pageNames: string[]): boolean {
  return pageNames.includes(name + "s") || /.+(Detail|Article|Post|Item|Single)$/.test(name);
}

/** Un objet porte-t-il assez de métadonnées d'édition pour être un article ? */
function looksLikeArticle(v: Json): boolean {
  if (!isObj(v)) return false;
  const keys = Object.keys(v);
  return keys.filter((k) => ARTICLE_FIELDS.includes(k)).length >= 3 && keys.some((k) => ARTICLE_MARKERS.includes(k));
}

const isArticleList = (v: Json): boolean => Array.isArray(v) && v.length > 0 && v.every(looksLikeArticle);

let blogRemovals = 0;

/** Retire, dans une page liste, les articles eux-mêmes en laissant les textes de la page. */
function stripArticles(node: Json, path: string): Json {
  if (Array.isArray(node)) return node.map((v, i) => stripArticles(v, `${path}[${i}]`));
  if (!isObj(node)) return node;
  const out: Record<string, Json> = {};
  for (const [k, v] of Object.entries(node)) {
    const full = `${path}.${k}`;
    if (isArticleList(v)) {
      log(`- blog : ${full} retiré (${(v as Json[]).length} article(s)) — alimenté par le CMS`);
      blogRemovals++;
      continue;
    }
    if (looksLikeArticle(v)) {
      log(`- blog : ${full} retiré (article) — alimenté par le CMS`);
      blogRemovals++;
      continue;
    }
    out[k] = stripArticles(v, full);
  }
  return out;
}

/** Retire les pages d'article, et les articles des pages liste. */
function stripBlog(root: Record<string, Json>) {
  if (!isObj(root.pages)) return;
  const pages = root.pages as Record<string, Json>;
  const seo = isObj(root.seo) ? (root.seo as Record<string, Json>) : null;
  const names = Object.keys(pages);
  for (const name of names) {
    if (!isBlogPage(name)) continue;
    if (isBlogDetail(name, names)) {
      delete pages[name];
      if (seo) delete seo[name];
      log(`- blog : page "${name}" retirée en entier (page d'article) ainsi que son seo`);
      blogRemovals++;
      continue;
    }
    const before = blogRemovals;
    pages[name] = stripArticles(pages[name], `pages.${name}`);
    if (blogRemovals > before) log(`- blog : page "${name}" conservée sans ses articles (intro, filtres, newsletter restent éditables)`);
  }
}

function getAt(root: Record<string, Json>, path: string): Json | undefined {
  return path.split(".").reduce<Json | undefined>((acc, k) => (isObj(acc) ? acc[k] : undefined), root);
}

function addEmpty(root: Record<string, Json>) {
  for (const [path, keys] of Object.entries(CONFIG.addEmpty)) {
    const target = getAt(root, path);
    if (!isObj(target)) {
      log(`- addEmpty : ${path} introuvable, ignoré`);
      continue;
    }
    for (const k of keys) if (!(k in target)) target[k] = "";
    log(`- ${path} : champs vides ajoutés (${keys.join(", ")})`);
  }
}

function orderKeys(obj: Record<string, Json>, order: string[]): Record<string, Json> {
  const ordered: Record<string, Json> = {};
  for (const k of order) if (k in obj) ordered[k] = obj[k];
  for (const k of Object.keys(obj)) if (!(k in ordered)) ordered[k] = obj[k];
  return ordered;
}

/* ================================================================== */
/*  5. EXÉCUTION                                                        */
/* ================================================================== */
const args = process.argv.slice(2);
const dry = args.includes("--dry");
const outIdx = args.indexOf("--out");
const outputPath = outIdx >= 0 && args[outIdx + 1] ? resolve(args[outIdx + 1]) : CONFIG.output;

const raw = await loadSource();

const rootKept: Record<string, Json> = {};
for (const k of [...CONFIG.keepRoot, "seo"]) if (k in raw) rootKept[k] = raw[k];
for (const k of Object.keys(raw)) if (!(k in rootKept)) log(`- racine ignorée : ${k}`);

let root = dropPaths(rootKept) as Record<string, Json>;
stripBlog(root);
const seo = extractSeo(root);
delete root.seo;
root = clean(root, "") as Record<string, Json>;
if (isObj(root.pages)) root.pages = orderKeys(root.pages, CONFIG.pageOrder);
addEmpty(root);

const result: Record<string, Json> = {};
for (const k of CONFIG.keepRoot) {
  if (k === "pages") continue;
  if (k in root) result[k] = root[k];
}
result.seo = orderKeys(seo, ["global", ...CONFIG.pageOrder]);
if (isObj(root.pages)) result.pages = root.pages;

for (const [k, n] of [...dropped.entries()].sort()) log(`- clé technique "${k}" retirée ×${n}`);

const pageNames = isObj(result.pages) ? Object.keys(result.pages) : [];
console.log(`Rapport export CMS — ${PROJECT} (${basename(outputPath)})`);
console.log(report.map((l) => "  " + l).join("\n"));
console.log(`  → ${pageNames.length} page(s) : ${pageNames.join(", ")}`);

if (dry) {
  console.log("  (--dry : rien n'a été écrit)");
} else {
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(result, null, 2) + "\n");
  console.log(`  → écrit : ${outputPath}`);
}

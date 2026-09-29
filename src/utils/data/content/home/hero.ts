import "server-only";
import heroPorcelets from "@public/images/home/hero-porcelets.jpg";

// Hero de l'accueil : la première image de la vidéo sert de visuel LCP,
// la vidéo (webm + mp4 de repli) prend le relais une fois chargée.
export const homeHero = {
  titleLines: ["Groupe vétérinaire expert", "de la filière porcine"],
  subtitle:
    "Santé, technique et données au service de la performance de vos élevages, du sevrage à l'abattage.",
  poster: heroPorcelets,
  video: { webm: "/videos/home/hero-porcelets.webm", mp4: "/videos/home/hero-porcelets.mp4" },
};

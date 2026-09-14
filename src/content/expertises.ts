import { news } from "./home";
import type { ExpertiseDetail, KeyFigure, NavLink } from "./types";

// Pages de détail des domaines d'expertise (/expertise/[slug]).
// "Performance Reproduction" reprend la maquette à l'identique.
// Les 4 autres pages utilisent des textes PROVISOIRES rédigés à partir de l'arborescence :
// à faire valider / remplacer par le client (Ludivine Engoulvent) via le futur CMS.

const placeholderFigures: KeyFigure[] = [
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "emerald" },
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "coral" },
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "sun" },
  { value: 1500, suffix: "+", label: "élevage suivis", accent: "cyan" },
];

const heroSubtitle =
  "La science vétérinaire et l'analyse des données de terrain au service de la rentabilité, de la sérénité et de la pérennité de votre élevage.";

const proofs = (): ExpertiseDetail["proofs"] => ({
  title: "Nos preuves",
  items: news.items,
  cta: { label: "Voir les publications", href: "/publications" },
});

export const expertiseDetails: ExpertiseDetail[] = [
  {
    slug: "performance-reproduction",
    name: "Performance Reproduction",
    menuDescription: "Échographie ovarienne, conduite d'élevage",
    seoDescription:
      "Échographie ovarienne et suivi de reproduction de la truie : datation des chaleurs, retours en chaleur, taux de mise bas et homogénéité des portées.",
    hero: { title: "Échographie ovarienne et performance reproduction de la truie", subtitle: heroSubtitle },
    figures: placeholderFigures,
    services: {
      title: "Ce qu'on fait",
      subtitle: "Quatre prestations, de l'échographie à l'optimisation des portées.",
      items: [
        {
          title: "Échographie ovarienne",
          description:
            "Visualisation des ovaires pour dater précisément les chaleurs et objectiver les troubles de la reproduction, exclusivité française.",
        },
        {
          title: "Suivi de reproduction",
          description: "Échographies de gestation, analyse des retours en chaleur, pilotage du taux de mise bas.",
        },
        {
          title: "Échographie ovarienne",
          description:
            "Visualisation des ovaires pour dater précisément les chaleurs et objectiver les troubles de la reproduction, exclusivité française.",
        },
        {
          title: "Suivi de reproduction",
          description: "Échographies de gestation, analyse des retours en chaleur, pilotage du taux de mise bas.",
        },
      ],
    },
    situations: {
      title: "Pour qui, quand ?",
      subtitle: "Les situations où nous appeler dans les mots du terrain.",
      items: [
        {
          title: "Mon taux de mise bas baisse depuis trois bandes",
          description: "Échographies de gestation, analyse des retours en chaleur, pilotage du taux de mise bas.",
        },
        {
          title: "Des retours en chaleur inexpliqués",
          description:
            "Datation précise des ovulations pour distinguer problème de détection, d’insémination ou d’embryon.",
        },
        {
          title: "Mes portées sont trop hétérogènes",
          description: "Analyse de la préparation des truies et plan d’action sur l’alimentation de gestation.",
        },
      ],
    },
    proofs: proofs(),
  },
  {
    slug: "suivi-sanitaire-prophylaxie",
    name: "Suivi Sanitaire & Prophylaxie",
    menuDescription: "Biosécurité, plans de vaccination, audit sanitaire",
    seoDescription:
      "Suivi sanitaire des élevages porcins : biosécurité, plans de vaccination, audits sanitaires et démédication raisonnée.",
    hero: { title: "Suivi sanitaire et prophylaxie de votre élevage porcin", subtitle: heroSubtitle },
    figures: placeholderFigures,
    services: {
      title: "Ce qu'on fait",
      subtitle: "Quatre prestations pour sécuriser durablement le statut sanitaire.",
      items: [
        {
          title: "Audit de biosécurité",
          description: "Visite complète du site, circuits, quais et sas : un plan d'action hiérarchisé et chiffré.",
        },
        {
          title: "Plans de vaccination",
          description: "Protocoles adaptés au statut de l'élevage (PCV2, SDRP, iléite…) et suivi de leur efficacité.",
        },
        {
          title: "Suivi sérologique",
          description: "Prélèvements et profils sérologiques pour objectiver la circulation des pathogènes.",
        },
        {
          title: "Démédication raisonnée",
          description: "Réduction des traitements antibiotiques sans perte de performances, étape par étape.",
        },
      ],
    },
    situations: {
      title: "Pour qui, quand ?",
      subtitle: "Les situations où nous appeler dans les mots du terrain.",
      items: [
        {
          title: "Les toux reviennent à chaque bande",
          description: "Profils sérologiques et nécropsies pour identifier l'agent en cause et adapter la vaccination.",
        },
        {
          title: "Je prépare un contrôle DDPP",
          description: "Audit de biosécurité et mise à jour du registre et des protocoles avant la visite.",
        },
        {
          title: "Je veux réduire les antibiotiques",
          description: "Plan de démédication progressif appuyé sur les indicateurs sanitaires de l'élevage.",
        },
      ],
    },
    proofs: proofs(),
  },
  {
    slug: "accompagnement-technique",
    name: "Accompagnement Technique",
    menuDescription: "Ventilation, confort de l'animal, sevrage",
    seoDescription:
      "Accompagnement technique et bâtiment en élevage porcin : ventilation, confort et bien-être animal, qualité de l'eau et sevrage.",
    hero: { title: "Accompagnement technique et bâtiment en élevage porcin", subtitle: heroSubtitle },
    figures: placeholderFigures,
    services: {
      title: "Ce qu'on fait",
      subtitle: "Quatre prestations, du bâtiment au bien-être des animaux.",
      items: [
        {
          title: "Diagnostic ventilation",
          description: "Mesures d'ambiance, débits et températures pour corriger les défauts de ventilation.",
        },
        {
          title: "Qualité de l'eau",
          description: "Analyses, débits aux abreuvoirs et traitement de l'eau adaptés à chaque stade.",
        },
        {
          title: "Réussite du sevrage",
          description: "Gestion des diarrhées en post-sevrage : ambiance, alimentation et conduite.",
        },
        {
          title: "Bien-être animal",
          description: "Confort, enrichissement et conformité aux cahiers des charges (bio, Label Rouge…).",
        },
      ],
    },
    situations: {
      title: "Pour qui, quand ?",
      subtitle: "Les situations où nous appeler dans les mots du terrain.",
      items: [
        {
          title: "Mes porcelets décrochent après le sevrage",
          description: "Bilan ambiance, eau et alimentation en post-sevrage avec un plan d'action concret.",
        },
        {
          title: "Il fait trop chaud ou trop humide en salle",
          description: "Diagnostic de la ventilation et réglages des régulateurs, salle par salle.",
        },
        {
          title: "Je passe en production sous label",
          description: "Accompagnement des adaptations techniques exigées par le cahier des charges.",
        },
      ],
    },
    proofs: proofs(),
  },
  {
    slug: "medecines-douces",
    name: "Médecines douces",
    menuDescription: "Acupuncture, phytothérapie, homéopathie",
    seoDescription:
      "Médecines complémentaires en élevage porcin : acupuncture, phytothérapie et homéopathie en appui des traitements conventionnels.",
    hero: { title: "Médecines douces au service de la santé de vos porcs", subtitle: heroSubtitle },
    figures: placeholderFigures,
    services: {
      title: "Ce qu'on fait",
      subtitle: "Quatre approches complémentaires des traitements conventionnels.",
      items: [
        {
          title: "Acupuncture",
          description: "Séances ciblées sur les troubles de la reproduction et le bien-être des reproducteurs.",
        },
        {
          title: "Phytothérapie",
          description: "Plantes et extraits pour soutenir la digestion et l'immunité, notamment en élevage bio.",
        },
        {
          title: "Homéopathie",
          description: "Protocoles d'appui autour de la mise bas et du sevrage, en complément du suivi vétérinaire.",
        },
        {
          title: "Plan de réduction des intrants",
          description: "Intégration des médecines douces dans une stratégie globale de démédication.",
        },
      ],
    },
    situations: {
      title: "Pour qui, quand ?",
      subtitle: "Les situations où nous appeler dans les mots du terrain.",
      items: [
        {
          title: "Je suis en élevage biologique",
          description: "Des alternatives validées pour limiter les traitements allopathiques autorisés.",
        },
        {
          title: "Je veux soutenir mes truies autour de la mise bas",
          description: "Protocoles de phytothérapie et d'acupuncture adaptés au péri-partum.",
        },
        {
          title: "Je cherche à réduire les antibiotiques",
          description: "Des solutions complémentaires intégrées à votre plan sanitaire.",
        },
      ],
    },
    proofs: proofs(),
  },
  {
    slug: "solutions-digitales-data",
    name: "Solutions Digitales & Data",
    menuDescription: "Valorisation des données d'élevage",
    seoDescription:
      "Valorisation des données d'élevage porcin : GTTT, GTE, indices de consommation et taux de pertes traduits en leviers économiques.",
    hero: { title: "Solutions digitales et valorisation des données d'élevage", subtitle: heroSubtitle },
    figures: placeholderFigures,
    services: {
      title: "Ce qu'on fait",
      subtitle: "Quatre prestations pour transformer vos données en décisions.",
      items: [
        {
          title: "Analyse GTTT / GTE",
          description: "Lecture de vos résultats techniques et économiques et comparaison aux références.",
        },
        {
          title: "Tableaux de bord",
          description: "Indicateurs clés suivis bande après bande sur les meilleurs outils du marché.",
        },
        {
          title: "Indices de consommation",
          description: "Identification des pertes d'efficacité alimentaire et leviers d'amélioration.",
        },
        {
          title: "Conseil stratégique",
          description: "Traduction des indicateurs en décisions pour piloter et transmettre l'exploitation.",
        },
      ],
    },
    situations: {
      title: "Pour qui, quand ?",
      subtitle: "Les situations où nous appeler dans les mots du terrain.",
      items: [
        {
          title: "J'ai des données mais je ne sais pas quoi en faire",
          description: "Mise en forme et lecture commentée de vos indicateurs avec votre vétérinaire.",
        },
        {
          title: "Mon indice de consommation se dégrade",
          description: "Analyse croisée alimentation, sanitaire et bâtiment pour trouver la cause.",
        },
        {
          title: "Je prépare la transmission de l'élevage",
          description: "Bilan technico-économique et plan de progrès pour valoriser l'exploitation.",
        },
      ],
    },
    proofs: proofs(),
  },
];

export const getExpertiseDetail = (slug: string) => expertiseDetails.find((item) => item.slug === slug);

export const expertiseHref = (slug: string) => `/expertise/${slug}`;

/** Entrées du menu déroulant "Expertise" */
export const expertiseMenu: NonNullable<NavLink["children"]> = expertiseDetails.map((item) => ({
  label: item.name,
  href: expertiseHref(item.slug),
  description: item.menuDescription,
}));

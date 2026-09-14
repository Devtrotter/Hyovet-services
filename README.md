# Hyovet Services — site vitrine

Next.js 16 (App Router, TypeScript) · SCSS Modules · GSAP · react-icons.

```bash
npm run dev     # développement
npm run build   # build de production (page d'accueil pré-rendue en statique)
npm run start   # serveur de production
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx            polices, SEO, header / footer / boutons flottants
│   ├── page.tsx              accueil
│   ├── expertise/page.tsx    nos domaines d'expertise
│   ├── expertise/[slug]/     détail d'une expertise (5 pages pré-rendues via generateStaticParams)
│   ├── cabinets/page.tsx     groupe Hyovet Services
│   └── cabinets/[slug]/      Hyovet et Selas de Surfonds (thème de marque via variables CSS --cab-*)
├── content/                  textes & données typés (futur branchement CMS Firebase)
│   ├── home.ts · expertise.ts · expertises.ts · cabinets.ts (pages + menus) · site.ts · types.ts
├── styles/
│   ├── abstracts/            rem(), tokens (couleurs, rayons, ombres), mixins (breakpoints, container)
│   └── globals.scss          reset + racine fluide
├── components/               composants partagés entre pages
│   ├── layout/               Header (+ menus déroulants Expertise / Cabinets, MobileNav), Footer (+ NewsletterForm), FloatingActions
│   ├── sections/             MediaHero (image + vidéo), DetailHero (fil d'Ariane), KeyFigures (home / compact),
│   │                         NewsSection (home / proofs), Zones (stacked / side), IntroSplit,
│   │                         ValuesSection, TeamSection (plain / tinted)
│   ├── ui/                   Button (sky, light md/lg, outline, primary), Badge, SectionHeading,
│   │                         ImageCard (glass / overlay, md / lg), CtaBanner, ContactBanner, Breadcrumb
│   └── animations/           ScrollReveal (apparitions au scroll), CountUp (compteurs)
├── sections/
│   ├── home/                 KeyFigures, Needs, Zones (accordéon + Google Maps), News
│   ├── expertise/            Domains (grille de cartes), Method (étapes + bandeau publications)
│   ├── expertise-detail/     Services (« Ce qu'on fait »), Situations (« Pour qui, quand ? »)
│   └── cabinets/             GroupHero, Timeline, CabinetsShowcase, CabinetHero, CabinetInfoCard
└── lib/                      gsap (chargement différé), format
```

## Pixel perfect & responsive

- La maquette est dessinée sur un frame de **1728px**. Toutes les valeurs SCSS sont saisies en px maquette
  via `rem(px)` (1rem = 16px maquette).
- **Échelle d'affichage validée : 0.8** (rendu à 100 % = maquette vue à 80 % dans le navigateur).
  Racine desktop : `clamp(10.667px, 100vw / 108, 12.8px)` → proportions strictement identiques à la maquette
  (vérifié par superposition, écarts ≤ 4px à l'échelle), fixe à 12.8px au-delà de 1382px, fluide en dessous.
- Tablette / mobile (< 880px) : racine 13.333px et mises en page dédiées.
  Breakpoints : `lg` 880px, `md` 720px, `sm` 512px.

## Performance

- Page 100 % statique, CSS inliné (≈ 8 Ko), polices `next/font` auto-hébergées (Inter non préchargée : footer).
- Hero : image fixe floutée prioritaire (AVIF ≈ 13 Ko) pour le LCP, puis vidéo (WebM 205 Ko / MP4 395 Ko)
  chargée après `load` + inactivité du navigateur, en fondu, mise en pause hors écran,
  ignorée en mode économie de données / réseau 2G / `prefers-reduced-motion`.
- GSAP chargé dynamiquement après inactivité ; déclenchements au scroll via `IntersectionObserver`.
- Google Maps montée uniquement à l'approche de la section.
- Lighthouse (build local) : accueil desktop 100 / mobile 94 · expertise desktop 99 / mobile 94 · SEO 100.

## À faire hors maquette

- Newsletter : brancher `NewsletterForm` sur une route API Brevo.
- Google Maps dépose des cookies tiers : prévoir le consentement RGPD (ou un clic pour charger la carte).

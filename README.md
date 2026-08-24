# TotemPub — site Kontfeel (Astro)

Site vitrine statique des totems publicitaires en carton, organisé en cocon
sémantique (voir [`DIRECTIVES.md`](DIRECTIVES.md) pour la stratégie éditoriale).

## Stack

- [Astro](https://astro.build) — génération statique, zéro JS envoyé au client
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- `@astrojs/sitemap` — `sitemap-index.xml` généré au build

## Commandes

| Commande          | Effet                                        |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Serveur de dev sur `localhost:4321`          |
| `npm run build`   | Génère le site statique dans `dist/`         |
| `npm run preview` | Sert `dist/` localement                      |
| `npm run check`   | Vérification TypeScript des fichiers `.astro`|

## Structure

```
src/
├── data/navigation.ts       # Source unique des silos, menus et libellés
├── layouts/
│   ├── BaseLayout.astro     # <html>, <head>, header + footer  (accueil, contact)
│   └── ClusterLayout.astro  # BaseLayout + fil d'Ariane + menu contextuel du silo
├── components/
│   ├── Header.astro         # Nav principale, lien actif calculé au build
│   ├── Footer.astro
│   ├── Breadcrumb.astro
│   └── ContextualMenu.astro # Sidebar du silo, pilotée par navigation.ts
├── pages/                   # 1 fichier = 1 URL (routing par fichier)
└── styles/global.css        # Thème de marque (@theme) + composants (@layer)
```

### Ajouter une page à un silo

1. Ajouter l'entrée dans `links` du silo concerné dans `src/data/navigation.ts`
   (le menu contextuel et le maillage se mettent à jour partout).
2. Créer `src/pages/<silo>/<slug>.astro` sur le modèle d'une page existante :
   `title`, `description`, `breadcrumb`, puis le contenu dans `<ClusterLayout>`.

### Couleurs de marque

Définies une seule fois dans `src/styles/global.css` sous `@theme`.
Elles génèrent les utilitaires `bg-brand`, `text-brand-dark`,
`border-brand-secondary`, etc.

## Déploiement (Netlify)

Configuré dans [`netlify.toml`](netlify.toml) : `npm run build` → publication de `dist/`.

Le domaine n'est **pas codé en dur**. `astro.config.mjs` lit les variables
injectées par Netlify au build :

| Contexte        | Variable utilisée   | Effet sur canoniques / sitemap  |
| --------------- | ------------------- | ------------------------------- |
| Production      | `URL`               | Domaine principal du site       |
| Deploy preview  | `DEPLOY_PRIME_URL`  | URL de la preview               |
| Local           | —                   | `http://localhost:4321`         |

`robots.txt` est généré par [`src/pages/robots.txt.ts`](src/pages/robots.txt.ts)
à partir de la même source : rien à modifier lors d'un changement de domaine.

## Reste à faire

- Brancher le formulaire de `/contact/` (actuellement `action="#"`).
- Le bouton menu mobile (`md:hidden` dans `Header.astro`) est décoratif :
  aucun panneau ne s'ouvre.

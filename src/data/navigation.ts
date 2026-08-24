export interface NavLink {
    name: string;
    url: string;
}

export interface Cluster {
    /** Libellé court utilisé dans la navigation principale et le fil d'Ariane. */
    label: string;
    /** Titre affiché en tête du menu contextuel (sidebar). */
    sidebarTitle: string;
    /** Page pilier du silo. */
    url: string;
    /** Pages filles du silo. */
    links: NavLink[];
}

export type ClusterKey =
    | 'totem-carton-publicitaire'
    | 'totem-carton-secteurs'
    | 'fabrication-totem-carton'
    | 'guide-totem-carton';

export const clusters: Record<ClusterKey, Cluster> = {
    'totem-carton-publicitaire': {
        label: 'Formes & Types',
        sidebarTitle: 'Cluster A : Formes & Types',
        url: '/totem-carton-publicitaire/',
        links: [
            { name: 'Totem Elliptique', url: '/totem-carton-publicitaire/totem-elliptique/' },
            { name: 'Totem 3 faces', url: '/totem-carton-publicitaire/totem-3-faces/' },
            { name: 'Totem Pliable', url: '/totem-carton-publicitaire/totem-pliable/' },
            { name: 'Totem Cube / Carré', url: '/totem-carton-publicitaire/totem-cube-carre/' },
            { name: 'Totem 3D / Silhouette', url: '/totem-carton-publicitaire/totem-3d-silhouette/' },
            { name: 'Totem de Comptoir', url: '/totem-carton-publicitaire/totem-comptoir/' },
        ],
    },
    'totem-carton-secteurs': {
        label: 'Secteurs',
        sidebarTitle: 'Cluster B : Secteurs & Usages',
        url: '/totem-carton-secteurs/',
        links: [
            { name: 'Pharmacie', url: '/totem-carton-secteurs/pharmacie/' },
            { name: 'GMS / Grande Distribution', url: '/totem-carton-secteurs/grande-distribution/' },
            { name: 'Salon Professionnel', url: '/totem-carton-secteurs/salon-professionnel/' },
            { name: 'Commerce & Boutique', url: '/totem-carton-secteurs/commerce-boutique/' },
            { name: 'Événementiel', url: '/totem-carton-secteurs/evenementiel/' },
        ],
    },
    'fabrication-totem-carton': {
        label: 'Fabrication',
        sidebarTitle: 'Cluster C : Fabrication & Perso',
        url: '/fabrication-totem-carton/',
        links: [
            { name: 'Personnalisation', url: '/fabrication-totem-carton/personnalisation/' },
            { name: "Techniques d'Impression", url: '/fabrication-totem-carton/impression-techniques/' },
            { name: 'Matériaux Carton', url: '/fabrication-totem-carton/materiaux-carton/' },
            { name: 'Éco-responsable', url: '/fabrication-totem-carton/eco-responsable/' },
            { name: 'Prix & Devis', url: '/fabrication-totem-carton/prix-devis/' },
        ],
    },
    'guide-totem-carton': {
        label: 'Guides',
        sidebarTitle: 'Cluster D : Guides & Ressources',
        url: '/guide-totem-carton/',
        links: [
            { name: 'Faire un totem', url: '/guide-totem-carton/faire-totem-carton/' },
            { name: 'Choisir son totem', url: '/guide-totem-carton/choisir-totem-carton/' },
            { name: 'Carton vs Autres PLV', url: '/guide-totem-carton/totem-carton-vs-autres-plv/' },
            { name: 'Réussir sa campagne', url: '/guide-totem-carton/reussir-campagne-plv/' },
            { name: 'Glossaire PLV', url: '/guide-totem-carton/glossaire-plv/' },
        ],
    },
};

/** Navigation principale du header. */
export const mainNav: NavLink[] = (
    Object.keys(clusters) as ClusterKey[]
).map((key) => ({ name: clusters[key].label, url: clusters[key].url }));

/** Silos listés dans le footer (libellés spécifiques au footer). */
export const footerNav: NavLink[] = [
    { name: 'Formes & Types', url: '/totem-carton-publicitaire/' },
    { name: "Secteurs d'activité", url: '/totem-carton-secteurs/' },
    { name: 'Notre Fabrication', url: '/fabrication-totem-carton/' },
    { name: 'Guides & Ressources', url: '/guide-totem-carton/' },
];

/**
 * Normalise un chemin pour comparaison (`/foo/index.html` et `/foo` -> `/foo/`).
 */
export function normalizePath(path: string): string {
    const withoutIndex = path.replace(/index\.html$/, '');
    return withoutIndex.endsWith('/') ? withoutIndex : `${withoutIndex}/`;
}

export interface BreadcrumbItem {
    name: string;
    /** Absent sur le dernier maillon (page courante). */
    href?: string;
}

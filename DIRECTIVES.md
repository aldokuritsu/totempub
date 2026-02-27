# Architecture Cocon Sémantique — Site Totems Publicitaires en Carton

> **Objectif** : Vitrine + référencement naturel pour Kontfeel  
> **Cible SEO** : Responsables marketing, directeurs de magasins, acheteurs PLV (pharmacie, GMS, retail spécialisé)  
> **Stack recommandée** : Astro + Sanity CMS (cohérent avec l'écosystème existant)  
> **Nombre de pages** : 25 pages (extensible)

---

## 1. Synthèse de l'analyse des mots-clés

### Mots-clés retenus (nettoyage du fichier Ubersuggest)

J'ai écarté tous les mots-clés hors-sujet (espagnol, anglais, gaming, célébrités) pour ne garder que les requêtes françaises à potentiel business.

| Mot-clé | Volume | CPC | SD | Priorité | Rôle dans le cocon |
|---------|--------|-----|-----|----------|-------------------|
| totem en carton | 720 | 3,07€ | 44 | ⭐⭐⭐ | Page pilier principale |
| totem carton publicitaire | 140 | 2,88€ | 44 | ⭐⭐⭐ | Page pilier secondaire |
| totem 3 faces | 90 | 6,12€ | 15 | ⭐⭐⭐ | Page produit (faible concurrence, fort CPC) |
| totem carton elliptique | 50 | 2,45€ | 44 | ⭐⭐ | Page produit forme |
| totem carton pliable | 40 | 2,65€ | 44 | ⭐⭐ | Page produit forme |
| totem carton plv | 40 | 2,56€ | 44 | ⭐⭐ | Fusionné avec pilier |
| totem 3d | 40 | 0€ | 24 | ⭐⭐ | Page produit/inspiration |
| faire un totem en carton | 30 | 0€ | 12 | ⭐⭐⭐ | Page guide (faible concurrence) |
| statue en carton | 30 | 0€ | 33 | ⭐ | Page silhouette/factice |
| construire un totem en carton | 10 | 0€ | 5 | ⭐⭐⭐ | Fusionné avec "faire un totem" |
| fabrication d un totem en carton | 10 | 0€ | 5 | ⭐⭐⭐ | Page processus fabrication |
| totem en carton personnalisé | 0* | 0€ | 4 | ⭐⭐ | Page personnalisation |
| statue en carton personnalisé | 20 | 0,50€ | 36 | ⭐ | Fusionné avec silhouette |
| statue en carton grandeur nature | 0* | 0€ | 4 | ⭐ | Fusionné avec silhouette |
| totem carton alvéolaire | 0* | 0€ | 12 | ⭐ | Page matériaux |
| totem carton 2 faces | 0* | 0€ | 4 | ⭐ | Couvert dans page elliptique |
| totem carton 4 faces | 0* | 0€ | 4 | ⭐ | Page produit cube |
| totem carton vierge | 0* | 0€ | 12 | ⭐ | Couvert dans personnalisation |

> *0 volume Ubersuggest = données insuffisantes, mais requêtes réelles avec potentiel longue traîne. Ces requêtes ont souvent du volume réel non détecté par Ubersuggest.

### Mots-clés complémentaires à travailler (hors fichier, identifiés par analyse concurrentielle)

Ces termes n'étaient pas dans ton export mais sont essentiels pour un cocon complet :

- `totem publicitaire` (volume estimé élevé, générique parent)
- `plv carton` (volume élevé, parent sémantique)
- `totem carton sur mesure` (intention transactionnelle forte)
- `totem carton prix` (intention commerciale)
- `totem carton pharmacie` (niche verticale — cohérent avec pharma-retail.fr)
- `totem carton grande distribution` / `totem carton GMS`
- `totem carton salon professionnel`
- `totem carton éco-responsable` / `totem carton recyclable`
- `totem de comptoir carton`
- `arche publicitaire carton`
- `présentoir carton magasin`
- `totem carton avec porte-flyers`

---

## 2. Architecture du cocon sémantique

### Vue d'ensemble (3 niveaux)

```
NIVEAU 0 — Page Méta-Pilier
└── Accueil : "Totem en carton publicitaire"

NIVEAU 1 — Pages Piliers (4 clusters)
├── CLUSTER A : Formes & Types de totems
├── CLUSTER B : Secteurs & Usages
├── CLUSTER C : Fabrication & Personnalisation
└── CLUSTER D : Guides & Ressources

NIVEAU 2 — Pages Enfants (détail de chaque cluster)
└── 5-6 pages par cluster
```

### Arborescence détaillée

```
/
├── index                          ← PAGE MÉTA-PILIER
│
├── /totem-carton-publicitaire/    ← PILIER A : Formes & Types
│   ├── totem-elliptique           ← enfant A1
│   ├── totem-3-faces              ← enfant A2
│   ├── totem-pliable              ← enfant A3
│   ├── totem-cube-carre           ← enfant A4
│   ├── totem-3d-silhouette        ← enfant A5
│   └── totem-comptoir             ← enfant A6
│
├── /totem-carton-secteurs/        ← PILIER B : Secteurs & Usages
│   ├── pharmacie                  ← enfant B1
│   ├── grande-distribution        ← enfant B2
│   ├── salon-professionnel        ← enfant B3
│   ├── commerce-boutique          ← enfant B4
│   └── evenementiel               ← enfant B5
│
├── /fabrication-totem-carton/     ← PILIER C : Fabrication & Perso
│   ├── personnalisation           ← enfant C1
│   ├── impression-techniques      ← enfant C2
│   ├── materiaux-carton           ← enfant C3
│   ├── eco-responsable            ← enfant C4
│   └── prix-devis                 ← enfant C5
│
├── /guide-totem-carton/           ← PILIER D : Guides & Ressources
│   ├── faire-totem-carton         ← enfant D1
│   ├── choisir-totem-carton       ← enfant D2
│   ├── totem-carton-vs-autres-plv ← enfant D3
│   ├── reussir-campagne-plv       ← enfant D4
│   └── glossaire-plv              ← enfant D5
│
└── /contact                       ← Page de conversion (hors cocon)
```

**Total : 25 pages** (1 accueil + 4 piliers + 19 enfants + 1 contact)

---

## 3. Maillage interne — Règles du cocon

### Principes appliqués

1. **Verticalité stricte** : Chaque page enfant lie vers son pilier parent et vers les pages sœurs du même cluster.
2. **Pas de liens transversaux directs entre enfants de clusters différents** (sauf exception justifiée ci-dessous).
3. **Les piliers lient entre eux** via la page méta-pilier (accueil).
4. **Chaque page enfant contient un CTA vers la page contact/devis** (lien de conversion, nofollow interne optionnel).

### Matrice de maillage

```
LÉGENDE :
→  = lien descendant (parent → enfant)
←  = lien ascendant (enfant → parent)
↔  = lien horizontal (sœurs du même cluster)
⤴  = lien transversal autorisé (entre clusters, via contexte éditorial)

ACCUEIL
  → Pilier A, Pilier B, Pilier C, Pilier D
  → D2 "Comment choisir" (featured guide)

PILIER A (Formes & Types)
  ← Accueil
  → A1, A2, A3, A4, A5, A6
  ↔ Pilier B (contextuel : "découvrez quel totem pour votre secteur")
  ↔ Pilier C (contextuel : "personnalisez votre totem")

  A1 (Elliptique) ← Pilier A, ↔ A2, A3     ⤴ B1 (pharmacie), C1 (personnalisation)
  A2 (3 faces)    ← Pilier A, ↔ A1, A4     ⤴ B3 (salon pro)
  A3 (Pliable)    ← Pilier A, ↔ A1, A4     ⤴ B4 (commerce), B5 (événementiel)
  A4 (Cube/Carré) ← Pilier A, ↔ A2, A3     ⤴ B3 (salon pro)
  A5 (3D/Silhou.) ← Pilier A, ↔ A1, A6     ⤴ C2 (impression)
  A6 (Comptoir)   ← Pilier A, ↔ A1, A5     ⤴ B1 (pharmacie), B4 (commerce)

PILIER B (Secteurs)
  ← Accueil
  → B1, B2, B3, B4, B5
  ↔ Pilier A, Pilier C

  B1 (Pharmacie)  ← Pilier B, ↔ B2, B4     ⤴ A1 (elliptique), A6 (comptoir)
  B2 (GMS)        ← Pilier B, ↔ B1, B4     ⤴ A2 (3 faces), C5 (prix)
  B3 (Salon pro)  ← Pilier B, ↔ B4, B5     ⤴ A2 (3 faces), A4 (cube)
  B4 (Commerce)   ← Pilier B, ↔ B1, B2     ⤴ A3 (pliable), A6 (comptoir)
  B5 (Événement.) ← Pilier B, ↔ B3         ⤴ A3 (pliable), D4 (campagne PLV)

PILIER C (Fabrication)
  ← Accueil
  → C1, C2, C3, C4, C5
  ↔ Pilier A, Pilier D

  C1 (Perso)      ← Pilier C, ↔ C2, C5     ⤴ A1 (elliptique)
  C2 (Impression) ← Pilier C, ↔ C1, C3     ⤴ D1 (faire un totem)
  C3 (Matériaux)  ← Pilier C, ↔ C2, C4     ⤴ A5 (3D)
  C4 (Éco-resp.)  ← Pilier C, ↔ C3, C5     ⤴ D4 (campagne PLV)
  C5 (Prix/Devis) ← Pilier C, ↔ C1, C4     ⤴ B2 (GMS), contact

PILIER D (Guides)
  ← Accueil
  → D1, D2, D3, D4, D5
  ↔ Pilier A, Pilier C

  D1 (Faire)      ← Pilier D, ↔ D2         ⤴ C2 (impression), C3 (matériaux)
  D2 (Choisir)    ← Pilier D, ↔ D1, D3     ⤴ Pilier A (toutes formes)
  D3 (vs autres)  ← Pilier D, ↔ D2, D4     ⤴ C4 (éco-responsable)
  D4 (Campagne)   ← Pilier D, ↔ D3, D5     ⤴ Pilier B (tous secteurs)
  D5 (Glossaire)  ← Pilier D, ↔ tous D     (liens vers toutes les pages pertinentes)
```

---

## 4. Fiches de contenu par page

### PAGE MÉTA-PILIER — Accueil

| Champ | Contenu |
|-------|---------|
| **URL** | `/` |
| **Title** | Totem en Carton Publicitaire : PLV Sur-Mesure \| Kontfeel |
| **H1** | Totem en carton publicitaire : la PLV qui capte l'attention |
| **Meta description** | Découvrez nos totems en carton personnalisables pour votre communication en point de vente. Elliptique, 3 faces, pliable : trouvez la PLV carton idéale. |
| **Mot-clé principal** | totem en carton (720 vol.) |
| **Mots-clés secondaires** | totem carton publicitaire, totem carton plv, totem publicitaire |
| **Intention** | Informationnelle + navigationnelle |
| **Contenu cible** | ~1200 mots. Introduction au totem carton comme solution PLV. Présentation des formes disponibles (liens cluster A), des secteurs servis (liens cluster B), du processus de fabrication (lien cluster C), et un bloc "guide pour bien choisir" (lien cluster D). Bloc CTA vers contact/devis. |
| **Éléments visuels** | Hero image totem en situation, grille visuelle des formes, logos secteurs |
| **Liens sortants cocon** | Pilier A, Pilier B, Pilier C, Pilier D, D2, Contact |

---

### CLUSTER A — Formes & Types de totems

#### Pilier A — Page Hub Formes

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/` |
| **Title** | Types de Totems en Carton Publicitaire : Toutes les Formes PLV |
| **H1** | Les différents types de totems en carton publicitaire |
| **Meta description** | Elliptique, 3 faces, pliable, cube, 3D, comptoir : découvrez toutes les formes de totems carton PLV et trouvez celle qui correspond à votre besoin. |
| **Mot-clé principal** | totem carton publicitaire (140 vol.) |
| **Mots-clés secondaires** | types totem carton, formes totem plv |
| **Intention** | Informationnelle + commerciale |
| **Contenu cible** | ~1000 mots. Vue d'ensemble des formes existantes avec description courte et visuel de chaque type. Chaque bloc renvoie vers la page enfant dédiée. Tableau comparatif rapide (forme / usage idéal / taille / prix indicatif). |
| **Liens sortants cocon** | Accueil ←, A1→A6, Pilier B ↔, Pilier C ↔ |

#### A1 — Totem elliptique

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/totem-elliptique/` |
| **Title** | Totem Carton Elliptique : la PLV Best-Seller en Point de Vente |
| **H1** | Totem carton elliptique : le classique incontournable de la PLV |
| **Meta description** | Le totem elliptique en carton est le n°1 des supports PLV. Élégant, double face, personnalisable. Découvrez ses avantages et commandez sur mesure. |
| **Mot-clé principal** | totem carton elliptique (50 vol.) |
| **Mots-clés secondaires** | totem carton 2 faces, totem ovale carton, totem bombé |
| **Intention** | Commerciale |
| **Contenu cible** | ~800 mots. Description détaillée, dimensions standards (55x160, 65x195), avantages (visibilité double face, encombrement minimal), cas d'usage (tête de gondole, hall d'entrée, vitrine). Options : pied de stabilisation, porte-flyers intégré, découpe à la forme. |
| **Liens sortants cocon** | Pilier A ←, A2 ↔, A3 ↔, B1 ⤴, C1 ⤴, Contact |

#### A2 — Totem 3 faces

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/totem-3-faces/` |
| **Title** | Totem 3 Faces en Carton : Visibilité 360° pour votre PLV |
| **H1** | Totem 3 faces : captez l'attention sous tous les angles |
| **Meta description** | Le totem triangulaire 3 faces offre une visibilité à 360° en point de vente ou salon. Support PLV carton modulaire, personnalisable et éco-responsable. |
| **Mot-clé principal** | totem 3 faces (90 vol., SD 15 — PRIORITÉ HAUTE) |
| **Mots-clés secondaires** | totem triangulaire carton, totem carton 3 faces, totem triptyque |
| **Intention** | Transactionnelle / commerciale |
| **Contenu cible** | ~800 mots. Format triangulaire = visibilité dans les allées. Modulaire (4 ou 5 modules empilables). Idéal salons et GMS. Comparaison avec elliptique (2 faces vs 3 faces). Dimensions et options de personnalisation. |
| **Liens sortants cocon** | Pilier A ←, A1 ↔, A4 ↔, B3 ⤴, Contact |

#### A3 — Totem pliable

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/totem-pliable/` |
| **Title** | Totem Carton Pliable : PLV Nomade, Facile à Transporter |
| **H1** | Totem carton pliable : la PLV nomade par excellence |
| **Meta description** | Le totem pliable en carton se monte en 1 minute, se transporte à plat et se réutilise. Idéal pour événements, animations commerciales et PLV itinérante. |
| **Mot-clé principal** | totem carton pliable (40 vol.) |
| **Mots-clés secondaires** | totem pliant carton, totem carton transportable, totem démontable |
| **Intention** | Commerciale |
| **Contenu cible** | ~800 mots. Avantage clé : livré à plat, montage sans outil. Stockage et réutilisation. Idéal pour les enseignes multi-sites et les opérations éphémères. Comparaison avec totem rigide. |
| **Liens sortants cocon** | Pilier A ←, A1 ↔, A4 ↔, B4 ⤴, B5 ⤴, Contact |

#### A4 — Totem cube / carré

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/totem-cube-carre/` |
| **Title** | Totem Cube en Carton : PLV Modulaire et Originale |
| **H1** | Totem cube et carré en carton : la PLV modulaire créative |
| **Meta description** | Empilez des cubes en carton personnalisés pour créer un totem PLV unique. Modulaire, visuel à 360°, idéal pour salons et points de vente. |
| **Mot-clé principal** | totem carton 4 faces (long tail) |
| **Mots-clés secondaires** | totem cube carton, totem carré carton, totem modulaire, totem carton cube |
| **Intention** | Commerciale |
| **Contenu cible** | ~700 mots. Principe modulaire (3, 4 ou 5 cubes empilables). Avantages : visuels différents par cube, reconfigurable, ludique. Usages : stand, showroom, boutique tendance. |
| **Liens sortants cocon** | Pilier A ←, A2 ↔, A3 ↔, B3 ⤴, Contact |

#### A5 — Totem 3D / Silhouette / Factice

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/totem-3d-silhouette/` |
| **Title** | Totem 3D et Silhouette en Carton : PLV Sur-Mesure à Fort Impact |
| **H1** | Totem 3D, silhouette et factice en carton : l'impact visuel maximum |
| **Meta description** | Créez un totem 3D, une silhouette grandeur nature ou un factice produit géant en carton. La PLV sur-mesure qui marque les esprits. |
| **Mot-clé principal** | totem 3d (40 vol., SD 24) |
| **Mots-clés secondaires** | statue en carton, silhouette carton grandeur nature, statue en carton personnalisé, factice produit carton, statue carton taille réelle |
| **Intention** | Informationnelle + commerciale |
| **Contenu cible** | ~900 mots. Trois sous-catégories : totem 3D volumétrique, silhouette découpée grandeur nature, factice produit surdimensionné. Applications : lancement produit, théâtralisation rayon, animation événementielle. Processus de conception sur mesure. |
| **Liens sortants cocon** | Pilier A ←, A1 ↔, A6 ↔, C2 ⤴, Contact |

#### A6 — Totem de comptoir

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-publicitaire/totem-comptoir/` |
| **Title** | Totem de Comptoir en Carton : Mini PLV pour Comptoir et Gondole |
| **H1** | Totem de comptoir en carton : la PLV compacte qui vend |
| **Meta description** | Le totem de comptoir en carton est la PLV idéale pour comptoirs, caisses et gondoles. Petit format, grand impact. Personnalisable et éco-responsable. |
| **Mot-clé principal** | totem de comptoir carton (long tail) |
| **Mots-clés secondaires** | mini totem carton, totem carton petit format, présentoir comptoir carton |
| **Intention** | Commerciale |
| **Contenu cible** | ~700 mots. Différence sol vs comptoir. Usages : pharmacie (comptoir officinal), boulangerie, boutique. Formats disponibles. Intégration porte-brochure. |
| **Liens sortants cocon** | Pilier A ←, A1 ↔, A5 ↔, B1 ⤴, B4 ⤴, Contact |

---

### CLUSTER B — Secteurs & Usages

#### Pilier B — Page Hub Secteurs

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-secteurs/` |
| **Title** | Totem en Carton par Secteur : Pharmacie, GMS, Salon, Commerce |
| **H1** | Quel totem en carton pour votre secteur d'activité ? |
| **Meta description** | Pharmacie, grande distribution, salon professionnel, commerce : découvrez le totem carton adapté à chaque secteur et ses spécificités d'utilisation. |
| **Mot-clé principal** | totem carton secteur (sémantique) |
| **Intention** | Navigationnelle |
| **Contenu cible** | ~800 mots. Introduction sur la polyvalence du totem carton. Bloc par secteur avec résumé et lien. |
| **Liens sortants cocon** | Accueil ←, B1→B5, Pilier A ↔, Pilier C ↔ |

#### B1 — Totem carton pharmacie

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-secteurs/pharmacie/` |
| **Title** | Totem en Carton pour Pharmacie : PLV Officinale Sur-Mesure |
| **H1** | Totem en carton pour pharmacie : dynamisez votre officine |
| **Meta description** | Le totem carton est l'allié PLV de la pharmacie : promotion santé, mise en avant produits, signalétique officinale. Découvrez nos solutions sur mesure. |
| **Mot-clé principal** | totem carton pharmacie (long tail stratégique, lien pharma-retail.fr) |
| **Mots-clés secondaires** | plv pharmacie carton, totem officine, présentoir pharmacie |
| **Intention** | Commerciale |
| **Contenu cible** | ~900 mots. Contexte réglementaire pharmacie (PLV autorisée). Usages : promotion saison (allergies, solaires, hiver), lancement produit parapharmacie, signalétique rayons. Formats recommandés : elliptique pour allées, comptoir pour caisse. Lien stratégique possible avec pharma-retail.fr. |
| **Liens sortants cocon** | Pilier B ←, B2 ↔, B4 ↔, A1 ⤴, A6 ⤴, Contact |

#### B2 — Totem carton grande distribution / GMS

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-secteurs/grande-distribution/` |
| **Title** | Totem en Carton pour Grande Distribution : PLV GMS Efficace |
| **H1** | Totem en carton pour la grande distribution : visibilité en GMS |
| **Meta description** | Boostez vos opérations promotionnelles en GMS avec le totem carton. Grand format, éco-responsable, déployable sur des centaines de points de vente. |
| **Mot-clé principal** | totem carton grande distribution |
| **Mots-clés secondaires** | totem carton GMS, plv grande surface, totem carton supermarché |
| **Intention** | Commerciale |
| **Contenu cible** | ~800 mots. Contraintes GMS (volume, déploiement multi-sites, montage rapide par personnel non spécialisé). Formats adaptés. Logistique (envoi individuel, conditionnement à plat). ROI du totem en GMS. |
| **Liens sortants cocon** | Pilier B ←, B1 ↔, B4 ↔, A2 ⤴, C5 ⤴, Contact |

#### B3 — Totem carton salon professionnel

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-secteurs/salon-professionnel/` |
| **Title** | Totem en Carton pour Salon Professionnel : Stand PLV Impactant |
| **H1** | Totem en carton pour salon professionnel : démarquez votre stand |
| **Meta description** | Le totem carton pour salon professionnel : léger, transportable, percutant. Maximisez l'impact de votre stand avec une PLV recyclable et personnalisée. |
| **Mot-clé principal** | totem carton salon professionnel |
| **Mots-clés secondaires** | plv salon, totem stand exposition, totem foire commerciale |
| **Intention** | Commerciale |
| **Contenu cible** | ~800 mots. Avantages du carton vs structures rigides (poids, transport, coût). Formes recommandées : 3 faces (allées), cube (stand), pliable (réutilisation). Combiner totem + arche + présentoir. |
| **Liens sortants cocon** | Pilier B ←, B4 ↔, B5 ↔, A2 ⤴, A4 ⤴, Contact |

#### B4 — Totem carton commerce / boutique

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-secteurs/commerce-boutique/` |
| **Title** | Totem en Carton pour Commerce et Boutique : PLV de Proximité |
| **H1** | Totem en carton pour commerce et boutique : attirez vos clients |
| **Meta description** | Magasin, boutique, showroom : le totem carton est la PLV idéale pour les commerces de proximité. Vitrine, allée, comptoir : il s'adapte à tous vos espaces. |
| **Mot-clé principal** | totem carton commerce |
| **Mots-clés secondaires** | totem carton boutique, totem carton magasin, plv commerce proximité |
| **Intention** | Commerciale |
| **Contenu cible** | ~700 mots. Contraintes des petits espaces. Formats adaptés (comptoir, pliable). PLV vitrine. Animation saisonnière. |
| **Liens sortants cocon** | Pilier B ←, B1 ↔, B2 ↔, A3 ⤴, A6 ⤴, Contact |

#### B5 — Totem carton événementiel

| Champ | Contenu |
|-------|---------|
| **URL** | `/totem-carton-secteurs/evenementiel/` |
| **Title** | Totem en Carton pour Événementiel : PLV Éphémère et Éco-Responsable |
| **H1** | Totem en carton pour l'événementiel : impact éphémère, empreinte durable |
| **Meta description** | Animation commerciale, lancement produit, inauguration : le totem carton est la PLV événementielle idéale. Écologique, personnalisable, montage en 1 minute. |
| **Mot-clé principal** | totem carton événementiel |
| **Mots-clés secondaires** | plv événementielle carton, totem animation commerciale, totem lancement produit |
| **Intention** | Commerciale |
| **Contenu cible** | ~700 mots. PLV éphémère et recyclable = cohérence RSE. Arche publicitaire, photo booth, silhouette géante. Coordination avec opé marketing. |
| **Liens sortants cocon** | Pilier B ←, B3 ↔, A3 ⤴, D4 ⤴, Contact |

---

### CLUSTER C — Fabrication & Personnalisation

#### Pilier C — Page Hub Fabrication

| Champ | Contenu |
|-------|---------|
| **URL** | `/fabrication-totem-carton/` |
| **Title** | Fabrication de Totem en Carton : Processus, Matériaux, Personnalisation |
| **H1** | Comment est fabriqué un totem en carton publicitaire ? |
| **Meta description** | De la conception à la livraison : découvrez le processus de fabrication d'un totem en carton PLV. Matériaux, impression, personnalisation et prix. |
| **Mot-clé principal** | fabrication totem carton (10 vol., SD 5) |
| **Mots-clés secondaires** | fabrication d un totem en carton, processus fabrication plv |
| **Intention** | Informationnelle |
| **Contenu cible** | ~1000 mots. Parcours de fabrication étape par étape : brief → conception graphique → choix matériau → impression → découpe → conditionnement → livraison. Renvoie vers chaque enfant pour le détail. |
| **Liens sortants cocon** | Accueil ←, C1→C5, Pilier A ↔, Pilier D ↔ |

#### C1 — Personnalisation du totem carton

| Champ | Contenu |
|-------|---------|
| **URL** | `/fabrication-totem-carton/personnalisation/` |
| **Title** | Totem en Carton Personnalisé : Forme, Visuel, Découpe Sur-Mesure |
| **H1** | Totem en carton personnalisé : créez une PLV à votre image |
| **Meta description** | Personnalisez votre totem en carton : forme, dimensions, visuels, découpe, accessoires (porte-flyers, urne, écran). PLV sur mesure 100% à vos couleurs. |
| **Mot-clé principal** | totem en carton personnalisé (long tail, SD 4) |
| **Mots-clés secondaires** | totem carton sur mesure, totem carton vierge, personnalisation plv carton |
| **Intention** | Transactionnelle |
| **Contenu cible** | ~800 mots. Axes de personnalisation : forme, dimensions, graphisme, découpe à la forme, accessoires (porte-flyers, urne, fronton, arche, étagère, écran vidéo). Gabarit d'impression. Comment fournir ses visuels. |
| **Liens sortants cocon** | Pilier C ←, C2 ↔, C5 ↔, A1 ⤴, Contact |

#### C2 — Techniques d'impression

| Champ | Contenu |
|-------|---------|
| **URL** | `/fabrication-totem-carton/impression-techniques/` |
| **Title** | Impression Totem Carton : Numérique, Offset, Sérigraphie |
| **H1** | Les techniques d'impression pour totem en carton |
| **Meta description** | Impression numérique, offset ou sérigraphie : quelle technique choisir pour votre totem carton ? Comparatif qualité, volume et budget. |
| **Mot-clé principal** | impression totem carton |
| **Mots-clés secondaires** | impression plv carton, quadrichromie totem, impression UV totem |
| **Intention** | Informationnelle |
| **Contenu cible** | ~800 mots. 3 techniques : numérique (petites séries, prototypage), offset (gros volumes, meilleur rapport qualité/prix), sérigraphie (intermédiaire, qualité carton spécifique). Finitions : pelliculage mat/brillant, vernis sélectif, impression UV. Résolution requise (300 DPI). |
| **Liens sortants cocon** | Pilier C ←, C1 ↔, C3 ↔, D1 ⤴, Contact |

#### C3 — Matériaux et types de carton

| Champ | Contenu |
|-------|---------|
| **URL** | `/fabrication-totem-carton/materiaux-carton/` |
| **Title** | Matériaux pour Totem en Carton : Micro-Cannelure, Alvéolaire, Ondulé |
| **H1** | Quel carton pour votre totem publicitaire ? |
| **Meta description** | Micro-cannelure, carton alvéolaire, carton ondulé, carton compact : découvrez les matériaux utilisés pour fabriquer un totem carton PLV résistant. |
| **Mot-clé principal** | totem carton alvéolaire (long tail) |
| **Mots-clés secondaires** | carton micro cannelure plv, carton ondulé totem, épaisseur carton totem |
| **Intention** | Informationnelle |
| **Contenu cible** | ~800 mots. Carton micro-cannelure (1,5mm, standard PLV), carton alvéolaire (10mm, rigidité supérieure), carton ondulé (double/triple cannelure, gros volumes), carton compact/cartonné (380g, finitions premium). Tableau comparatif épaisseur/rigidité/usage/prix. |
| **Liens sortants cocon** | Pilier C ←, C2 ↔, C4 ↔, A5 ⤴, Contact |

#### C4 — Totem carton éco-responsable

| Champ | Contenu |
|-------|---------|
| **URL** | `/fabrication-totem-carton/eco-responsable/` |
| **Title** | Totem en Carton Éco-Responsable : PLV Recyclable et Durable |
| **H1** | Totem en carton éco-responsable : la PLV verte par excellence |
| **Meta description** | Le totem carton est recyclable, issu de filières recyclées, certifiable FSC. Découvrez pourquoi c'est la PLV la plus éco-responsable du marché. |
| **Mot-clé principal** | totem carton éco-responsable |
| **Mots-clés secondaires** | totem carton recyclable, plv écologique, plv durable carton, totem FSC |
| **Intention** | Informationnelle |
| **Contenu cible** | ~800 mots. Arguments : 100% recyclable, carton recyclé, certifications FSC, fabrication France, faible empreinte carbone vs PVC/alu. Réponse aux exigences RSE des marques. Chiffres clés (65% des consommateurs préfèrent les marques éco-responsables). |
| **Liens sortants cocon** | Pilier C ←, C3 ↔, C5 ↔, D3 ⤴, Contact |

#### C5 — Prix et devis totem carton

| Champ | Contenu |
|-------|---------|
| **URL** | `/fabrication-totem-carton/prix-devis/` |
| **Title** | Prix Totem en Carton : Tarifs, Devis Gratuit et Budget PLV |
| **H1** | Combien coûte un totem en carton publicitaire ? |
| **Meta description** | Découvrez les fourchettes de prix des totems carton PLV selon la forme, la taille et la quantité. Devis gratuit et tarifs dégressifs. |
| **Mot-clé principal** | totem carton prix (long tail à forte intention commerciale) |
| **Mots-clés secondaires** | prix totem publicitaire, devis totem carton, budget plv carton, totem carton pas cher |
| **Intention** | Transactionnelle |
| **Contenu cible** | ~800 mots. Fourchettes de prix par type (elliptique, 3 faces, cube, sur-mesure). Facteurs influençant le prix (quantité, format, impression, finitions, logistique). Tarifs dégressifs. CTA fort vers demande de devis Kontfeel. **Page de conversion clé.** |
| **Liens sortants cocon** | Pilier C ←, C1 ↔, C4 ↔, B2 ⤴, Contact |

---

### CLUSTER D — Guides & Ressources

#### Pilier D — Page Hub Guides

| Champ | Contenu |
|-------|---------|
| **URL** | `/guide-totem-carton/` |
| **Title** | Guide Complet du Totem en Carton : Conseils, Astuces et Comparatifs |
| **H1** | Le guide complet du totem en carton publicitaire |
| **Meta description** | Tout savoir sur le totem carton PLV : comment le choisir, le fabriquer, le comparer aux autres PLV et réussir votre campagne. Guide expert gratuit. |
| **Mot-clé principal** | guide totem carton |
| **Intention** | Informationnelle |
| **Contenu cible** | ~800 mots. Hub éditorial avec résumé de chaque guide et lien. Positionnement expertise Kontfeel. |
| **Liens sortants cocon** | Accueil ←, D1→D5, Pilier A ↔, Pilier C ↔ |

#### D1 — Comment faire / monter un totem en carton

| Champ | Contenu |
|-------|---------|
| **URL** | `/guide-totem-carton/faire-totem-carton/` |
| **Title** | Comment Faire un Totem en Carton : Guide de Montage et Conseils |
| **H1** | Comment faire un totem en carton : montage, astuces et bonnes pratiques |
| **Meta description** | Guide pratique pour monter votre totem en carton PLV : étapes de montage, conseils de stabilité, erreurs à éviter. Tutoriel illustré. |
| **Mot-clé principal** | faire un totem en carton (30 vol., SD 12) |
| **Mots-clés secondaires** | construire un totem en carton, montage totem carton, totem carton diy |
| **Intention** | Informationnelle (top of funnel) |
| **Contenu cible** | ~1000 mots. **Page à fort potentiel (SD très faible).** Double angle : montage d'un totem professionnel reçu à plat (tutoriel pratique destiné aux équipes en magasin) + brève section DIY pour capter la requête "construire" (puis rediriger vers le sur-mesure professionnel). Étapes illustrées. Conseils stabilité, emplacement, entretien. |
| **Liens sortants cocon** | Pilier D ←, D2 ↔, C2 ⤴, C3 ⤴, Contact |

#### D2 — Comment choisir son totem en carton

| Champ | Contenu |
|-------|---------|
| **URL** | `/guide-totem-carton/choisir-totem-carton/` |
| **Title** | Comment Choisir son Totem en Carton : Le Guide Décisionnel |
| **H1** | Comment choisir le totem en carton adapté à votre besoin ? |
| **Meta description** | Forme, taille, matériau, budget : notre guide décisionnel vous aide à choisir le totem carton PLV parfait pour votre point de vente ou événement. |
| **Mot-clé principal** | choisir totem carton |
| **Mots-clés secondaires** | quel totem carton choisir, comparatif totem plv |
| **Intention** | Informationnelle + commerciale |
| **Contenu cible** | ~1000 mots. Arbre décisionnel : espace disponible → intérieur/extérieur → durée d'utilisation → budget → secteur → forme recommandée. Tableau récapitulatif avec liens vers chaque forme (cluster A). **Page passerelle entre l'intention informationnelle et la conversion.** |
| **Liens sortants cocon** | Pilier D ←, D1 ↔, D3 ↔, Pilier A ⤴ (toutes formes), Contact |

#### D3 — Totem carton vs autres PLV

| Champ | Contenu |
|-------|---------|
| **URL** | `/guide-totem-carton/totem-carton-vs-autres-plv/` |
| **Title** | Totem Carton vs Autres PLV : Comparatif Roll-up, X-Banner, Kakemono |
| **H1** | Totem en carton vs roll-up, kakemono, X-banner : que choisir ? |
| **Meta description** | Comparatif objectif entre le totem carton et les autres supports PLV : roll-up, kakemono, X-banner, totem PVC. Avantages, inconvénients et prix. |
| **Mot-clé principal** | totem carton vs (sémantique comparatif) |
| **Mots-clés secondaires** | comparatif plv, totem vs roll up, totem vs kakemono, avantages totem carton |
| **Intention** | Informationnelle |
| **Contenu cible** | ~900 mots. Tableau comparatif multi-critères : prix, poids, surface d'impression, éco-responsabilité, durabilité, impact visuel, montage. Scénarios d'usage recommandés pour chaque support. Positionnement du totem carton comme meilleur rapport impact/prix. |
| **Liens sortants cocon** | Pilier D ←, D2 ↔, D4 ↔, C4 ⤴, Contact |

#### D4 — Réussir sa campagne PLV avec des totems

| Champ | Contenu |
|-------|---------|
| **URL** | `/guide-totem-carton/reussir-campagne-plv/` |
| **Title** | Réussir sa Campagne PLV avec des Totems en Carton : Stratégie et Conseils |
| **H1** | Comment réussir votre campagne PLV avec des totems en carton |
| **Meta description** | Stratégie de déploiement, placement en magasin, création graphique, coordination multi-sites : les clés d'une campagne PLV réussie avec des totems carton. |
| **Mot-clé principal** | campagne plv totem (sémantique) |
| **Mots-clés secondaires** | stratégie plv magasin, placement totem point de vente, réussir plv |
| **Intention** | Informationnelle |
| **Contenu cible** | ~1000 mots. Stratégie complète : définir l'objectif, choisir le format, créer le visuel (bonnes pratiques graphiques), positionner en magasin (zones chaudes, tête de gondole, entrée), coordonner un déploiement multi-sites, mesurer le ROI. |
| **Liens sortants cocon** | Pilier D ←, D3 ↔, D5 ↔, Pilier B ⤴, C4 ⤴, Contact |

#### D5 — Glossaire PLV et totem

| Champ | Contenu |
|-------|---------|
| **URL** | `/guide-totem-carton/glossaire-plv/` |
| **Title** | Glossaire PLV : Définitions Totem, Carton, Présentoir et Plus |
| **H1** | Glossaire PLV : tous les termes à connaître |
| **Meta description** | PLV, ILV, totem, micro-cannelure, offset, FSC, tête de gondole... Toutes les définitions du vocabulaire de la publicité sur lieu de vente. |
| **Mot-clé principal** | glossaire plv (longue traîne) |
| **Mots-clés secondaires** | définition totem publicitaire, définition plv, vocabulaire plv |
| **Intention** | Informationnelle (top of funnel) |
| **Contenu cible** | ~1200 mots. Définitions alphabétiques des termes clés (30-40 termes). Chaque terme renvoie vers la page la plus pertinente du cocon. **Page de maillage maximal** (hub de liens internes). Exemples de termes : arche, alvéolaire, balisage, cannelure, découpe à la forme, elliptique, factice, fronton, FSC, GMS, ILV, kakemono, micro-cannelure, offset, pelliculage, PLV, porte-flyers, présentoir, quadrichromie, recyclable, sérigraphie, signalétique, stop rayon, tête de gondole, théâtralisation, totem, urne, vitrine. |
| **Liens sortants cocon** | Pilier D ←, tous D ↔, liens vers toutes les pages pertinentes du cocon |

---

## 5. Schéma visuel du cocon

```
                              ┌─────────────┐
                              │   ACCUEIL    │
                              │ totem en     │
                              │ carton (720) │
                              └──────┬───────┘
                   ┌─────────┬───────┴───────┬──────────┐
                   ▼         ▼               ▼          ▼
            ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
            │ PILIER A │ │ PILIER B │ │ PILIER C │ │ PILIER D │
            │ Formes   │ │ Secteurs │ │ Fabrica. │ │ Guides   │
            └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘
                 │            │            │            │
      ┌──┬──┬──┬┴─┬──┐  ┌──┬┴┬──┬──┐ ┌──┬┴┬──┬──┐ ┌──┬┴┬──┬──┐
      │  │  │  │  │  │  │  │ │  │  │ │  │ │  │  │ │  │ │  │  │
      A1 A2 A3 A4 A5 A6 B1 B2 B3 B4 B5 C1 C2 C3 C4 C5 D1 D2 D3 D4 D5

LÉGENDE DES LIENS TRANSVERSAUX CLÉS :
A1 (elliptique) ⟷ B1 (pharmacie)     — le format star de l'officine
A2 (3 faces) ⟷ B3 (salon pro)        — visibilité 360° pour stands
A3 (pliable) ⟷ B5 (événementiel)     — nomade pour opérations éphémères
A6 (comptoir) ⟷ B4 (commerce)        — PLV compacte pour petits espaces
C5 (prix) ⟷ B2 (GMS)                 — budgets volume grande distribution
D1 (faire) ⟷ C2 (impression)         — du pratique vers le technique
D5 (glossaire) ⟷ TOUTES PAGES        — hub de maillage maximal
```

---

## 6. Recommandations techniques pour Antigravity

### Structure des URLs
- Schéma : `/{cluster}/{page}/`
- Trailing slash cohérent
- Pas de dates, pas d'ID

### Balises et SEO on-page
- Chaque page a un `<title>`, `<meta description>`, `<h1>` uniques (définis ci-dessus)
- Schema.org : `Product` sur les pages formes (cluster A), `Article` sur les guides (cluster D), `FAQPage` sur les pages secteurs (cluster B)
- Fil d'Ariane (breadcrumb) JSON-LD sur toutes les pages
- Balise canonical auto-référente

### Maillage interne technique
- Liens contextuels dans le corps du texte (ancres variées, pas toujours le mot-clé exact)
- Sidebar ou bloc "Articles liés" en bas de page pour les liens sœurs (↔)
- Breadcrumb pour le lien ascendant (←)
- CTA en bas de chaque page vers `/contact` ou formulaire devis

### Performance et Core Web Vitals
- Images au format WebP/AVIF avec lazy loading
- Pas de JavaScript bloquant (Astro = HTML-first)
- Préchargement des polices critiques

### Contenu prioritaire (ordre de production recommandé)

**Phase 1 — Pages piliers + quick wins (semaines 1-2)**
1. Accueil (`totem en carton` — 720 vol.)
2. Pilier A (`totem carton publicitaire` — 140 vol.)
3. A2 : Totem 3 faces (90 vol., **SD 15 = quick win**)
4. D1 : Faire un totem en carton (30 vol., **SD 12 = quick win**)
5. C5 : Prix et devis (**page de conversion**)

**Phase 2 — Pages à volume (semaines 3-4)**
6. A1 : Totem elliptique (50 vol.)
7. A3 : Totem pliable (40 vol.)
8. A5 : Totem 3D / silhouette (40 vol.)
9. Pilier C : Fabrication
10. Pilier B : Secteurs

**Phase 3 — Longue traîne et autorité (semaines 5-8)**
11-25. Toutes les pages restantes

---

## 7. Stratégie de liens externes et synergie Kontfeel

### Liens internes cross-sites
- **kontfeel.fr → ce site** : lien depuis la page produit PLV totem de Kontfeel vers les guides et pages formes de ce site (jus SEO + trafic qualifié)
- **Ce site → kontfeel.fr** : CTA "Commander votre totem sur mesure" avec lien vers la page produit Kontfeel (conversion)
- **pharma-retail.fr → ce site** : lien contextuel depuis les articles pharmacie vers la page B1 (pharmacie) de ce site

### Backlinks potentiels
- Articles invités sur des blogs marketing/retail
- Liens depuis Retailpedia (synergies existantes)
- Inscriptions annuaires PLV/packaging

---

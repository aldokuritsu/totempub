document.addEventListener('DOMContentLoaded', () => {
    // Calculate base path to root
    const basePath = getBasePath();

    // Load components
    loadComponent('header', basePath + 'components/header.html');
    loadComponent('footer', basePath + 'components/footer.html');
    loadComponent('sidebar', basePath + 'components/menu-contextuel.html', true);
});

function getBasePath() {
    const path = window.location.pathname;

    // Child pages (2 levels deep from root)
    const isChildPage =
        path.includes('/totem-carton-publicitaire/totem-') ||
        path.includes('/totem-carton-secteurs/pharmacie/') ||
        path.includes('/totem-carton-secteurs/grande-distribution/') ||
        path.includes('/totem-carton-secteurs/salon-professionnel/') ||
        path.includes('/totem-carton-secteurs/commerce-boutique/') ||
        path.includes('/totem-carton-secteurs/evenementiel/') ||
        path.includes('/fabrication-totem-carton/personnalisation/') ||
        path.includes('/fabrication-totem-carton/impression-techniques/') ||
        path.includes('/fabrication-totem-carton/materiaux-carton/') ||
        path.includes('/fabrication-totem-carton/eco-responsable/') ||
        path.includes('/fabrication-totem-carton/prix-devis/') ||
        path.includes('/guide-totem-carton/faire-totem-carton/') ||
        path.includes('/guide-totem-carton/choisir-totem-carton/') ||
        path.includes('/guide-totem-carton/totem-carton-vs-autres-plv/') ||
        path.includes('/guide-totem-carton/reussir-campagne-plv/') ||
        path.includes('/guide-totem-carton/glossaire-plv/');

    if (isChildPage) return '../../';

    // Pillar pages or Contact (1 level deep from root)
    const isPillarPage =
        path.includes('/totem-carton-publicitaire/') ||
        path.includes('/totem-carton-secteurs/') ||
        path.includes('/fabrication-totem-carton/') ||
        path.includes('/guide-totem-carton/') ||
        path.includes('/contact/');

    if (isPillarPage) return '../';

    // Root
    return './';
}

async function loadComponent(elementId, url, isContextual = false) {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        let html = await response.text();

        // Fix image paths in components if necessary (optional here)
        const basePath = getBasePath();
        html = html.replace(/src="\//g, `src="${basePath}`);
        html = html.replace(/href="\//g, `href="${basePath}`);

        if (isContextual) {
            html = renderContextualMenu(html);
        }

        element.innerHTML = html;

        // Highlight active link
        highlightActiveLink(elementId);
    } catch (e) {
        console.error(`Could not load component from ${url}:`, e);
        // Fallback for local files if fetch fails (CORS)
        element.innerHTML = `<div class="p-4 bg-yellow-100 text-yellow-800 rounded">Note: Pour voir les composants (header/footer), veuillez ouvrir ce projet avec un serveur local (ex: extension VS Code Live Server ou "npx serve .").</div>`;
    }
}

function renderContextualMenu(template) {
    const path = window.location.pathname;
    const basePath = getBasePath();
    let cluster = "";
    let links = [];

    if (path.includes('/totem-carton-publicitaire/')) {
        cluster = "Cluster A : Formes & Types";
        links = [
            { name: "Totem Elliptique", url: "totem-carton-publicitaire/totem-elliptique/" },
            { name: "Totem 3 faces", url: "totem-carton-publicitaire/totem-3-faces/" },
            { name: "Totem Pliable", url: "totem-carton-publicitaire/totem-pliable/" },
            { name: "Totem Cube / Carré", url: "totem-carton-publicitaire/totem-cube-carre/" },
            { name: "Totem 3D / Silhouette", url: "totem-carton-publicitaire/totem-3d-silhouette/" },
            { name: "Totem de Comptoir", url: "totem-carton-publicitaire/totem-comptoir/" }
        ];
    } else if (path.includes('/totem-carton-secteurs/')) {
        cluster = "Cluster B : Secteurs & Usages";
        links = [
            { name: "Pharmacie", url: "totem-carton-secteurs/pharmacie/" },
            { name: "GMS / Grande Distribution", url: "totem-carton-secteurs/grande-distribution/" },
            { name: "Salon Professionnel", url: "totem-carton-secteurs/salon-professionnel/" },
            { name: "Commerce & Boutique", url: "totem-carton-secteurs/commerce-boutique/" },
            { name: "Événementiel", url: "totem-carton-secteurs/evenementiel/" }
        ];
    } else if (path.includes('/fabrication-totem-carton/')) {
        cluster = "Cluster C : Fabrication & Perso";
        links = [
            { name: "Personnalisation", url: "fabrication-totem-carton/personnalisation/" },
            { name: "Techniques d'Impression", url: "fabrication-totem-carton/impression-techniques/" },
            { name: "Matériaux Carton", url: "fabrication-totem-carton/materiaux-carton/" },
            { name: "Éco-responsable", url: "fabrication-totem-carton/eco-responsable/" },
            { name: "Prix & Devis", url: "fabrication-totem-carton/prix-devis/" }
        ];
    } else if (path.includes('/guide-totem-carton/')) {
        cluster = "Cluster D : Guides & Ressources";
        links = [
            { name: "Faire un totem", url: "guide-totem-carton/faire-totem-carton/" },
            { name: "Choisir son totem", url: "guide-totem-carton/choisir-totem-carton/" },
            { name: "Carton vs Autres PLV", url: "guide-totem-carton/totem-carton-vs-autres-plv/" },
            { name: "Réussir sa campagne", url: "guide-totem-carton/reussir-campagne-plv/" },
            { name: "Glossaire PLV", url: "guide-totem-carton/glossaire-plv/" }
        ];
    } else {
        return "";
    }

    let linksHtml = links.map(link => `
        <li>
            <a href="${basePath}${link.url}" class="block py-2 px-4 rounded hover:bg-brand-light hover:text-brand transition-colors sidebar-link">
                ${link.name}
            </a>
        </li>
    `).join('');

    return template.replace('{{TITLE}}', cluster).replace('{{LINKS}}', linksHtml);
}

function highlightActiveLink(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const currentPath = window.location.pathname;
    const links = container.querySelectorAll('a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Normalize comparison
        const normalizedHref = href.replace(/\/index\.html$/, '/').replace(/\/$/, '');
        const normalizedPath = currentPath.replace(/\/index\.html$/, '/').replace(/\/$/, '');

        if (normalizedPath.endsWith(normalizedHref) && normalizedHref !== '') {
            link.classList.add('active', 'font-bold', 'text-brand');
            if (link.classList.contains('sidebar-link')) {
                link.classList.add('bg-brand-light');
            }
        }
    });
}

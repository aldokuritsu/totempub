// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * URL du site — sert aux balises canoniques et au sitemap.
 * Netlify injecte `URL` (domaine principal) et `DEPLOY_PRIME_URL` (deploy
 * preview / branch deploy) ; en local on retombe sur localhost.
 */
const site =
    process.env.CONTEXT === 'production'
        ? process.env.URL
        : process.env.DEPLOY_PRIME_URL ?? 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
    site,
    trailingSlash: 'always',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
});

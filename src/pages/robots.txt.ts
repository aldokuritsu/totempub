import type { APIRoute } from 'astro';

const body = (sitemapURL: URL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) =>
    new Response(body(new URL('sitemap-index.xml', site)), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

import { SITE } from '../../app/data/site'

// Generated sitemap. Reflects SITE.url — update the canonical domain in
// app/data/site.ts and this stays correct.
// Home is '/' rather than '': the rendered canonical is `https://edijia.com/`, and a
// sitemap that advertises `https://edijia.com` hands a crawler a second spelling of the
// same page to reconcile.
const ROUTES = ['/', '/about', '/menu', '/portfolio', '/press', '/location']

export default defineEventHandler((event) => {
  const base = SITE.url.replace(/\/$/, '')
  const urls = ROUTES.map((r) => `  <url><loc>${base}${r}</loc></url>`).join('\n')
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
  setHeader(event, 'content-type', 'application/xml')
  return body
})

// Post-build static prerender for SEO: turns the client-only SPA build into
// real HTML per route (Google gets content on the first fetch, no JS wait).
// Runs after `vite build` + `vite build --ssr src/entry-server.tsx`.
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const distDir = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const SITE = 'https://unilions.com.br'

const ROUTES = [
  {
    path: '/',
    outFile: 'index.html',
    title: 'Ambidestria Executiva | Uni Lions',
    description:
      'Programa executivo presencial em São Paulo. Método de gestão pra proteger o caixa de hoje e construir o futuro — IA como instrumento. 50h, turma única, entrada por aplicação.',
    robots: 'index, follow',
  },
  {
    path: '/aplicacao',
    outFile: 'aplicacao/index.html',
    title: 'Aplicação — Ambidestria Executiva | Uni Lions',
    description:
      'Responda ao diagnóstico e aplique para a turma única de Ambidestria Executiva, programa presencial de 50h em São Paulo.',
    robots: 'noindex, nofollow',
  },
]

function escapeAttr(s) {
  return s.replace(/"/g, '&quot;')
}

function setMetaContent(html, selectorAttrs, newContent) {
  // selectorAttrs e.g. { name: 'description' } or { property: 'og:title' }
  const [attrName, attrValue] = Object.entries(selectorAttrs)[0]
  const re = new RegExp(
    `(<meta[^>]*${attrName}=["']${attrValue}["'][^>]*content=["'])[^"']*(["'][^>]*>)`,
    'i',
  )
  if (re.test(html)) {
    return html.replace(re, `$1${escapeAttr(newContent)}$2`)
  }
  return html
}

async function main() {
  if (!existsSync(path.join(distDir, 'index.html'))) {
    throw new Error('dist/index.html not found — run `vite build` first')
  }
  if (!existsSync(ssrEntry)) {
    throw new Error('dist-ssr/entry-server.js not found — run the SSR build first')
  }

  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8')
  const { render } = await import(`file://${ssrEntry}`)

  for (const route of ROUTES) {
    const appHtml = render(route.path)
    const canonical = `${SITE}${route.path === '/' ? '/' : route.path}`

    let html = template
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    html = setMetaContent(html, { name: 'description' }, route.description)
    html = setMetaContent(html, { property: 'og:title' }, route.title)
    html = setMetaContent(html, { property: 'og:description' }, route.description)

    if (/property=["']og:url["']/.test(html)) {
      html = html.replace(
        /(<meta[^>]*property=["']og:url["'][^>]*content=["'])[^"']*(["'][^>]*>)/i,
        `$1${escapeAttr(canonical)}$2`,
      )
    } else {
      html = html.replace('</head>', `    <meta property="og:url" content="${canonical}" />\n  </head>`)
    }

    if (/rel=["']canonical["']/.test(html)) {
      html = html.replace(
        /(<link[^>]*rel=["']canonical["'][^>]*href=["'])[^"']*(["'][^>]*>)/i,
        `$1${escapeAttr(canonical)}$2`,
      )
    } else {
      html = html.replace('</head>', `    <link rel="canonical" href="${canonical}" />\n  </head>`)
    }

    if (/name=["']robots["']/.test(html)) {
      html = html.replace(
        /(<meta[^>]*name=["']robots["'][^>]*content=["'])[^"']*(["'][^>]*>)/i,
        `$1${route.robots}$2`,
      )
    } else {
      html = html.replace('</head>', `    <meta name="robots" content="${route.robots}" />\n  </head>`)
    }

    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outPath = path.join(distDir, route.outFile)
    await mkdir(path.dirname(outPath), { recursive: true })
    await writeFile(outPath, html, 'utf-8')
    console.log(`prerendered ${route.path} -> dist/${route.outFile}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

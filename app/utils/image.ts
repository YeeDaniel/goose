import { IMAGE_MANIFEST, type ImageMeta } from '~/data/image-manifest'

/** Metadata for an original photo path (`/images/chef.jpg`), if variants exist for it. */
export function imageMeta(src: string): ImageMeta | undefined {
  const key = src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? ''
  return IMAGE_MANIFEST[key]
}

/**
 * srcset over the pre-generated variants, e.g.
 * `/images/opt/hero-bg-640.1a2b3c4d.avif 640w, /images/opt/hero-bg-960.1a2b3c4d.avif 960w, …`
 *
 * Shared with the hero's <link rel="preload">, which has to advertise exactly the same
 * candidates as the <source> it is warming or the browser fetches the image twice.
 */
export function imageSrcset(src: string, ext: 'avif' | 'webp'): string | undefined {
  const meta = imageMeta(src)
  if (!meta) return undefined
  const base = src.replace(/^(.*)\/([^/]+)\.[^.]+$/, '$1/opt/$2')
  return meta.widths.map((w) => `${base}-${w}.${meta.hash}.${ext} ${w}w`).join(', ')
}

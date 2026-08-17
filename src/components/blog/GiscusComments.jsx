import { useEffect, useRef } from 'react'

const GISCUS_CONFIG = {
  src: 'https://giscus.app/client.js',
  repo: 'hariomop12/hariomop12.github.io',
  repoId: 'R_kgDON1JUjg',
  category: 'General',
  categoryId: 'DIC_kwDON1JUjs4DDk4Z',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'dark',
  lang: 'en',
  crossOrigin: 'anonymous',
  async: true,
}

export default function GiscusComments() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const existingScript = ref.current.querySelector('script.giscus-frame')
    if (existingScript) return

    const script = document.createElement('script')
    script.src = GISCUS_CONFIG.src
    script.setAttribute('data-repo', GISCUS_CONFIG.repo)
    script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId)
    script.setAttribute('data-category', GISCUS_CONFIG.category)
    script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId)
    script.setAttribute('data-mapping', GISCUS_CONFIG.mapping)
    script.setAttribute('data-strict', GISCUS_CONFIG.strict)
    script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled)
    script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata)
    script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition)
    script.setAttribute('data-theme', GISCUS_CONFIG.theme)
    script.setAttribute('data-lang', GISCUS_CONFIG.lang)
    script.crossOrigin = GISCUS_CONFIG.crossOrigin
    script.async = GISCUS_CONFIG.async

    ref.current.appendChild(script)
  }, [])

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="font-display font-bold text-xl text-foreground mb-6">
        Comments
      </h3>
      <div ref={ref} className="giscus" />
    </div>
  )
}

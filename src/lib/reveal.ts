// Animaciones de entrada al hacer scroll.
// Sin librerías: el CSS hace la transición (transition + data-visible),
// acá solo se marca `data-visible` cuando el elemento entra en pantalla.

const REVEAL_SELECTOR = '[data-reveal]'
const STAGGER_SELECTOR = '[data-reveal-stagger]'
const MAX_STEPS = 5
/** Si el observer no dispara (pestaña en background, navegador sin frames),
 *  mostramos todo para que el contenido nunca quede invisible. */
const FALLBACK_MS = 4000

let observer: IntersectionObserver | null = null
let revealedCount = 0

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function getObserver(): IntersectionObserver {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.setAttribute('data-visible', 'true')
        revealedCount += 1
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  return observer
}

/** Aplica el retardo escalonado a los hijos directos de un contenedor. */
function applyStagger(container: HTMLElement) {
  const children = Array.from(container.children) as HTMLElement[]
  children.forEach((child, i) => {
    if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', '')
    child.classList.add(`reveal-delay-${(i % MAX_STEPS) + 1}`)
  })
}

/** Marca de entrada los elementos que ya están en pantalla al montar. */
function markVisibleOnScreen(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  if (rect.top < viewportHeight * 0.9 && rect.bottom > 0) {
    el.setAttribute('data-visible', 'true')
    revealedCount += 1
    return true
  }
  return false
}

/**
 * Registra los elementos con `data-reveal` / `data-reveal-stagger`.
 * Se puede llamar en cada cambio de ruta: los elementos ya visibles no se repiten.
 */
export function initReveal(root: ParentNode = document): void {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

  // El CSS solo oculta cuando el JS está listo: sin JS el contenido se ve igual.
  document.documentElement.classList.add('reveal-ready')

  root.querySelectorAll<HTMLElement>(STAGGER_SELECTOR).forEach(applyStagger)

  const reduced = prefersReducedMotion()
  const obs = getObserver()

  root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
    if (el.hasAttribute('data-visible')) return
    if (reduced) {
      el.setAttribute('data-visible', 'true')
      return
    }
    if (!markVisibleOnScreen(el)) obs.observe(el)
  })

  // Red de seguridad: si el observer no llegó a disparar, revelamos todo.
  window.setTimeout(() => {
    if (revealedCount > 0) return
    document
      .querySelectorAll<HTMLElement>('[data-reveal]:not([data-visible])')
      .forEach((el) => el.setAttribute('data-visible', 'true'))
  }, FALLBACK_MS)
}

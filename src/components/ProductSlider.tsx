import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { ShotFrame } from './ShotFrame'

export type Slide = {
  id: string
  badge: string
  title: string
  description: string
  points: string[]
  image: string
  alt: string
  /** 'phone' renderiza la captura en marco de teléfono. */
  frame?: 'browser' | 'phone'
}

type ProductSliderProps = {
  slides: Slide[]
  label?: string
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/**
 * Carrusel de capturas reales del sistema.
 * Scroll-snap nativo (swipe en móvil) + flechas y puntos de control.
 * Sin librerías de animación.
 */
export function ProductSlider({ slides, label = 'El sistema en acción' }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  const rafRef = useRef<number | null>(null)

  const goTo = useCallback(
    (target: number) => {
      const track = trackRef.current
      if (!track) return
      const clamped = Math.max(0, Math.min(slides.length - 1, target))
      const slide = track.children[clamped] as HTMLElement | undefined
      if (!slide) return
      track.scrollTo({
        left: slide.offsetLeft - track.offsetLeft,
        behavior: reduced ? 'auto' : 'smooth',
      })
      setIndex(clamped)
    },
    [slides.length, reduced],
  )

  // El índice sigue al scroll manual (swipe / trackpad)
  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const track = trackRef.current
      if (!track) return
      const children = Array.from(track.children) as HTMLElement[]
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let best = Infinity
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft - track.offsetLeft + child.clientWidth / 2
        const distance = Math.abs(childCenter - center)
        if (distance < best) {
          best = distance
          closest = i
        }
      })
      setIndex(closest)
    })
  }, [])

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      onKeyDown={onKeyDown}
    >
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <span className="label-brutal text-accent">El sistema en acción</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-2">
            Cada pantalla resuelve un problema concreto
          </h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Captura anterior"
            className="btn h-11 w-11 p-0 disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === slides.length - 1}
            aria-label="Captura siguiente"
            className="btn h-11 w-11 p-0 disabled:opacity-40"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <article
            key={slide.id}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${slides.length}: ${slide.title}`}
            className="w-[86%] sm:w-[70%] lg:w-[62%] shrink-0 snap-center"
          >
            <div className="surface-raised-lg h-full overflow-hidden">
              <div className="p-6 lg:p-8 border-b border-border-subtle">
                <span className="chip chip-accent">{slide.badge}</span>
                <h3 className="text-xl lg:text-2xl font-bold text-ink mt-4">{slide.title}</h3>
                <p className="text-ink-soft mt-2 leading-relaxed">{slide.description}</p>
                <ul className="mt-4 space-y-2">
                  {slide.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-2 p-4 lg:p-6">
                <ShotFrame
                  src={slide.image}
                  alt={slide.alt}
                  label="app.campobase"
                  variant={slide.frame ?? 'browser'}
                  className={slide.frame === 'phone' ? 'my-2' : ''}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Ir a la captura">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a: ${slide.title}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-border-subtle hover:bg-ink-muted'
              }`}
            >
              <span className="sr-only">{i + 1}</span>
            </button>
          ))}
        </div>
        <span className="font-mono text-sm text-ink-muted" aria-live="polite">
          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

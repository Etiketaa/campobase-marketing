import { useEffect, useRef } from 'react'
import { X, ExternalLink } from 'lucide-react'

type DemoModalProps = {
  isOpen: boolean
  onClose: () => void
  url?: string
}

export function DemoModal({ isOpen, onClose, url = 'https://campobase.vercel.app/?demo=1' }: DemoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm animate-fade-in" />
      
      <div
        ref={modalRef}
        className="relative w-full h-full max-w-7xl max-h-[95vh] bg-surface rounded-brutal-lg border-2 border-ink shadow-brutal flex flex-col overflow-hidden animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-ink bg-surface">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h2 id="demo-modal-title" className="text-sm sm:text-base font-bold text-ink">
              Demo interactiva - CampoBase
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-ink-soft hover:text-ink transition-colors"
              title="Abrir en nueva pestaña"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Abrir en nueva pestaña
            </a>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-brutal border border-border hover:border-ink hover:bg-surface-2 transition-colors"
              aria-label="Cerrar demo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 relative bg-bg">
          <iframe
            ref={iframeRef}
            src={url}
            title="Demo interactiva de CampoBase"
            className="w-full h-full border-0"
            allow="clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
    </div>
  )
}

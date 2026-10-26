import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center py-16 stagger">
        <AlertCircle className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-6" aria-hidden="true" />
        <h1 className="text-6xl font-bold text-[var(--color-ink)] mb-2">404</h1>
        <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Página no encontrada</h2>
        <p className="text-[var(--color-ink-soft)] mb-8 max-w-sm mx-auto">
          La página que buscas no existe o se ha movido. Puede que la URL tenga un error
          o que la página haya sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary px-8 py-3">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Inicio
          </Link>
          <Link to="/features" className="btn btn-secondary">
            Ver Características
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-[var(--color-border)]">
          <p className="label-brutal text-[var(--color-ink-soft)] mb-4">¿Buscabas algo específico?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/features" className="btn btn-outline w-full sm:w-auto">Características</Link>
            <Link to="/case-study" className="btn btn-outline w-full sm:w-auto">Caso Ultrawhite</Link>
            <Link to="/docs" className="btn btn-outline w-full sm:w-auto">Documentación</Link>
            <Link to="/pricing" className="btn btn-outline w-full sm:w-auto">Precios</Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-[var(--color-border)]">
          <p className="text-[var(--color-ink-muted)] text-sm">
            ¿Creés que esto es un error? <a href="mailto:hola@gesope.com" className="text-[var(--color-accent)] hover:underline font-medium">Escribinos</a> y lo revisamos.
          </p>
        </div>
      </div>
    </div>
  )
}
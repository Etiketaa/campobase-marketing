import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/features', label: 'Características' },
  { href: '/case-study', label: 'Casos' },
  { href: '/docs', label: 'Documentación' },
  { href: '/pricing', label: 'Precios' },
  { href: '/contact', label: 'Contacto' },
]

export function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  // El menú móvil se cierra al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="CampoBase - Inicio">
            <div className="w-10 h-10 rounded-brutal-lg bg-ink flex items-center justify-center">
              <svg className="w-6 h-6 text-on-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-xl text-ink">CampoBase</span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`link-underline px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-ink-soft hover:text-ink'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link to="/contact" className="btn btn-brand">
              Solicitar demo
            </Link>
          </div>

          {/* Botón de menú mobile */}
          <button
            type="button"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-brutal border-2 border-border text-ink hover:bg-surface-2"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {mobileOpen ? (
        <nav
          id="menu-mobile"
          className="lg:hidden border-t border-border-subtle bg-surface px-4 sm:px-6 py-4 animate-slide-down"
          aria-label="Navegación principal"
        >
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center justify-between rounded-brutal px-4 py-3 text-base font-semibold transition-colors duration-200 ${
                      isActive ? 'bg-ink text-on-dark' : 'text-ink hover:bg-surface-2'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link to="/contact" className="btn btn-brand w-full mt-4">
            Solicitar demo
          </Link>
        </nav>
      ) : null}
    </header>
  )
}

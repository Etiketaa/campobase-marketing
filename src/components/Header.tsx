import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Shield, FileText, Users, Globe, DollarSign } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Inicio', icon: Globe },
  { href: '/features', label: 'Características', icon: Shield },
  { href: '/case-study', label: 'Caso de Estudio', icon: FileText },
  { href: '/docs', label: 'Documentación', icon: FileText },
  { href: '/pricing', label: 'Precios', icon: DollarSign },
  { href: '/contact', label: 'Contacto', icon: Users },
]

export function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="CampoBase - Inicio">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-ink)] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-xl text-[var(--color-ink)] hidden sm:block">CampoBase</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-150 ${
                    isActive
                      ? 'bg-[var(--color-ink)] text-white border-[var(--color-ink)] shadow-[2px_2px_0_0_#0F172A]'
                      : 'text-[var(--color-ink-soft)] border-transparent hover:bg-[var(--color-surface-2)] hover:border-[var(--color-border)] hover:text-[var(--color-ink)]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://campobase.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Probar Demo
            </a>
            <Link to="/contact" className="btn btn-outline">Contactar</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
import { Link } from 'react-router-dom'
import { Shield, Truck, FileText, Smartphone, Video, LifeBuoy } from 'lucide-react'

const docCategories = [
  {
    category: 'Primeros Pasos',
    icon: Shield,
    articles: [
      { title: 'Crear tu cuenta y organización', slug: 'getting-started/account-setup', desc: 'Configura tu empresa, invita operadores, define roles.' },
      { title: 'Primer recorrido y visitas', slug: 'getting-started/first-route', desc: 'Crea tu primera ruta, asigna clientes y genera visitas.' },
      { title: 'Configurar operadores móviles', slug: 'getting-started/operators', desc: 'Invita operadores, asigna rutas, prueba en móvil.' },
      { title: 'Primer cobro y comprobante', slug: 'getting-started/first-payment', desc: 'Registra un cobro, sube comprobante, ve en dashboard.' },
    ],
  },
  {
    category: 'Operación Diaria',
    icon: Truck,
    articles: [
      { title: 'Iniciar y cerrar visitas', slug: 'daily/visit-lifecycle', desc: 'Estados: Programada, En curso, Realizada, No realizada, Reprogramado.' },
      { title: 'Cobros y medios de pago', slug: 'daily/payments', desc: 'Efectivo, Transferencia, Pendiente, Otro. Comprobante obligatorio en transferencias.' },
      { title: 'Fotos de comprobantes', slug: 'daily/receipts', desc: 'Solo cámara. Subida automática. Vista previa en admin. Descarga masiva.' },
      { title: 'Observaciones y reprogramación', slug: 'daily/notes-reschedule', desc: 'Observaciones obligatorias al cerrar. Reprogramar con historial.' },
      { title: 'Modo offline', slug: 'daily/offline', desc: 'Funciona sin señal. Sincroniza al reconectar. Cola de sincronización visible.' },
    ],
  },
  {
    category: 'Certificados Municipales',
    icon: FileText,
    articles: [
      { title: 'Histórico y búsqueda', slug: 'certificates/history', desc: 'Certificados importados. Búsqueda por cliente, N°, mes, rubro. Números literales preservados.' },
      { title: 'Generar desde visitas', slug: 'certificates/generate', desc: 'Selecciona visitas Realizado sin certificado. N° = max+1 global. Fecha municipio editable.' },
      { title: 'PDF calibrado', slug: 'certificates/pdf', desc: '2 por hoja A4. Posiciones calibradas (mm). Clip horizontal. Fuente Tahoma opcional via CERT_TTF_PATH.' },
      { title: 'Continuidad por cliente', slug: 'certificates/continuity', desc: 'Flag certificate_continues. Apagar = no genera nuevos. Historial intacto. Reactivable.' },
    ],
  },
  {
    category: 'Administración y Reportes',
    icon: FileText,
    articles: [
      { title: 'Dashboard ejecutivo', slug: 'admin/dashboard', desc: 'KPIs: programadas/realizadas/pendientes, cobros por medio, rendiciones, nuevos clientes.' },
      { title: 'Gestión de clientes', slug: 'admin/clients', desc: 'CRUD con historial, rango horario, continuidad certificado, tratamiento/principio activo.' },
      { title: 'Recorridos semanales', slug: 'admin/routes', desc: 'Crear/editar rutas, asignar operadores, reordenar clientes drag & drop.' },
      { title: 'Rendiciones de efectivo', slug: 'admin/settlements', desc: 'Saldo por operario, registrar rendición, historial con anulación/reactivación.' },
      { title: 'Exportaciones', slug: 'admin/exports', desc: 'CSV con BOM UTF-8 para Excel. Filtros por fecha/operador/cliente. Separador ;' },
    ],
  },
  {
    category: 'Preguntas Frecuentes',
    icon: LifeBuoy,
    articles: [
      { title: '¿Funciona sin internet?', slug: 'faq/offline', desc: 'Sí. IndexedDB local. Cola de sincronización al reconectar. Sin pérdida de datos.' },
      { title: '¿Necesito app store?', slug: 'faq/no-appstore', desc: 'No. Es PWA/web app. Se abre en navegador. Se puede "instalar" como app en móvil.' },
      { title: '¿Cómo se migran mis datos?', slug: 'faq/migration', desc: 'Importamos tu Excel/CSV. Mapeo de columnas. Validación previa. Sin costo en planes Pro/Enterprise.' },
      { title: '¿Qué pasa si se cae internet?', slug: 'faq/offline-details', desc: 'La app sigue funcionando. Cola de sincronización. Al reconectar, todo se sube automáticamente.' },
    ],
  },
]

export function Documentation() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[var(--color-bg)] to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-[var(--color-accent)] mb-4">Documentación de Usuario</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6">
            Guías para empezar y operar con CampoBase
          </h1>
          <p className="text-lg text-[var(--color-ink-soft)] max-w-2xl mx-auto mb-10">
            Documentación orientada a usuarios finales: administradores y operadores de campo.
            Sin jerga técnica. Capturas reales. Paso a paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              ¿No encuentras lo que buscas? Contactar Soporte
            </Link>
            <a href="https://campobase.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg px-8 py-4">
              Probar App Demo
            </a>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 bg-white border-y-2 border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-xl mx-auto">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-ink-muted)]" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              type="search"
              placeholder="Buscar en la documentación... (ej: comprobante, certificado, offline)"
              className="input pl-12 py-3 text-base w-full"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {docCategories.map((category, catIndex) => (
              <section key={catIndex} className="card-brutal p-6 h-full hover:shadow-brutal transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-brutal bg-[var(--color-accent-soft)] flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[var(--color-accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <Link
                        to={article.slug}
                        className="flex items-center justify-between gap-3 p-3 bg-[var(--color-surface-2)] rounded-brutal hover:bg-[var(--color-accent-soft)] hover:border-[var(--color-accent)] border border-transparent transition-all duration-150"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[var(--color-ink)]">{article.title}</p>
                          <p className="text-sm text-[var(--color-ink-muted)] mt-0.5 truncate">{article.desc}</p>
                        </div>
                        <svg className="w-5 h-5 text-[var(--color-ink-muted)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/docs/category/${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block mt-4 text-center text-sm font-bold text-[var(--color-accent)] hover:underline"
                >
                  Ver todos ({category.articles.length}) →
                </Link>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white border-y-2 border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl lg:text-3xl font-bold text-[var(--color-ink)] mb-10">Accesos Rápidos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, title: 'Guía Operador Móvil', desc: 'Iniciar/cerrar visitas, fotos, cobros', href: '/docs/guides/operator-guide' },
              { icon: Shield, title: 'Guía Administrador', desc: 'Dashboard, clientes, rendiciones, exportar', href: '/docs/guides/admin-guide' },
              { icon: FileText, title: 'Certificados Municipales', desc: 'Generar, buscar, PDF, continuidad', href: '/docs/guides/certificates' },
              { icon: LifeBuoy, title: 'Centro de Ayuda / FAQ', desc: 'Respuestas rápidas, troubleshooting', href: '/docs/faq' },
            ].map((item, i) => (
              <Link key={i} to={item.href} className="card-brutal p-6 text-center hover:shadow-brutal transition-shadow duration-200 group">
                <div className="w-14 h-14 rounded-brutal bg-[var(--color-accent-soft)] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <item.icon className="w-7 h-7 text-[var(--color-accent)]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[var(--color-ink)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-ink-muted)] mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-bold text-sm group-hover:gap-2 transition-all">
                  Leer guía
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-brutal text-[var(--color-accent)] mb-4">Tutoriales en Video</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-ink)] mb-4">Aprende viendo</h2>
            <p className="text-[var(--color-ink-soft)] max-w-2xl mx-auto">Tutoriales cortos (2-5 min) grabados en la app real. Sin edición de marketing.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {[
              { title: 'Primer login y dashboard', duration: '3:24', desc: 'Login, navegación, dashboard admin' },
              { title: 'Crear primer recorrido', duration: '4:12', desc: 'Clientes, operadores, drag & drop' },
              { title: 'Vista operador móvil', duration: '3:45', desc: 'Iniciar visita, foto, cobro, observaciones' },
              { title: 'Cobros y comprobantes', duration: '4:30', desc: 'Efectivo, transferencia, foto obligatoria' },
              { title: 'Generar certificados', duration: '5:10', desc: 'Selección masiva, N° correlativo, PDF' },
              { title: 'Rendiciones de efectivo', duration: '3:55', desc: 'Saldo, registrar, anular, historial' },
            ].map((video, i) => (
              <article key={i} className="card-brutal p-4 hover:shadow-brutal transition-shadow duration-200">
                <div className="aspect-video bg-[var(--color-surface-2)] rounded-brutal mb-3 relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center">
                    <Video className="w-8 h-8 text-[var(--color-accent)]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-bold text-[var(--color-ink)] mb-1">{video.title}</h3>
                <p className="text-sm text-[var(--color-ink-muted)] mb-2">{video.desc}</p>
                <div className="flex items-center justify-between text-xs text-[var(--color-ink-muted)]">
                  <span>{video.duration}</span>
                  <Link to={`/docs/videos/${i+1}`} className="text-[var(--color-accent)] font-bold hover:underline flex items-center gap-1">
                    Ver <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-ink)] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-[var(--color-accent-soft)] mb-4">¿No encontraste lo que buscabas?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Escríbenos y te ayudamos</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Nuestro equipo responde en menos de 24h. También puedes agendar una llamada de 15 min.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 bg-white text-[var(--color-ink)] hover:bg-slate-100">
              Contactar Soporte
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
            <Link to="/features" className="btn btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-4">Ver Features</Link>
          </div>
        </div>
      </section>
    </>
  )
}
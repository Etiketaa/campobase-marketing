import { Link } from 'react-router-dom'
import { Truck, FileText, DollarSign, CheckCircle2, Smartphone, FileCheck, Clock, MapPin, Camera, Layers, Zap as ZapIcon } from 'lucide-react'

const featureCategories = [
  {
    category: 'Operación Diaria',
    icon: Truck,
    features: [
      { title: 'Recorridos Semanales', desc: 'Planifica rutas por día/operador. Arrastrar y soltar para reordenar. Generación automática de visitas.', icon: Layers },
      { title: 'Visitas de Campo', desc: 'Inicio/fin con timestamp GPS. Estados: Programada, En curso, Realizada, No realizada, Reprogramada.', icon: MapPin },
      { title: 'Observaciones Obligatorias', desc: 'Cierre de visita exige observaciones. Prueba de que el operador pasó. Sin observaciones = no se cierra.', icon: FileText },
      { title: 'Fuera de Horario', desc: 'Alerta visual si la visita cae fuera del rango sugerido por cliente. Badge informativo, no bloqueante.', icon: Clock },
    ],
  },
  {
    category: 'Cobros y Comprobantes',
    icon: DollarSign,
    features: [
      { title: 'Múltiples Medios de Pago', desc: 'Efectivo, Transferencia, Pendiente, Otro. Validación: transferencia exige comprobante fotográfico obligatorio.', icon: DollarSign },
      { title: 'Comprobante Fotográfico', desc: 'Solo cámara del celular (no galería). Subida a Supabase Storage. Vista previa en admin. Descarga masiva.', icon: Camera },
      { title: 'Rendiciones de Efectivo', desc: 'Admin registra rendición en 1 paso (nace "Rendido"). Operador ve saldo pendiente. Anulación sin borrar historial.', icon: FileCheck },
      { title: 'Saldo Automático', desc: 'Σ Efectivo Realizado − Σ Rendiciones "Rendido". Acumulativo, no por período. Tarjeta en dashboard operador.', icon: CheckCircle2 },
    ],
  },
  {
    category: 'Certificados Municipales',
    icon: FileText,
    features: [
      { title: 'Histórico Importado', desc: 'Certificados de Excel (2025-2026). Números literales, huecos y duplicados preservados. Búsqueda por cliente, N°, mes, rubro.', icon: FileText },
      { title: 'Generación desde Visitas', desc: 'Selección masiva de visitas "Realizado" sin certificado. N° = max+1 global por tanda. Fecha municipio editable.', icon: FileCheck },
      { title: 'PDF Calibrado', desc: '2 por hoja A4 sobre membrete. Posiciones calibradas (mm). Clip horizontal = sin wrap. Fuente Tahoma opcional.', icon: FileCheck },
      { title: 'Continuidad por Cliente', desc: 'Flag certificate_continues independiente de active. Apagar = no genera nuevos, historial intacto. Reactivable.', icon: CheckCircle2 },
    ],
  },
  {
    category: 'Tecnología y Arquitectura',
    icon: ZapIcon,
    features: [
      { title: 'Mobile-First Real', desc: 'Operador usa navegador del celular. PWA-ready, funciona offline, sincroniza al reconectar. Touch targets ≥44px.', icon: Smartphone },
      { title: 'Offline-First', desc: 'IndexedDB local. Cola de sincronización al reconectar. Sin pérdida de datos en zonas sin señal.', icon: Smartphone },
      { title: 'Auth JWT + Refresh', desc: 'Supabase Auth. Access token + refresh token. Middleware requireAuth en /api/*, requireAdmin en admin, ownership en operador.', icon: ZapIcon },
      { title: 'Design System Brutalist', desc: 'Tokens CSS + Tailwind v4. Radios 2-8px, bordes 2px, sombras duras offset. Inter + Fira Code. Animaciones 100-300ms.', icon: ZapIcon },
    ],
  },
]

export function Features() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-b from-bg to-surface py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-accent mb-4">Características Completas</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-6">Todo lo que necesitas para operar en campo</h1>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            CampoBase no es un CRM genérico. Fue construido en campo, con operadores reales, resolviendo problemas reales
            de empresas de servicios, control de plagas, mantenimiento y logística.
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 ${catIndex % 2 === 0 ? 'bg-surface' : 'bg-bg'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <category.icon className="w-8 h-8 text-accent" aria-hidden="true" />
              <h2 className="text-3xl lg:text-4xl font-bold text-ink">{category.category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
              {category.features.map((feature, i) => (
                <article key={i} className="card-brutal p-6 hover:shadow-brutal transition-shadow duration-200 h-full">
                  <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{feature.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Technical Specs */}
      <section className="py-20 bg-ink text-on-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-brutal text-accent-soft mb-4">Especificaciones Técnicas</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Arquitectura lista para escalar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Frontend', items: ['React 19 + Vite', 'TypeScript strict', 'Tailwind CSS v4', 'React Router v6'] },
              { title: 'Backend', items: ['Node.js + Express', 'TypeScript', 'Supabase (PostgreSQL)', 'Serverless (Vercel)'] },
              { title: 'Base de Datos', items: ['PostgreSQL (Supabase)', 'RLS habilitado', 'Service role backend', 'Migraciones versionadas'] },
              { title: 'Infraestructura', items: ['Vercel (serverless)', 'Supabase Storage', 'CDN global', 'SSL automático'] },
            ].map((spec, i) => (
              <article key={i} className="card-brutal p-6 bg-ink/50 border-ink-soft">
                <h3 className="label-brutal text-accent-soft mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-on-dark-muted text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-on-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-accent-soft mb-4">¿Listo para digitalizar tu operación?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prueba CampoBase gratis por 14 días</h2>
          <p className="text-on-dark-muted mb-8 max-w-xl mx-auto">Sin tarjeta de crédito. Configuración en minutos. Soporte incluido.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 bg-surface text-ink hover:bg-surface-2">
              Empezar Gratis Ahora
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/features" className="btn btn-outline border-on-dark text-on-dark hover:bg-surface/10 text-lg px-8 py-4">Ver Características</Link>
          </div>
        </div>
      </section>
    </>
  )
}
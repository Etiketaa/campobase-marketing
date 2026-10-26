import { Link } from 'react-router-dom'
import { Shield, DollarSign, FileText, Users, CheckCircle2 } from 'lucide-react'

const pilotStats = [
  { value: '148', label: 'Clientes activos', icon: Users },
  { value: '1.356', label: 'Certificados generados', icon: FileText },
  { value: '2', label: 'Operadores en pilot', icon: Users },
  { value: '100%', label: 'Trazabilidad', icon: CheckCircle2 },
]

const valueProps = [
  {
    icon: Shield,
    title: 'Operación Real',
    desc: 'Diseñado en campo con operadores reales. Resuelve problemas reales de empresas de servicios, control de plagas, mantenimiento y logística.',
  },
  {
    icon: DollarSign,
    title: 'Cobro y Rendición',
    desc: 'Múltiples medios de pago, comprobante fotográfico obligatorio en transferencias, rendiciones de efectivo en 1 paso con saldo automático.',
  },
  {
    icon: FileText,
    title: 'Certificados Municipales',
    desc: 'Histórico importado (1.356+), generación desde visitas realizadas, PDF calibrado 2 por hoja, continuidad por cliente configurable.',
  },
];

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[var(--color-bg)] to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="stagger">
              <span className="label-brutal text-[var(--color-accent)] mb-4">SaaS B2B • Operaciones de Campo</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-ink)] mb-6">
                Tu base de operaciones
                <br />
                <span className="text-[var(--color-accent)]">en campo</span>
              </h1>
              <p className="text-lg text-[var(--color-ink-soft)] mb-8 max-w-xl">
                CampoBase reemplaza planillas, WhatsApps y papel. Gestiona recorridos, visitas, cobros y certificados municipales
                en una sola plataforma. Usado por empresas de servicios, control de plagas, mantenimiento y logística.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                  Solicitar Demo Gratis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/features" className="btn btn-secondary text-lg px-8 py-4">
                  Ver Características
                </Link>
              </div>

              {/* Pilot Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger">
                {pilotStats.map((stat, i) => (
                  <div key={i} className="bg-white border-2 border-[var(--color-border)] rounded-brutal-lg p-6 text-center">
                    <div className="w-12 h-12 rounded-brutal bg-[var(--color-accent-soft)] flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-[var(--color-accent)]" aria-hidden="true" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-[var(--color-accent)] font-mono">{stat.value}</div>
                    <div className="font-semibold text-[var(--color-ink)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshot / Product Preview */}
            <div className="relative hidden lg:block stagger">
              <div className="bg-white border-2 border-[var(--color-border)] rounded-brutal-lg shadow-brutal overflow-hidden">
                <div className="bg-[var(--color-ink)] px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-white text-xs font-mono ml-auto">campobase.vercel.app</span>
                </div>
                <div className="p-6 bg-[var(--color-bg)] min-h-[320px]">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white border-2 border-[var(--color-border)] rounded-brutal p-4">
                      <div className="label-brutal text-[var(--color-accent)] mb-2">RESUMEN DIARIO</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-ink-muted)]">Programadas</span><span className="font-bold font-mono text-[var(--color-ink)]">24</span></div>
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-accent)]">Realizadas</span><span className="font-bold font-mono text-[var(--color-accent)]">18</span></div>
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-warn)]">Pendientes</span><span className="font-bold font-mono text-[var(--color-warn)]">6</span></div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-[var(--color-border)] rounded-brutal p-4">
                      <div className="label-brutal text-[var(--color-warn)] mb-2">COBROS HOY</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-ink-muted)]">Efectivo</span><span className="font-bold font-mono">$ 245,000</span></div>
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-info)]">Transferencia</span><span className="font-bold font-mono text-[var(--color-info)]">$ 180,000</span></div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-[var(--color-border)] rounded-brutal p-4">
                      <div className="label-brutal text-[var(--color-info)] mb-2">CERTIFICADOS</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-ink-muted)]">Este mes</span><span className="font-bold font-mono">12</span></div>
                        <div className="flex justify-between text-sm"><span className="text-[var(--color-ink-muted)]">Históricos</span><span className="font-bold font-mono">1,356</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Social Proof */}
      <section className="py-16 bg-white border-y-2 border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-brutal text-[var(--color-accent)]">Empresas que confían</span>
            <h2 className="text-3xl font-bold text-[var(--color-ink)]">Empresas que usan CampoBase</h2>
          </div>
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--color-accent)] font-mono">CampoBase</div>
              <p className="text-slate-500 text-sm mt-1">Empresas de servicios • Control de plagas • Mantenimiento • Logística</p>
              <div className="mt-3 flex items-center justify-center gap-4 text-sm text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>Empresas de servicios</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-info)]"></span>Control de plagas</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-warn)]"></span>Mantenimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-brutal text-[var(--color-accent)]">Por qué CampoBase</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-ink)] mt-2">Diseñado para la operación real</h2>
            <p className="text-[var(--color-ink-soft)] mt-3 max-w-2xl mx-auto">No es un CRM genérico. Fue construido en campo, con operadores reales, resolviendo problemas reales de empresas de servicios.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {valueProps.map((prop, i) => (
              <article key={i} className="card-brutal p-6 hover:shadow-brutal transition-shadow duration-200">
                <div className="w-12 h-12 rounded-brutal bg-[var(--color-accent-soft)] flex items-center justify-center mb-4">
                  <prop.icon className="w-6 h-6 text-[var(--color-accent)]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">{prop.title}</h3>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">{prop.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-ink)] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-[var(--color-accent-soft)] mb-4">¿Listo para digitalizar tu operación?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prueba CampoBase gratis por 14 días</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Sin tarjeta de crédito. Configuración en minutos. Soporte incluido.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 bg-white text-[var(--color-ink)] hover:bg-slate-100">
              Empezar Demo Gratis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/features" className="btn btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-4">Ver Características</Link>
          </div>
        </div>
      </section>
    </>
  )
}
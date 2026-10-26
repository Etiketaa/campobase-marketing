import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 29,
    period: '/mes',
    description: 'Para equipos pequeños que empiezan a digitalizar.',
    features: [
      'Hasta 5 operadores',
      'Hasta 200 clientes',
      'Recorridos y visitas ilimitados',
      'Cobros y comprobantes',
      'Rendiciones de efectivo',
      'Certificados municipales (50/mes)',
      'Dashboard ejecutivo',
      'Exportaciones CSV',
      'Soporte por email (48h)',
    ],
    cta: 'Empezar Gratis 14 días',
    popular: false,
  },
  {
    name: 'Pro',
    price: 79,
    period: '/mes',
    description: 'Para empresas en crecimiento que necesitan escala.',
    features: [
      'Hasta 20 operadores',
      'Hasta 1,000 clientes',
      'Todo lo de Starter +',
      'Certificados ilimitados',
      'Múltiples empresas/sedes',
      'Rangos horarios por cliente',
      'Rendiciones avanzadas',
      'API acceso (webhooks)',
      'Soporte prioritario (24h)',
      'Migración de datos incluida',
    ],
    cta: 'Empezar Gratis 14 días',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    period: '/mes',
    description: 'Para organizaciones grandes con necesidades específicas.',
    features: [
      'Operadores ilimitados',
      'Clientes ilimitados',
      'Todo lo de Pro +',
      'Multi-empresa / Multi-sede nativo',
      'SSO / SAML / LDAP',
      'Auditoría avanzada (logs inmutables)',
      'SLA 99.9% + soporte dedicado',
      'Onboarding personalizado',
      'Entrenamiento equipo in-house',
      'Contrato personalizado + SLA',
    ],
    cta: 'Contactar Ventas',
    popular: false,
  },
]

const faqs = [
  { q: '¿Puedo cambiar de plan después?', a: 'Sí, puedes subir o bajar de plan en cualquier momento. Los cambios se aplican al siguiente ciclo de facturación.' },
  { q: '¿Qué pasa al terminar los 14 días gratis?', a: 'Te avisamos 3 días antes. Si no eliges plan, la cuenta se pausa (no se borra). Puedes reactivar cuando quieras.' },
  { q: '¿Hay costos de implementación?', a: 'Starter/Pro: $0. Enterprise: incluye onboarding personalizado. Migración de datos gratis en Pro/Enterprise.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí, en cualquier momento. No hay contratos de permanencia (salvo Enterprise que negocia SLA).' },
  { q: '¿Los datos son míos?', a: '100% tuyos. Exportación completa en cualquier momento (CSV, JSON, PDF). No hay vendor lock-in.' },
  { q: '¿Qué soporte incluye?', a: 'Starter: email 48h. Pro: prioritario 24h + chat. Enterprise: dedicado + SLA + teléfono.' },
]

export function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[var(--color-bg)] to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-[var(--color-accent)] mb-4">Precios Transparentes</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6">
            Planes que escalan con tu operación
          </h1>
          <p className="text-lg text-[var(--color-ink-soft)] max-w-2xl mx-auto mb-10">
            Sin sorpresas. Sin costos ocultos. Eliges el plan que se adapta a tu tamaño actual
            y escalas cuando creces. 14 días gratis en todos los planes.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <article
                key={i}
                className={`relative card-brutal p-6 flex flex-col ${
                  plan.popular ? 'border-[var(--color-accent)] shadow-brutal relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-brutal">MÁS POPULAR</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-[var(--color-ink)]">{plan.price}</span>
                    <span className="text-[var(--color-ink-muted)]">{plan.period}</span>
                  </div>
                  <p className="text-[var(--color-ink-soft)] text-sm mb-6">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-[var(--color-ink-soft)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn w-full text-center ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="label-brutal text-[var(--color-accent)] mb-4">Preguntas Frecuentes</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-ink)]">Respuestas rápidas</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="card-brutal group">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="font-bold text-[var(--color-ink)]">{faq.q}</span>
                  <svg className="w-5 h-5 text-[var(--color-ink-muted)] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 pb-4 text-[var(--color-ink-soft)] border-t border-[var(--color-border)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-ink)] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-[var(--color-accent-soft)] mb-4">¿Listo para empezar?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prueba CampoBase gratis por 14 días</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Sin tarjeta de crédito. Configuración en minutos. Soporte incluido.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 bg-white text-[var(--color-ink)] hover:bg-slate-100">
              Empezar Gratis Ahora
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
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  DollarSign,
  FileText,
  Users,
  CheckCircle2,
  Smartphone,
  History,
  Download,
  ArrowRight,
  Play,
} from 'lucide-react'
import { ShotFrame } from '../components/ShotFrame'
import { ProductSlider, type Slide } from '../components/ProductSlider'
import { DemoModal } from '../components/DemoModal'

const pilotStats = [
  { value: '148', label: 'Clientes activos', icon: Users },
  { value: '1.356', label: 'Certificados generados', icon: FileText },
  { value: '2', label: 'Operadores en pilot', icon: Users },
  { value: '100%', label: 'Trazabilidad', icon: CheckCircle2 },
]

const rubros = [
  'Empresas de servicios',
  'Control de plagas',
  'Mantenimiento',
  'Logística',
]

const slides: Slide[] = [
  {
    id: 'operador',
    badge: 'Vista operador',
    title: 'El operario sabe exactamente qué hacer hoy',
    description:
      'Desde el celular ve su recorrido, el orden de las visitas, el horario acordado con cada cliente y cuánto efectivo tiene pendiente de rendir.',
    points: [
      'Agenda del día con el estado de cada visita',
      'Horario sugerido por cliente, para no llegar fuera de tiempo',
      'Cobro, comprobante y observaciones en la misma pantalla',
    ],
    image: '/screenshots/operador-campo.webp',
    alt: 'Vista móvil del operario con el recorrido del día y el efectivo pendiente de rendir',
    frame: 'phone',
  },
  {
    id: 'dashboard',
    badge: 'Panel admin',
    title: 'Vos mirás el día en tiempo real, no a fin de mes',
    description:
      'El resumen operativo muestra lo que se programó, lo que se realizó, lo que quedó pendiente y cuánta plata entró, sin pedirle un reporte a nadie.',
    points: [
      'Visitas realizadas, pendientes y no realizadas en vivo',
      'Cobrado hoy separado por medio de pago',
      'Alertas de visitas que no se hicieron y pagos que no entraron',
    ],
    image: '/screenshots/dashboard-admin.webp',
    alt: 'Panel de administración con el resumen operativo diario y las visitas de la jornada',
  },
  {
    id: 'pagos',
    badge: 'Cobros',
    title: 'Cada cobro con comprobante y sin cuentas pendientes',
    description:
      'El cierre de visita exige observaciones y, en transferencias, la foto del comprobante. Cada cobro queda asociado a su visita.',
    points: [
      'Efectivo, transferencia o pago pendiente',
      'Foto obligatoria del comprobante en transferencias',
      'El pago aparece en el panel apenas se registra',
    ],
    image: '/screenshots/pagos-cobranzas.webp',
    alt: 'Pestaña de pagos y cobranzas del panel de administración',
  },
  {
    id: 'rendiciones',
    badge: 'Efectivo',
    title: 'El efectivo del operario no se pierde: se rinde y se audita',
    description:
      'El operario ve su saldo pendiente y el administrador registra la rendición en un solo paso, sin planillas intermedias.',
    points: [
      'Saldo pendiente de efectivo calculado automáticamente',
      'Rendición en un paso, con historial que no se borra',
      'Anulaciones registradas sin tocar el histórico',
    ],
    image: '/screenshots/rendiciones-efectivo.webp',
    alt: 'Pestaña de rendiciones de efectivo con el saldo pendiente por operario',
  },
  {
    id: 'certificados',
    badge: 'Certificados',
    title: 'Certificados municipales sin errores ni planillas',
    description:
      'Histórico importado, continuidad por cliente y generación de certificados nuevos desde las visitas realizadas, listos para imprimir.',
    points: [
      'Histórico consultable con el número literal de cada certificado',
      'Continuidad configurada por cliente',
      'PDF del mes listo para imprimir, sin retipar nada',
    ],
    image: '/screenshots/certificados.webp',
    alt: 'Pestaña de certificados municipales con el histórico del mes',
  },
]

const valueProps = [
  {
    icon: Shield,
    title: 'Operación real',
    desc: 'Diseñado en campo con operadores reales. Resuelve problemas reales de empresas de servicios, control de plagas, mantenimiento y logística.',
  },
  {
    icon: Smartphone,
    title: 'App móvil para el operario',
    desc: 'La vista de campo está pensada para el celular: menos toques, botón grande y toda la información de la visita en un solo lugar.',
  },
  {
    icon: DollarSign,
    title: 'Cobro y rendición',
    desc: 'Múltiples medios de pago, comprobante fotográfico obligatorio en transferencias, rendiciones de efectivo en 1 paso con saldo automático.',
  },
  {
    icon: History,
    title: 'Un histórico que no se borra',
    desc: 'Períodos continuos: nada se reincia el mes que viene. Cada visita, cobro y certificado queda registrado y se puede auditar.',
  },
  {
    icon: FileText,
    title: 'Certificados municipales',
    desc: 'Histórico importado (1.356+), generación desde visitas realizadas, PDF calibrado 2 por hoja, continuidad por cliente configurable.',
  },
  {
    icon: Download,
    title: 'Listo para tu administración',
    desc: 'Exportá el balance, los certificados del mes y los cobros en CSV o PDF cuando tu contador los pida, sin retipar nada.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Cargás clientes y recorridos',
    desc: 'Importás tu cartera, asignás cada cliente a un día y a un operador. El sistema arma la agenda de la semana.',
  },
  {
    n: '02',
    title: 'El operario trabaja desde el celular',
    desc: 'Abre la app, marca la visita, cobra y saca la foto del comprobante. Nada de cuaderno, nada de papel.',
  },
  {
    n: '03',
    title: 'Vos auditás todo desde el panel',
    desc: 'Cobros, rendiciones, certificados y progreso de visitas en una sola pantalla, en vivo.',
  },
]

export function Home() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-bg via-bg to-surface">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-16 items-center">
            <div>
              <span className="chip chip-accent">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />
                Operaciones de campo, sin planillas
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] text-ink">
                Tu base de operaciones
                <br />
                <span className="text-accent">en campo</span>
              </h1>

              <p className="mt-6 text-lg text-ink-soft max-w-xl">
                CampoBase reemplaza planillas, WhatsApps y papel. Gestiona recorridos, visitas,
                cobros y certificados municipales en una sola plataforma, con una app de campo
                que el operario usa desde el celular.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn btn-brand btn-lg">
                  Solicitar demo
                  <ArrowRight className="w-5 h-5 ml-1" aria-hidden="true" />
                </Link>
                <button onClick={() => setDemoOpen(true)} className="btn btn-secondary btn-lg">
                  <Play className="w-5 h-5" aria-hidden="true" />
                  Ver demo interactiva
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
                <div>
                  Usado por <span className="font-semibold text-ink">equipos de campo</span>
                </div>
                <span aria-hidden="true">•</span>
                <div>
                  <span className="font-mono font-semibold text-accent">1.356+</span> certificados generados
                </div>
                <span aria-hidden="true">•</span>
                <div>
                  <span className="font-mono font-semibold text-accent">148</span> clientes activos
                </div>
              </div>

              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft">
                {['Sin tarjeta de crédito', 'Configuración en minutos', 'Soporte incluido'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="animate-float" data-reveal="scale">
                <ShotFrame
                  src="/screenshots/dashboard-admin.webp"
                  alt="Panel de CampoBase con el resumen operativo del día, cobros y estado de las visitas"
                  label="app.campobase"
                  loading="eager"
                />
              </div>

              <div
                className="hidden sm:flex absolute -bottom-8 -left-6 items-center gap-3 surface-raised px-4 py-3"
                data-reveal="left"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-brutal bg-accent-soft">
                  <DollarSign className="w-4 h-4 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <div className="label-brutal text-ink-muted">Cobrado hoy</div>
                  <div className="font-mono text-lg font-bold text-ink">$ 72.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas del pilot */}
      <section className="py-14 lg:py-16 bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            {pilotStats.map((stat) => (
              <div key={stat.label} className="surface-raised p-6 text-center">
                <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-accent font-mono">{stat.value}</div>
                <div className="font-semibold text-ink mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* El sistema en acción (slider) */}
      <section id="sistema" className="py-20 lg:py-28 bg-bg scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductSlider slides={slides} />
        </div>
      </section>

      {/* Rubros */}
      <section className="py-14 bg-surface border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-ink-muted" data-reveal>
            Pensado para equipos que trabajan en campo
          </span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4" data-reveal-stagger>
            {rubros.map((rubro) => (
              <span key={rubro} className="text-lg lg:text-xl font-bold text-ink-soft">
                {rubro}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 lg:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-reveal>
            <span className="label-brutal text-accent">Cómo funciona</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-2">
              De la planilla al sistema, en tres pasos
            </h2>
          </div>

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger>
            {steps.map((step) => (
              <li key={step.n} className="surface-raised p-6 lg:p-8">
                <span className="font-mono text-sm font-bold text-accent">{step.n}</span>
                <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-reveal>
            <span className="label-brutal text-accent">Por qué CampoBase</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-2">Diseñado para la operación real</h2>
            <p className="text-ink-soft mt-3">
              No es un CRM genérico. Fue construido en campo, con operadores reales, resolviendo
              problemas reales de empresas de servicios.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-stagger>
            {valueProps.map((prop) => (
              <article key={prop.title} className="surface-raised p-6 transition-shadow duration-200 hover:shadow-lift">
                <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center mb-4">
                  <prop.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{prop.title}</h3>
                <p className="text-ink-soft leading-relaxed">{prop.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-ink text-on-dark py-20 lg:py-28">
        <div className="absolute inset-0 hero-glow opacity-60" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-accent-soft mb-4" data-reveal>
            ¿Listo para digitalizar tu operación?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-reveal>
            Probá CampoBase con tu propia operación
          </h2>
          <p className="text-on-dark-muted mb-8 max-w-xl mx-auto" data-reveal>
            Sin tarjeta de crédito. Configuración en minutos. Soporte incluido.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
            <Link to="/contact" className="btn btn-brand btn-lg">
              Solicitar demo
              <ArrowRight className="w-5 h-5 ml-1" aria-hidden="true" />
            </Link>
            <button onClick={() => setDemoOpen(true)} className="btn btn-outline border-on-dark text-on-dark btn-lg">
              <Play className="w-5 h-5" aria-hidden="true" />
              Ver demo interactiva
            </button>
          </div>
        </div>
      </section>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}

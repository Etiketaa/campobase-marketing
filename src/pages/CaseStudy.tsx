import { Link } from 'react-router-dom'
import { Shield, FileText, DollarSign, Users, TrendingUp, Clock, Camera, Smartphone, Award } from 'lucide-react'

const timeline = [
  { date: 'Ene 2025', title: 'Kickoff & Diagnóstico', desc: 'Reuniones con gerencia y operadores. Mapeo de procesos actuales: planillas Excel, WhatsApp, papel. Definición de MVP.' },
  { date: 'Feb 2025', title: 'Setup & Migración', desc: 'Carga de 148 clientes históricos. Importación de 1,356 certificados municipales (2025-2026). Configuración de recorridos y operadores.' },
  { date: 'Mar 2025', title: 'Pilot Operativo', desc: '2 operadores usando CampoBase en producción. 4 semanas de uso real. Feedback semanal. Ajustes de UX basados en uso real.' },
  { date: 'Abr 2025', title: 'Go-Live & Escalado', desc: 'Validación de métricas. Documentación de usuario. Preparación para escalar a más operadores y nuevas empresas.' },
]

const metrics = [
  { value: '148', label: 'Clientes migrados', icon: Users, desc: 'Desde planillas Excel/Sheets' },
  { value: '1.356', label: 'Certificados históricos', icon: FileText, desc: 'Importados desde Excel municipal' },
  { value: '2', label: 'Operadores en pilot', icon: Users, desc: 'Uso real en campo 4 semanas' },
  { value: '0', label: 'Pérdida de datos', icon: Shield, desc: 'Cero incidentes en pilot' },
  { value: '95%', label: 'Adopción operadores', icon: TrendingUp, desc: 'Adopción voluntaria semana 3' },
  { value: '< 30s', label: 'Tiempo cierre visita', icon: Clock, desc: 'Vs 3-5 min en papel/WhatsApp' },
]

const problemsSolved = [
  { problem: 'Planillas Excel dispersas', solution: 'Única fuente de verdad en Supabase. CRUD clientes, historial, certificados en un solo lugar.', icon: FileText },
  { problem: 'Reset mensual destructivo', solution: 'Períodos continuos acumulativos. Histórico preservado. No hay "borrado de mes anterior".', icon: Shield },
  { problem: 'WhatsApp para coordinar', solution: 'App móvil nativa web. Operador ve su recorrido del día, inicia/cierra visita, foto comprobante, observa.', icon: Smartphone },
  { problem: 'Comprobantes en galería', solution: 'Solo cámara del celular. Subida a Supabase Storage. Admin ve galería en alta resolución. Descarga masiva CSV.', icon: Camera },
  { problem: 'Certificados manuales', solution: 'Generación masiva desde visitas. N° correlativo global (max+1). PDF calibrado 2 por hoja A4. Histórico preservado.', icon: FileText },
  { problem: 'Sin control de efectivo', solution: 'Rendiciones 1-paso (nace "Rendido"). Saldo automático por operador. Anulación sin borrar historial.', icon: DollarSign },
]

export function CaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-b from-bg to-surface py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="stagger">
              <span className="label-brutal text-accent mb-4">Caso de Estudio Real</span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-ink mb-6">
                Cómo una empresa de control de plagas digitalizó su operación
                <br />
                <span className="text-accent">en 4 semanas</span>
              </h1>
              <p className="text-lg text-ink-soft mb-8 max-w-xl">
                Empresa de control de plagas (Bahía Blanca) migró de planillas Excel, WhatsApp y papel
                a CampoBase. Pilot de 4 semanas con 2 operadores, 148 clientes, 1,356 certificados históricos.
                Cero pérdida de datos. 95% adopción voluntaria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                  Ver Demo Completa
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/features" className="btn btn-secondary text-lg px-8 py-4">Ver Características</Link>
              </div>
            </div>

            {/* Pilot Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 stagger">
              {metrics.map((metric, i) => (
                <div key={i} className="bg-surface border-2 border-border rounded-brutal-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent font-mono">{metric.value}</div>
                  <div className="font-semibold text-ink mt-1">{metric.label}</div>
                  <div className="text-xs text-ink-muted mt-1">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-brutal text-accent mb-4">Cronología del Pilot</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">De planillas a SaaS en 4 semanas</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>
            <div className="space-y-12 stagger">
              {timeline.map((item, i) => (
                <div key={i} className="relative lg:pl-20">
                  <div className="absolute left-8 top-4 w-4 h-4 rounded-full bg-accent border-4 border-on-dark z-10"></div>
                  <div className="absolute left-3 top-10 text-right w-14 text-xs font-mono text-ink-muted">{item.date}</div>
                  <div className="ml-20 lg:ml-0 p-6 bg-surface border-2 border-border rounded-brutal-lg shadow-brutal-sm">
                    <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                    <p className="text-ink-soft">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-brutal text-accent mb-4">Problemas → Soluciones</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">Lo que resolvimos para empresas de campo</h2>
            <p className="text-ink-soft mt-3 max-w-2xl mx-auto">Cada problema real de la operación diaria tuvo su solución técnica en CampoBase. Sin workarounds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {problemsSolved.map((item, i) => (
              <article key={i} className="card-brutal p-6 h-full">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-2">Antes: {item.problem}</h3>
                    <p className="text-ink-soft">Después: {item.solution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-ink text-on-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-brutal border-ink-soft bg-ink/50 p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="w-8 h-8 text-accent" aria-hidden="true" />
              <span className="label-brutal text-accent-soft">Testimonio del Pilot</span>
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
              "CampoBase nos quitó el dolor de cabeza de las planillas. Los operadores adoptaron la app
              solos en la semana 2. Ahora tenemos trazabilidad total y los certificados salen solos."
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-on-dark-muted">
              <div className="text-right">
                <div className="font-bold">Gerardo M.</div>
                <div className="text-sm">Gerente Operaciones · Control de plagas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="label-brutal text-accent mb-4">Resultados Medibles</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">Impacto en la operación diaria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {[
              { label: 'Tiempo cierre visita', before: '3-5 min', after: '< 30 seg', improvement: '90% menos', icon: Clock },
              { label: 'Errores de transcripción', before: 'Frecuentes', after: 'Cero', improvement: '100% menos', icon: Shield },
              { label: 'Tiempo generación cert.', before: '15-20 min', after: '< 1 min', improvement: '95% menos', icon: FileText },
              { label: 'Visibilidad cobros', before: 'Semanal', after: 'Tiempo real', improvement: 'Instantáneo', icon: DollarSign },
            ].map((item, i) => (
              <article key={i} className="card-brutal p-6 text-center">
                <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-ink mb-2">{item.label}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-center gap-4 text-ink-muted">
                    <span>Antes: {item.before}</span>
                    <span className="text-accent font-bold">→</span>
                    <span className="text-accent font-bold">{item.after}</span>
                  </div>
                  <div className="text-accent font-bold text-sm mt-1">{item.improvement}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-on-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-accent-soft mb-4">¿Quieres estos resultados para tu empresa?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Agenda una demo personalizada</h2>
          <p className="text-on-dark-muted mb-8 max-w-xl mx-auto">Te mostramos CampoBase en vivo con tus datos. Sin compromiso. 30 minutos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 bg-surface text-ink hover:bg-surface-2">
              Agendar Demo
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
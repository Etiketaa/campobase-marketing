import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState<{
    name: string
    email: string
    company: string
    phone: string
    message: string
  }>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-b from-bg to-surface py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="stagger">
              <span className="label-brutal text-accent mb-4">Contacto</span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-ink mb-6">
                Hablemos de tu operación
              </h1>
              <p className="text-lg text-ink-soft mb-8 max-w-xl">
                ¿Tienes dudas? ¿Quieres ver una demo personalizada? ¿Necesitas migrar datos?
                Nuestro equipo responde en menos de 24h. Sin bots, personas reales.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-surface border-2 border-border rounded-brutal-lg">
                  <div className="w-12 h-12 rounded-brutal bg-accent-soft flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="label-brutal text-ink-soft">Email</p>
                    <a href="mailto:hola@gesope.com" className="text-ink hover:text-accent transition-colors">hola@gesope.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface border-2 border-border rounded-brutal-lg">
                  <div className="w-12 h-12 rounded-brutal bg-warn-soft flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-warn" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13 -2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.018 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="label-brutal text-ink-soft">Teléfono</p>
                    <a href="tel:+5491100000000" className="text-ink hover:text-accent transition-colors">+54 9 11 0000 0000</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface border-2 border-border rounded-brutal-lg">
                  <div className="w-12 h-12 rounded-brutal bg-info-soft flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="label-brutal text-ink-soft">Oficina</p>
                    <address className="text-ink not-italic">Bahía Blanca, Buenos Aires, Argentina</address>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="hidden lg:block stagger">
              <div className="bg-ink text-on-dark rounded-brutal-lg p-8">
                <h3 className="text-xl font-bold mb-6">¿Prefieres que te llamemos?</h3>
                <p className="text-on-dark-muted mb-6">Deja tu número y te llamamos en menos de 2 horas hábiles. Sin compromiso.</p>
                <Link to="/contact" className="btn btn-primary w-full justify-center">Solicitar Llamada</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-brutal p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-ink mb-2">Envíanos un mensaje</h2>
            <p className="text-ink-soft mb-6">Te respondemos en menos de 24h hábiles.</p>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-accent-soft border-2 border-accent rounded-brutal flex items-center gap-3 text-accent-ink animate-slide-down">
                <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-bold">¡Mensaje enviado!</p>
                  <p className="text-sm">Te responderemos en menos de 24h hábiles.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-danger-soft border-2 border-danger rounded-brutal flex items-center gap-3 text-danger animate-slide-down">
                <AlertCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-bold">Error al enviar</p>
                  <p className="text-sm">Intenta de nuevo o escríbenos directo a hola@gesope.com</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="label-brutal mb-1.5 block">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Juan Pérez"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-brutal mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="juan@empresa.com"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="label-brutal mb-1.5 block">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Mi Empresa S.A."
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label-brutal mb-1.5 block">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="+54 9 11 0000 0000"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="label-brutal mb-1.5 block">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input resize-none"
                  placeholder="Cuéntanos qué necesitás: demo, migración, dudas técnicas, precios..."
                  disabled={status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary w-full sm:w-auto px-8 py-4"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="w-5 h-5 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="4" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-accent mb-4">Horarios de Atención</span>
          <h2 className="text-2xl font-bold text-ink mb-4">Estamos cuando nos necesitas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { label: 'Soporte Email', hours: 'Lun-Vie 9:00-18:00', desc: 'Respuesta < 24h hábiles' },
              { label: 'Chat Pro/Enterprise', hours: 'Lun-Vie 9:00-18:00', desc: 'Tiempo real en app' },
              { label: 'Emergencias Enterprise', hours: '24/7', desc: 'Teléfono directo SLA' },
            ].map((item, i) => (
              <div key={i} className="card-brutal p-6 text-center">
                <h3 className="font-bold text-ink mb-1">{item.label}</h3>
                <p className="text-accent font-bold text-lg mb-1">{item.hours}</p>
                <p className="text-ink-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-on-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-brutal text-accent-soft mb-4">¿Listo para digitalizar?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Agenda tu demo sin compromiso</h2>
          <p className="text-on-dark-muted mb-8 max-w-xl mx-auto">30 minutos. Te mostramos Gesope con tus datos. Sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/gesope/demo" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4 bg-surface text-ink hover:bg-surface-2">
              Agendar en Calendly
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="mailto:hola@gesope.com" className="btn btn-outline border-on-dark text-on-dark hover:bg-surface/10 text-lg px-8 py-4">Escribir Email</a>
          </div>
        </div>
      </section>
    </>
  )
}
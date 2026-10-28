import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import { CaseStudy } from './pages/CaseStudy'
import { Documentation } from './pages/Documentation'
import { Pricing } from './pages/Pricing'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { initReveal } from './lib/reveal'
import './index.css'

export default function App() {
  const location = useLocation()

  // Animaciones de entrada al hacer scroll (se re-registran en cada ruta)
  useEffect(() => {
    initReveal()
  }, [location.pathname])

  // Cada ruta arranca arriba
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

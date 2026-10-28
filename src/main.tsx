import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

type ErrorBoundaryState = { hasError: boolean; error: Error | null }

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[CampoBase] error de render:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-bg px-6 text-ink">
          <div className="w-full max-w-xl border-2 border-danger rounded-brutal-lg bg-danger-soft p-8 text-center shadow-brutal-sm">
            <h1 className="text-xl font-bold text-danger-ink">Algo salió mal</h1>
            <p className="mt-2 text-sm text-danger-ink">
              Recargá la página. Si el error sigue, escribinos y lo revisamos.
            </p>
            <pre className="mt-4 max-h-60 overflow-auto whitespace-pre-wrap text-left font-mono text-xs text-danger-ink">
              {this.state.error?.message}
            </pre>
            <button type="button" onClick={() => window.location.reload()} className="btn btn-primary mt-6">
              Recargar
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)

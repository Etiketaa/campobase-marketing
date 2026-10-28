type ShotFrameProps = {
  src: string;
  alt: string;
  /** Texto de la barra del navegador (ej. URL de la app). */
  label?: string;
  variant?: 'browser' | 'phone';
  className?: string;
  /** loading: eager para imágenes above-the-fold (hero). */
  loading?: 'lazy' | 'eager';
};

/** Marco de navegador o de teléfono para una captura real del sistema. */
export function ShotFrame({ src, alt, label, variant = 'browser', className = '', loading = 'lazy' }: ShotFrameProps) {
  if (variant === 'phone') {
    return (
      <div className={`phone-frame ${className}`}>
        <div className="overflow-hidden rounded-phone-inner bg-surface">
          <img src={src} alt={alt} className="block w-full" loading={loading} decoding="async" />
        </div>
      </div>
    );
  }

  return (
    <div className={`shot-frame ${className}`}>
      <div className="shot-frame-bar">
        <span className="shot-dot bg-danger" aria-hidden="true" />
        <span className="shot-dot bg-warn" aria-hidden="true" />
        <span className="shot-dot bg-accent" aria-hidden="true" />
        {label ? (
          <span className="ml-2 truncate font-mono text-xs text-ink-muted">{label}</span>
        ) : null}
      </div>
      <img src={src} alt={alt} className="block w-full" loading={loading} decoding="async" />
    </div>
  );
}

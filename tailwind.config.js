/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0F172A',
          soft: '#334155',
          muted: '#64748B',
        },
        accent: {
          DEFAULT: '#059669',
          soft: '#D1FAE5',
          ink: '#064E3B',
        },
        warn: {
          DEFAULT: '#D97706',
          soft: '#FEF3C7',
          ink: '#78350F',
        },
        danger: {
          DEFAULT: '#DC2626',
          soft: '#FEE2E2',
        },
        info: {
          DEFAULT: '#1D4ED8',
          soft: '#DBEAFE',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F1F5F9',
        },
        border: {
          DEFAULT: '#CBD5E1',
          strong: '#94A3B8',
        },
      },
      borderWidth: {
        'brutal': '2px',
      },
      borderRadius: {
        'brutal': '2px',
        'brutal-md': '4px',
        'brutal-lg': '8px',
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0 0 #0F172A',
        'brutal': '4px 4px 0 0 #0F172A',
      },
      transitionDuration: {
        'micro': '100ms',
        'standard': '200ms',
        'enter': '300ms',
      },
      transitionTimingFunction: {
        'brutal': 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
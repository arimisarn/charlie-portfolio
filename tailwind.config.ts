/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class', // 'class' pour utiliser dark mode avec <body className="dark">
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // chemins React TS pur
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5f5',          // remplace hsl(var(--background))
        foreground: '#111827',          // remplace hsl(var(--foreground))
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#e5e7eb',
          foreground: '#111827',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#d1d5db',
        input: '#f9fafb',
        ring: '#6366f1',
        chart: {
          '1': '#6366f1',
          '2': '#3b82f6',
          '3': '#22c55e',
          '4': '#f59e0b',
          '5': '#ef4444',
        },
        sidebar: {
          DEFAULT: '#f5f5f5',
          foreground: '#111827',
          primary: '#6366f1',
          'primary-foreground': '#ffffff',
          accent: '#6366f1',
          'accent-foreground': '#ffffff',
          border: '#d1d5db',
          ring: '#6366f1',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cultural': {
          'black': '#0a0a0a',
          'white': '#ffffff',
          'off': '#f5f5f5',
          'gray': '#888888',
          'light-gray': '#e5e5e5',
          'accent': '#d4af37',
        }
      },
      fontFamily: {
        'editorial': ['Georgia', 'serif'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'gutter': '2rem',
        'section': '6rem',
        'container': '1200px',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['1.25rem', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

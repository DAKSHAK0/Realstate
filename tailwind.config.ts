import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        aurum: {
          background: '#060608',
          surface: '#0B0D10',
          surfaceMuted: '#151820',
          accent: '#D3A45F',
          accentSoft: '#E2C28A',
          border: '#2A2F3A',
          text: '#F5F2EB',
          textMuted: '#9EA4B3'
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'aurum-soft':
          '0 18px 45px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.02)'
      },
      backgroundImage: {
        'aurum-radial':
          'radial-gradient(circle at top, rgba(211,164,95,0.16), transparent 55%)',
        'aurum-gradient':
          'linear-gradient(135deg, rgba(10,10,12,1), rgba(19,19,24,1))'
      }
    }
  },
  plugins: []
};

export default config;


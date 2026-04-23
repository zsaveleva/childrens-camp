import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1a3c2e',
          dark: '#0f2419',
          light: '#2a5040',
        },
        leaf: {
          DEFAULT: '#2e9e6a',
          light: '#e8f5ee',
        },
        gold: {
          DEFAULT: '#f0a30e',
          light: '#fef3c7',
          dark: '#c47d00',
        },
        'sky-camp': '#0e88c9',
        cream: '#f2ede6',
        ink: '#111827',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a3c2e 0%, #0f2419 50%, #0a1810 100%)',
      },
    },
  },
  plugins: [],
}

export default config

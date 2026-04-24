import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0d2c6b',
          dark: '#07193e',
          light: '#1a3d8c',
        },
        leaf: {
          DEFAULT: '#1a6ec4',
          light: '#deeefb',
        },
        gold: {
          DEFAULT: '#f0a30e',
          light: '#fef3c7',
          dark: '#c47d00',
        },
        'sky-camp': '#c62828',
        cream: '#eff4fb',
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
        'hero-gradient': 'linear-gradient(135deg, #0d2c6b 0%, #07193e 50%, #03102a 100%)',
      },
    },
  },
  plugins: [],
}

export default config

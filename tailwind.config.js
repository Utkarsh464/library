/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Serif', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(0 0% 18%)',
        input: 'hsl(0 0% 18%)',
        background: 'hsl(201 100% 13%)',
        foreground: 'hsl(0 0% 100%)',
        muted: 'hsl(0 0% 10%)',
        'muted-foreground': 'hsl(240 4% 66%)',
        primary: 'hsl(0 0% 100%)',
        'primary-foreground': 'hsl(0 0% 4%)',
        secondary: 'hsl(0 0% 10%)',
        accent: 'hsl(0 0% 10%)',
      },
      keyframes: {
        'fade-rise': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-rise': 'fade-rise 0.8s ease-out both',
        'fade-rise-delay': 'fade-rise 0.8s ease-out 0.2s both',
        'fade-rise-delay-2': 'fade-rise 0.8s ease-out 0.4s both',
      },
    },
  },
  plugins: [],
}

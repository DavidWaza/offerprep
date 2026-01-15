import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fontFamily: {
           montserrat: ['var(--font-montserrat)', 'sans-serif'],
           changaOne: ['var(--font-changa-one)', 'cursive'],
        },
        coral: 'hsl(12 85% 65%)',
        lavender: 'hsl(260 80% 75%)',
        amber: 'hsl(38 92% 55%)',

        /* semantic tokens */
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          foreground: 'hsl(var(--muted-foreground))',
        },
      },

      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top, hsl(260 80% 92%), hsl(0 0% 100%))',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

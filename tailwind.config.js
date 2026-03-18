/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Colors use CSS variables so dark mode overrides in index.css apply automatically.
        // Format: rgb(var(--X-rgb) / <alpha-value>) enables Tailwind opacity modifiers (bg-orea-cream/50).
        orea: {
          cream:     'rgb(var(--orea-cream-rgb)     / <alpha-value>)',
          dark:      'rgb(var(--orea-dark-rgb)      / <alpha-value>)',
          champagne: 'rgb(var(--orea-champagne-rgb) / <alpha-value>)',
          gold:      'rgb(var(--orea-gold-rgb)      / <alpha-value>)',
          'gold-a':  'rgb(var(--orea-gold-a-rgb)    / <alpha-value>)',
          taupe:     'rgb(var(--orea-taupe-rgb)     / <alpha-value>)',
          sand:      'rgb(var(--orea-sand-rgb)      / <alpha-value>)',
          linen:     'rgb(var(--orea-linen-rgb)     / <alpha-value>)',
          earth:     'rgb(var(--orea-earth-rgb)     / <alpha-value>)',
          mocha:     'rgb(var(--orea-mocha-rgb)     / <alpha-value>)',
          oatmeal:   'rgb(var(--orea-oatmeal-rgb)   / <alpha-value>)',
          success:   'rgb(var(--orea-success-rgb)   / <alpha-value>)',
          error:     'rgb(var(--orea-error-rgb)     / <alpha-value>)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display':  ['clamp(2.25rem, 5vw + 1rem, 5rem)',          { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'h1':       ['clamp(1.875rem, 3vw + 1rem, 3.75rem)',      { lineHeight: '1.15', letterSpacing: '0' }],
        'h2':       ['clamp(1.5rem, 2.5vw + 0.75rem, 3rem)',      { lineHeight: '1.2',  letterSpacing: '0' }],
        'h3':       ['clamp(1.25rem, 2vw + 0.5rem, 1.875rem)',    { lineHeight: '1.3',  letterSpacing: '0.01em' }],
        'h4':       ['clamp(1rem, 1vw + 0.5rem, 1.25rem)',        { lineHeight: '1.4',  letterSpacing: '0.02em' }],
        'h5':       ['clamp(0.9375rem, 0.5vw + 0.75rem, 1.0625rem)', { lineHeight: '1.45', letterSpacing: '0.01em' }],
        'body-lg':  ['clamp(1rem, 0.5vw + 0.875rem, 1.125rem)',   { lineHeight: '1.7',  letterSpacing: '0.01em' }],
        'body':     ['clamp(0.875rem, 0.25vw + 0.8125rem, 1rem)', { lineHeight: '1.7',  letterSpacing: '0.015em' }],
        'body-sm':  ['clamp(0.75rem, 0.2vw + 0.7rem, 0.875rem)', { lineHeight: '1.6',  letterSpacing: '0.02em' }],
        'caption':  ['clamp(0.625rem, 0.15vw + 0.6rem, 0.75rem)', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        'micro':    ['clamp(0.5rem, 0.1vw + 0.475rem, 0.625rem)', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section-sm': 'clamp(3rem, 4vw, 4rem)',
        'section':    'clamp(4rem, 6vw, 6rem)',
        'section-lg': 'clamp(5rem, 8vw, 8rem)',
        'section-xl': 'clamp(6rem, 10vw, 10rem)',
      },
      maxWidth: {
        'content':   '48rem',
        'container': '72rem',
        'wide':      '100rem',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
}

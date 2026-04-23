/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
        },
        paper: {
          DEFAULT: 'rgb(var(--paper) / <alpha-value>)',
          deep: 'rgb(var(--paper-deep) / <alpha-value>)',
        },
        amber: {
          DEFAULT: 'rgb(var(--amber) / <alpha-value>)',
          soft: 'rgb(var(--amber-soft) / <alpha-value>)',
        },
        brand: {
          green: 'rgb(var(--green) / <alpha-value>)',
          blue: 'rgb(var(--blue) / <alpha-value>)',
          rose: 'rgb(var(--rose) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)',
      },
      boxShadow: {
        soft: '0 4px 20px -8px rgb(11 18 32 / 0.10), 0 2px 6px -3px rgb(11 18 32 / 0.06)',
        lift: '0 20px 60px -20px rgb(11 18 32 / 0.18), 0 8px 20px -10px rgb(11 18 32 / 0.10)',
        note: '4px 6px 0 0 rgb(11 18 32 / 0.08)',
      },
    },
  },
  plugins: [],
};

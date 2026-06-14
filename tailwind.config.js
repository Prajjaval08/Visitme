/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#030712',
          2: '#0a0f1e',
          3: '#0f1629',
        },
        accent: {
          DEFAULT: '#3b82f6',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
        },
        border: '#1e293b',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées SB-Nettoyage
        'forest-green': '#1b5b35',
        'off-white': '#f2f2f2',
        'golden-orange': '#c88f3b',
        'deep-plum': '#1a0d1a',
        // Variantes pour les états hover/focus
        'forest-green-dark': '#0f3d24',
        'golden-orange-dark': '#a67530',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
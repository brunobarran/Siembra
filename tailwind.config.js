/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8243',         // Naranja AFP Siembra (original)
        secondary: '#1E5BA8',       // Azul (original)
        // Login specific colors
        'siembra-orange': '#FF7933',
        'siembra-blue': '#015FB8',
        'siembra-yellow': '#FDB216',
        'siembra-grey': '#4C4C4C',
        'siembra-grey-light': '#B3B3B3',
        'siembra-border': '#E4E6EE',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'login-card': '0px 13px 24px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  plugins: [],
}

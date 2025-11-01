/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8243',    // Naranja AFP Siembra
        secondary: '#1E5BA8',  // Azul
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ff7c10', // Brand Orange from mockup
        dark: '#111827', // Deep Black
        bglight: '#f9fafb', // Soft Background
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#0A1128',
        'electric-cyan': '#00D9FF',
        'steel-blue': '#2C3E50',
        'charcoal-grey': '#34495E',
        'safety-orange': '#FF6B35',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {  
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 140s linear infinite',
        'spin-slow-reverse': 'spin 140s linear reverse infinite',
      }
    },
  },
  plugins: [],
}


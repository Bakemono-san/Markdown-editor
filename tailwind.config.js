/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ], 
  
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Roboto-Slab','serif'],
      }
    },
  },
  
  plugins: [],
}


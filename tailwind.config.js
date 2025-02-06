/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,stories.tsx, stories.jsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
        '3xl': '1740px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#DC2626', // Red
        accent: '#7A8B99', // Slate Gray
        white: '#FFFFFF', // White
      },
    },
  },
  plugins: [],
}


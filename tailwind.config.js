/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-blue': '#2e8dff',
        'primary-white': '#ffffff',
        'primary-gray': '#f5f5f5',
      },
      textColor: {
        'primary-white': '#ffffff',
        'primary-blue': '#2e8dff',
      },
      borderColor: {
        'primary-blue': '#2e8dff',
      }
    },
  },
  plugins: [],
}

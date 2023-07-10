/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-blue": "#2e8dff",
        "primary-white": "#ffffff",
        "white-smoke": "#f5f5f5",
        "primary-saved": "rgb(251,251,251,0.4)",
        "secondary-saved": "rgb(251,251,251,0.3)"
      },
      textColor: {
        "primary-white": "#ffffff",
        "primary-blue": "#2e8dff",
      },
      borderColor: {
        'primary-blue': '#2e8dff',
      },
      boxShadow: {
        "light-gray": "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      borderColor: {
        "primary-blue": "#2e8dff",
      },
      fill: {
        "white-smoke": "#f5f5f5",
      }
    },
  },
  plugins: [],
};

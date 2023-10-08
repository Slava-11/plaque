/ @type {import('tailwindcss').Config} */;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        tablet: "768px",
        forDesktop: "1024px",
        forDesktopHD: "1440px",
        fullHD: "1920px",
      },
      colors: {
        'blackColor': '#000',
        'white':'#fff',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c22",
        tahiti: {
          light: "#67e8f9",
          DEFAULT: "#00ff99",
          hover: "#00e187",
          dark: "#0e7490",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "960px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        primary: "var(--font-JetBrain)",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

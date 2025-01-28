/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["--font-roboto"],
        poppins: ["--font-poppins"],
      },
      colors: {
        "primary-bg": "#000000",
      },
      fontSize: {
        clampacordeon: "clamp(1.8rem, 2.2vw, 2.8rem)", // Aquí defines tu valor de clamp
        clampP: "clamp(1.3rem,.9vw,1.5rem);", // Aquí defines tu valor de clamp
        clampPCards: "clamp(.8rem,1vw,1.2rem);", // Aquí defines tu valor de clamp
        clampHCards: "clamp(1.5rem, 1.8vw, 2.8rem)", // Aquí defines tu valor de clamp
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to right, #ddc2ff 0%, #b3e0ff 80%, #ddc2ff 100%)",
      },
    },
    screens: {
      sm: "440px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1640px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

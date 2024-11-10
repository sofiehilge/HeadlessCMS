/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "baskerville-regular": ["Baskervville", "serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "40px" }], // Default size
        "h1-md": ["40px", { lineHeight: "44px" }], // Medium screens
        "h1-lg": ["42px", { lineHeight: "48px" }], // Large screens
        h2: ["28px", { lineHeight: "32px" }],
        "h2-md": ["32px", { lineHeight: "36px" }],
        "h2-lg": ["36px", { lineHeight: "40px" }],
        h3: ["24px", { lineHeight: "28px" }],
        "h3-md": ["28px", { lineHeight: "32px" }],
        "h3-lg": ["32px", { lineHeight: "36px" }],
      },
      colors: {
        primaryColor: "#472237", // Adding custom colors
        secondaryColor: "#52603a",
        lightColor: "#e69d94",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      // Simplified components for testing
      addComponents({
        ".h1": {
          "@apply text-h1 md:text-h1-md lg:text-h1-lg": {}, // Font sizes
        },
        ".h2": {
          "@apply text-h2 md:text-h2-md lg:text-h2-lg": {},
        },
        ".h3": {
          "@apply text-h3 md:text-h3-md lg:text-h3-lg": {},
        },
      });
    },
  ],
};

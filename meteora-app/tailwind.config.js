/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "meteora-gray": "#CCCCCC",
        "meteora-dark-gray": "#6C757D",
        "meteora-darker-gray": "#343A40",
        "meteora-lime-yellow": "#DAFF01",
        "meteora-light-purple": "#9353FF",
        "meteora-dark": "#212529",
      },
      fontSize: {
        "xs+1": "13px",
        "3xl": "28px",
      },
      keyframes: {
        expand: {
          from: { transform: "scale(0)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
    },
    animation: {
      expand: "expand 0.3s cubic-bezier(0.2, 0.2, 0.2, 1)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".overflow-y-hidden": {
          overflowY: "hidden",
        },
      });
    },
  ],
};

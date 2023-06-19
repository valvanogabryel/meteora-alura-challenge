/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "meteora-gray": "#CCCCCC",
        "meteora-dark-gray": "#6C757D",
        "meteora-darker-gray": "#343A40",
        "meteora-lime-yellow": "#DAFF01",
        "meteora-light-purple": "#9353FF",
      },
      fontSize: {
        "xs+1": "13px",
      },
      keyframes: {
        "expand-height": {
          from: { height: "0" },
          to: { height: "100%" },
        },
      },
    },
    animation: {
      "expand-height": "expand-height 0.3s linear",
    },
  },
  plugins: [],
};

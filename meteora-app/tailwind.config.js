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
        "meteora-lime-yellow": "#DAFF01",
        "meteora-light-purple": "#9353FF",
      },
    },
  },
  plugins: [],
};

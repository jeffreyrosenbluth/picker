/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  // plugins: [require("tw-elements/dist/plugin.cjs")],
  plugins: { "tw-elements.cjs": {} },
  safelist: ["animate-[zoom-out_2s_ease-in-out]"],
};

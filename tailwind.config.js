/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        beth: ["Beth Ellen", "serif"], 
        apple: ["Homemade Apple", "cursive"], 
        aurore: ["La Belle Aurore", "cursive"], 
        amatic: ["Amatic SC", "sans-serif"]
      }
    },
  },
  plugins: [],
};


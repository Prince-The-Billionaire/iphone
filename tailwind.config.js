/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#2997FF",
        grey:{
          DEFAULT:"#86868b",
          100:"#94928d",
          200:"#afafaf",
          300:"#4242570"
        },
        zinc:"#101010",
      },
    },
  },
  plugins: [],
};

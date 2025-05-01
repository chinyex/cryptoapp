/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /^(p|pt|pb|pl|pr|px|py|m|mt|mb|ml|mr|mx|my)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64)$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        myGreen: "#C5FF4A",
      },
    }, // No need for custom colors here
  },
  plugins: [],
};

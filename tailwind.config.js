/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#9BBEC8",
        page: "#164863",
        card: "#DDF2FD",
        "card-hover": "#427D9D",
        "defult-text": "#DDF2FD",
        "blue-accent": "#39A7FF",
        "blue-accent-hover": "#87C4FF",
      },
    },
  },
  plugins: [],
};

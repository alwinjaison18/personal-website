/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#f5f5f5",
        "light-text": "#111827",
        accent: "#4f46e5",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #6d28d9, #ff4081)",
      },
    },
  },
  plugins: [],
};

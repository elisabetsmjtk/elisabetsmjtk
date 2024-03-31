/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind-components/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: "#0f172a",
        primary: "#14b8a6",
        ham: "#F9FAFB",
      },
    },
  },
  plugins: [],
};

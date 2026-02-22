/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          dark: "#1d2021", // Dark background
          milk: "#ebdbb2", // Foreground text color
          blue: "#83a598",
          yellow: "#fabd2f",
          red: "#fb4934",
          green: "#b8bb26",
          purple: "#d3869b",
          aqua: "#8ec07c",
          orange: "#fe8019",
          gray: "#928374",
        },
      },
    },
  },
  plugins: [],
};

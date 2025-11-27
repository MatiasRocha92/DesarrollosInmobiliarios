/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        "premium-dark": "#0a0a0a",
        "premium-gray": "#1a1a1a",
        "premium-gold": "#d4af37",
        "premium-cream": "#f5f5f0",
        "premium-stone": "#e6e2dd",
      },
      transitionTimingFunction: {
        "premium-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

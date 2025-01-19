/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        heroPattern: "url('/src/assets/images/wildflowers.jpg')",
      },
      colors: {
        heroBgYellow: "#FFFDF4",
        bgYellow: "#FFFCEC",
        bgYellow2: "#F6EDC4",
      },

      fontFamily: {
        sans: ["Dancing Script", "sans-serif"],
      },
    },
  },

  plugins: [],
};

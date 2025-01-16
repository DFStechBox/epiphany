/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        heroPattern: "url('/src/assets/images/wildflowers.jpg')",
      },
    },

  },

  plugins: [],

  colors: {
    bgYellow: "#FFFDF4",
  },
};

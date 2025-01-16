/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        heroPattern: "url('/src/assets/images/wildflowers.jpg')",
      },
    },

    screens: {
      // => @media (min-width: 480px and max-width: 639px) { ... }
      xs: { min: "480px", max: "639px" },      
    },
  },

  plugins: [],

  colors: {
    bgYellow: "#FFFDF4",
  },
};

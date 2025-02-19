/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   heroPattern: "url('/src/assets/images/wildflowers.jpg')",
      // },
      colors: {
        // heroBgYellow: "#FFFDF4",
        heroBgYellow: "#BAC5A4",
        bgYellow: "#FFFCEC",
        bgYellow2: "#F6EDC4",
        HeroComp2Bg: "#FFFFDE",
        blk: "ffffff",
        bgColor1: "#c7ab59",
        bgColor2: "ded2ab",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    // ...
  ],
};

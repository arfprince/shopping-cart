import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
  ],
  theme: {
    container: {
      padding: "20px",
      center:true,
    },
    extend: {}
  },
  plugins: [
    daisyui,
  ],
}


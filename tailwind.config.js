/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2F80ED",

          "secondary": "#f3fca1",

          "accent": "#efa2b3",

          "neutral": "#272433",

          "base-100": "#f0eff0",

          "info": "#65cef1",

          "success": "#19a34e",

          "warning": "#dda20e",

          "error": "#f24a74",
        },
      },
    ],
  },
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: ["dark"],
  },

  theme: {
    extend: {
      colors: {
        "dark-orange": "#f23b2f",
      },

      animation: {
        blob: "blob 7s infinite",
        blob_rev: "blob_rev 7s infinite",
        fade: "fade 2s",
        fade_fast: "fade 1s",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: "25%",
          },

          "33%": {
            transform: "translate(30px, -10px) scale(1.1)",
            opacity: "30%",
          },

          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: "20%",
          },

          "100%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: "25%",
          },
        },

        blob_rev: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: "25%",
          },

          "33%": {
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: "20%",
          },

          "66%": {
            transform: "translate(10px, 10px) scale(1.1)",
            opacity: "30%",
          },

          "100%": {
            transform: "translate(0px, 0px) scale(1)",
            opacity: "25%",
          },
        },

        fade: {
          "0%": {
            opacity: "0%",
          },

          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },

  plugins: [require("daisyui")],
};

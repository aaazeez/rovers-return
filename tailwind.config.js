/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        oxblood: {
          DEFAULT: "#5c1a1f",
          dark: "#3e1015",
          light: "#7a2a30",
        },
        forest: {
          DEFAULT: "#1f3a2e",
          dark: "#14261e",
        },
        brass: {
          DEFAULT: "#c9a24b",
          light: "#e0c27a",
          dark: "#9c7a30",
        },
        cream: {
          DEFAULT: "#f4ecdd",
          dark: "#e8ddc6",
        },
        ink: "#241b16",
      },
      fontFamily: {
        signage: ['"Fraunces"', "serif"],
        body: ['"Lora"', "serif"],
      },
      boxShadow: {
        brass: "0 0 0 1px rgba(201,162,75,0.4)",
      },
    },
  },
  plugins: [],
};

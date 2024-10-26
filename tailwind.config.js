/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#f9fafb",
        },
        darkMain: "#030712",
        lightBlue: "#8fc2ed",
        lightPurple: "#ad8cd9",
        white: "#ffffff",
        black: "#000000",
        gray: "#1F2937",
        gray2: "#6B727F",
        lightGray: "#6b7280",
        black2: "#030712",
        darkGray: "#374151",
        black3: "#111827",
        lightGray2: "#e5e7eb",
        lightGray3: "#f3f4f6",
        lightGray4: "#D1D5DB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

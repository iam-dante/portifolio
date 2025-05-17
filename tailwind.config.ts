import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./app/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./internal/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      //sans: ["Poppins", "sans-serif"],
      // sans: ["DM Sans", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
      jet: ["JetBrains Mono", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
export default config

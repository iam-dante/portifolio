import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./components/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./app/**/*.{js,ts,jsx,tsx,mdx, md}",
    "./internal/**/*.{js,ts,jsx,tsx,mdx,md}",
    "./content/**/*.{js,ts,jsx,tsx,mdx,md}",
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
      dsans: ["DM Sans", "sans-serif"],
      libre: ["Libre Baskerville", "serif"],
      sans: ["Montserrat", "sans-serif"],
      fira: ["Fira Mono", "monospace"],
      jet: ["JetBrains Mono", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    typography: (theme: any) => ({
      DEFAULT: {
        css: {
          color: theme("colors.gray.300"),
          a: {
            color: theme("colors.blue.400"),
            "&:hover": {
              color: theme("colors.blue.300"),
            },
          },
          h1: {
            color: theme("colors.white"),
          },
          h2: {
            color: theme("colors.white"),
          },
          h3: {
            color: theme("colors.white"),
          },
          h4: {
            color: theme("colors.white"),
          },
          code: {
            color: theme("colors.gray.200"),
            backgroundColor: theme("colors.gray.800"),
          },
          "code::before": {
            content: '""',
          },
          "code::after": {
            content: '""',
          },
          blockquote: {
            color: theme("colors.gray.400"),
            borderLeftColor: theme("colors.gray.700"),
          },
          hr: {
            borderColor: theme("colors.gray.700"),
          },
          ol: {
            color: theme("colors.gray.300"),
          },
          ul: {
            color: theme("colors.gray.300"),
          },
          strong: {
            color: theme("colors.white"),
          },
          thead: {
            color: theme("colors.white"),
            borderBottomColor: theme("colors.gray.700"),
          },
          tbody: {
            tr: {
              borderBottomColor: theme("colors.gray.700"),
            },
          },
        },
      },
    }),
  },

  plugins: [require("@tailwindcss/typography")],
};
export default config

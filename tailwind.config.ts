import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "primary-muted": "var(--color-primary-muted)",
        "secondary-muted": "var(--color-secondary-muted)",
        light: {
          primary: "var(--color-light-primary)",
          secondary: "var(--color-light-secondary)",
          muted: "var(--color-light-muted)",
        },
        dark: {
          primary: "var(--color-dark-primary)",
          secondary: "var(--color-dark-secondary)",
          muted: "var(--color-dark-muted)",
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s 0.1s forwards",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};

export default config;

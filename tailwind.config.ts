import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF9F3",
        beige: "#F5F5DC",
        sand: "#E8DFC9",
        teal: "#008080",
        "teal-dark": "#075F60",
        ink: "#171717",
        muted: "#6F7775",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        shell: "1460px",
      },
      transitionTimingFunction: {
        forge: "cubic-bezier(.19,1,.22,1)",
      },
    },
  },
  plugins: [],
};

export default config;

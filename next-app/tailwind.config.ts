import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#f6c1d5",
          blush: "#f3aac6",
          rose: "#e45e91",
          wine: "#511936",
          cream: "#f9f5f2"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(0,0,0,0.2)",
        glass: "0 20px 50px rgba(80, 20, 60, 0.12)"
      }
    }
  },
  plugins: [animate]
};

export default config;

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#09090B",
        cosmic: "#2A1342",
        nebula: "#3D1A5B",
        teal: "#4FFFD4",
        lavender: "#C18CFF",
        cloud: "#F6F6F8",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Inter Tight", "Space Grotesk", ...fontFamily.sans],
      },
      boxShadow: {
        glow: "0 0 30px rgba(79,255,212,0.35)",
      },
      backgroundImage: {
        cosmicGradient:
          "linear-gradient(to bottom right, #2A1342, #3D1A5B 50%, #09090B)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(79,255,212,0)" },
          "50%": { boxShadow: "0 0 40px rgba(79,255,212,0.4)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        drift: "drift 60s linear infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-bebe": "#A8D8F0",
        "azul-profundo": "#4A90C2",
        "branco-nuvem": "#FDFCFA",
        "rosa-suave": "#FFD6E0",
        "amarelo-sol": "#FFE5A0",
        "verde-menta": "#B8E6D1",
        "lilas-calmo": "#DCD0F0",
        "coral-quente": "#FF8B7D",
        "cinza-cuidado": "#6B6B6B",
        "cinza-suave": "#E8E8E8",
      },
      fontFamily: {
        hero: ["var(--font-fredoka)", "sans-serif"],
        display: ["var(--font-quicksand)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        pill: "100px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(74, 144, 194, 0.1)",
        "soft-lg": "0 8px 32px rgba(74, 144, 194, 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;

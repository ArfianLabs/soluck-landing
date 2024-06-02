import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "soluck-turquoise": "#01E1E9",
      },
      dropShadow: {
        glow: [
          "0 0px 60px rgba(1,255, 233, 1)",
          "0 0px 95px rgba(1, 225,233,1)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;

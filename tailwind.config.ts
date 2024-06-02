import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content : {
        "ellipse-hero": "url('/color-eclipse.png')",
        "frame": "url('/frame.png')"
      },
      colors:{
        'color-primary' : "#FF5555"
      },
      backgroundImage: (theme) => ({
        'line-gradient' : "linear-gradient(86deg, rgba(255,255,255,1) 7%, rgba(105,105,105,0.8407738095238095) 52%, rgba(255,255,255,1) 96%)"
      })
    },
  },
  plugins: [],
};
export default config;

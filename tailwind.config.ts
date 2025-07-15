import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        customPink: "#E94DCC",
        customBlue:"#00f9ff",
        customGreen:"#00ffC2",
        customPurple:"#6A00FF",
        customGray:"#7C7C7C"
      },
    },
  },
  plugins: [],
} satisfies Config;

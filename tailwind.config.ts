import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        teal: "#00D1C7",
        orange: "#FF7A1A",
        bg: "#0B0F1A",
        card: "#131A2C",
        text: "#E6F1F5",
        muted: "#93A7B3"
      },
      borderRadius: {
        '2xl': '1rem',
      }
    }
  },
  plugins: [],
} satisfies Config

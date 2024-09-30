/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryMuted: "var(--primary-muted)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        background: "var(--background)",
        backgroundMuted: "var(--background-muted)",
        foreground: "var(--foreground)",
        foregroundMuted: "var(--foreground-muted)",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};

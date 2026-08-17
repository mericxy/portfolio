/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "var(--content-max-width)",
        wide: "var(--wide-content-max-width)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        alert: 'rgb(var(--alert) / <alpha-value>)',
        disable: 'rgb(var(--disable) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
      },

      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        alert: 'rgb(var(--alert) / <alpha-value>)',
        disable: 'rgb(var(--disable) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
      },

      fill: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        content: 'var(--content)',
        line:'var(--line)'
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },

      fontFamily: {
        regular: "Roboto-regular",
        thick: "Roboto-medium",
        thicker: "Roboto-bold"
      },

      keyframes: {
        rotate: {
          "100%": {transform:"rotate(360deg)"}
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      animation: {
        rotate: "rotate 2s linear infinite",
        loading: "loading 1.5s ease-in infinite"
      }

    },
  },
  plugins: [],
}


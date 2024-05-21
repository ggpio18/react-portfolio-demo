/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      ph:"360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        // dashboard
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        alert: 'rgb(var(--alert) / <alpha-value>)',
        disable: 'rgb(var(--disable) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        // portfolio ui
        portprimary: 'rgb(var(--portprimary)/ <alpha-value>)',
        portprimary2: 'rgb(var(--portprimary2) / <alpha-value>)',
        portsecondary: 'rgb(var(--portsecondary) / <alpha-value>)',
        portaccent: 'rgb(var(--portaccent) / <alpha-value>)',
        portaccent2: 'rgb(var(--portaccent2) / <alpha-value>)',
        portheader: 'rgb(var(--portheader) / <alpha-value>)',
        porthaccent: 'rgb(var(--porthaccent) / <alpha-value>)',
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
        thicker: "Roboto-bold",
        regularui: "Inter-Regular",
        light: "Inter-Light",
        medium: "Inter-Medium",
        thicker2: "Inter-Bold"
      },

      keyframes: {
        rotate: {
          "100%": {transform:"rotate(360deg)"}
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },

        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },

      animation: {
        rotate: "rotate 2s linear infinite",
        loading: "loading 1.5s ease-in infinite",
        // ui
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s'
      }

    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}


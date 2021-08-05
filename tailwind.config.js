module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: 15,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#05f",
        },
        success: {
          DEFAULT: "#00e676",
          dark: "#05c367",
        },
        light: {
          DEFAULT: "hsla(0,0%,100%,1)",
          100: "hsla(0,0%,100%,.1)",
          200: "hsla(0,0%,100%,.2)",
          300: "hsla(0,0%,100%,.3)",
          400: "hsla(0,0%,100%,.4)",
          500: "hsla(0,0%,100%,.5)",
          600: "hsla(0,0%,100%,.6)",
          700: "hsla(0,0%,100%,.7)",
          800: "hsla(0,0%,100%,.8)",
          900: "hsla(0,0%,100%,.9)",
        },
        dark: {
          DEFAULT: "hsla(0,0%,0%,1)",
          100: "hsla(0,0%,0%,.1)",
          200: "hsla(0,0%,0%,.2)",
          300: "hsla(0,0%,0%,.3)",
          400: "hsla(0,0%,0%,.4)",
          500: "hsla(0,0%,0%,.5)",
          600: "hsla(0,0%,0%,.6)",
          700: "hsla(0,0%,0%,.7)",
          800: "hsla(0,0%,0%,.8)",
          900: "hsla(0,0%,0%,.9)",
        },
      },
      backgroundImage: (theme) => ({
        display: "url('/images/display-bg.jpeg')",
      }),
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      spacing: {
        17: "4.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

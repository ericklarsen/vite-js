module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        loading: {
          "0%": { "background-color": "#434343" },
          "50%": { "background-color": "#353535" },
          "100%": { "background-color": "#434343" },
        },
        "bottomsheet-in": {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0)" },
        },
        "bottomsheet-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 350ms ease-in-out",
        "fade-out": "fade-out 550ms ease-in-out",
        loading: "loading 1s infinite",
        "bottomsheet-in": "bottomsheet-in 0.55s cubic-bezier(0.85,0.01,0.25,1)",
        "bottomsheet-out": "bottomsheet-out 0.55s cubic-bezier(0.85,0.01,0.25,1)",
        "spin-slow": "spin 6s linear infinite",
      },
      zIndex: {
        100: 100,
        "-1": -1,
      },
      height: {
        "fit-content": "fit-content",
      },
      width: {
        "side-nav": "276px",
        "content-field": "calc(100vw - 276px)",
      },
      colors: {
        black: {
          800: "#1F1F1F",
          700: "#333333",
          600: "#545454",
          500: "#757575",
          400: "#AFAFAF",
          300: "#E2E2E2",
          200: "#EEEEEE",
          100: "#f7f7f7",
        },
        yellow: {
          800: "#674D1B",
          700: "#997328",
          600: "#BC8B2",
          500: "#FFC043",
          400: "#FFCF70",
          300: "#FFF2D9",
          200: "#FFFAF0",
        },
        green: {
          800: "#10462D",
          700: "#156A41",
          600: "#09864A",
          500: "#05A357",
          400: "#06C167",
          300: "#66D19E",
          200: "#ADDEC9",
        },
        red: {
          800: "#5A0A00",
          700: "#870F00",
          600: "#AB1300",
          500: "#E11900",
          400: "#E85C4A",
          300: "#F1998E",
          200: "#FED7D2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

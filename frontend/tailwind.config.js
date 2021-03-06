const { colors, fontFamily } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '2px 2px 0px #00457C;',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    extend: {
      gap: {
        '11': '1.875rem',
       },
      colors: {
        primary: '#000',
        secondary: '#fff',
        default: '#f7f7f8',
        grey: '#666666',
        dark: '#1D1D1F',
        1:'rgba(126,219,220,.3)',
        2:'rgba(228,175,203,.3) 11.65%',
        3:'rgba(226,194,139,.3) 20.18%',
        4:'hsla(0,0%,100%,.1)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1020px",
    },
    variants: {
      extend: {
      fill: ['hover', 'focus'],
      gridColumn: ['first'],
      filter: ['hover'],
      backdropBrightness: ['hover'],
    },
  },
  },
  plugins: [require("@tailwindcss/typography")],
};

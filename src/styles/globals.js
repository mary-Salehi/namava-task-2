import { createUseStyles } from "react-jss";

export const useGlobalStyles = createUseStyles((theme) => ({
  "@global": {
    "@font-face": [
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebthin.woff') format('woff')`,
        fontWeight: "100",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanweblight.woff') format('woff')`,
        fontWeight: "300",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebregular.woff') format('woff')`,
        fontWeight: "400",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebmedium.woff') format('woff')`,
        fontWeight: "500",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebbold.woff') format('woff')`,
        fontWeight: "700",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebextrabold.woff') format('woff')`,
        fontWeight: "800",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebblack.woff') format('woff')`,
        fontWeight: "900",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        fontFamily: "iranyekan",
        src: `url('/src/assets/fonts/iranyekanwebextrablack.woff') format('woff')`,
        fontWeight: "950",
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],

    html: {
      scrollBehavior: "smooth",
    },

    body: {
      backgroundColor: theme.colors.black,
      color: theme.colors.white,
      direction: "rtl",
      fontFamily: theme.fonts.main,
      lineHeight: '24px',

      [theme.mq(theme.breakpoints.desktop)]: {
        lineHeight: "28px",
      },
    },

    ".container": {
      margin: "0 auto",
      padding: "24px 32px",
      width: "100%",
      height: "100vh",

      [theme.mq(theme.breakpoints.desktop)]: {
        padding: "24px 42px",
      },
    },

    ".mainContent": {
      display: 'grid'
    },

    "*, *::before, *::after": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },

    "ul, ol": {
      listStyle: "none",
    },

    a: {
      textDecoration: "none",
      color: "inherit",
    },

    "button, input": {
      fontFamily: theme.fonts.main,
      outline: "none",
      border: "none",
      background: "none",
      appearance: "none",
    },
  },
}));

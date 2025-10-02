const mq = (min) => `@media (min-width: ${min}px)`;

export const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray1: "#f2f2f2",
    gray2: "#cccccc",
    gray3: "#aaaaaa",
    gray4: "#666666",
    gray5: "#37383e",
    gray8: "#121212",
    red: "#d95c5c",
    blue: "#6eb8ff",
  },
  breakpoints: {
    tablet: "800",
    desktop: "1280",
  },
  fonts: {
    main: "iranyekan, sans-serif",
  },

  mq,
};
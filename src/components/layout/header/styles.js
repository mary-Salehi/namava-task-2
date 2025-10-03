import { theme } from "../../../styles/theme";

export const headerStyles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
    transform: ({ isHeaderFixed }) =>
      isHeaderFixed ? "translateY(0)" : "translateY(-100%)",
    transition: "all 0.5s ease",
    background: theme.colors.gray8,
    display: "flex",
    alignItems: "strech",
    justifyContent: "space-between",
    padding: "15px 24px 15px 32px",
    fontSize: "12px",
    [theme.mq(theme.breakpoints.desktop)]: {
      padding: "20px 42px",
    },
  },

  navContent: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  navLogo: {
    display: "flex",
    [theme.mq(theme.breakpoints.desktop)]: {
      width: "64px",
      height: "auto",
    },
  },

  navList: {
    color: theme.colors.white,
    display: "flex",
    gap: "18px",

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "32px",
    },
    height: "100%",
  },

  navLink: {
    "&:hover": {
      color: theme.colors.blue,
    },
    display: "inline-block",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  userProfile: {
    borderRadius: "100%",

    "& img": {
      width: "100%",
    },
  },

  headerIcon: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "30px",
    height: "30px",

    [theme.mq(theme.breakpoints.desktop)]: {
      width: "40px",
      height: "40px",
    },
  },
};

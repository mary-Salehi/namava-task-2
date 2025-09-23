import { theme } from "../../styles/theme";

export const movieCardStyles = {
  cardWrapper: {
    fontSize: "12px",
    cursor: "pointer",
  },

  imageCard: {
    position: "relative",
    width: "136px",
    height: "200px",
    borderRadius: "4px",
    marginBottom: "8px",

    [theme.mq(theme.breakpoints.desktop)]: {
      width: "157px",
      height: "231px",
    },

    "&:hover $overlay": {
      opacity: 1,
    },
  },

  overlay: {
    opacity: 0,
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5))",
    transition: "opacity 0.5s ease-in-out",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "20px",
    right: "15px",
    lineHeight: "normal",
    gap: "10px",
  },
};

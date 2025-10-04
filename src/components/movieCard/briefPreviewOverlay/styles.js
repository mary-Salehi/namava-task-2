import { createUseStyles } from "react-jss";
import { theme } from "../../../styles/theme";

const styles = {
  overlay: {
    opacity: ({ isHovered }) => (isHovered ? 1 : 0),
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4))",
    transition: "opacity 0.5s ease-in-out",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "25px",
    right: "10px",
    lineHeight: "normal",
    gap: "10px",
  },

  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "4px",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fill: theme.colors.white,
    color: theme.colors.white,
  },
};

export const useStyles = createUseStyles(styles);
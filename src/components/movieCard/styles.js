import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  cardWrapper: {
    fontSize: "12px",
    cursor: "pointer",
  },

  imageCard: {
    position: "relative",
    borderRadius: "4px",
    marginBottom: "8px",
    overflow: "hidden",
    background: theme.colors.gray5,
    aspectRatio: "2/3",

    "&:hover $overlay": {
      opacity: 1,
    },
  },

  overlay: {
    opacity: 0,
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4))",
    transition: "opacity 0.5s ease-in",
    pointerEvents: "none",
  },

  movieImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export const useStyles = createUseStyles(styles);
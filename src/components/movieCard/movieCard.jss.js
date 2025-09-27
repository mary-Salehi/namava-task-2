import { theme } from "../../styles/theme";

export const movieCardStyles = {
  cardWrapper: {
    fontSize: "12px",
    cursor: "pointer",
  },

  imageCard: {
    position: "relative",
    borderRadius: "4px",
    marginBottom: "8px",
    overflow: 'hidden',
    background: theme.colors.gray5,
    aspectRatio: "2/3",

    "&:hover $overlay": {
      opacity: 1,
    },
  },

  movieImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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

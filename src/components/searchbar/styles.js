import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const searchbarStyles = {
  searchContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    height: "60px",
    padding: "0 16px",
    borderRadius: "5px",
    backgroundColor: theme.colors.gray5,

    "&:focus-within": {
      backgroundColor: theme.colors.white,

      "& $icon": {
        color: theme.colors.gray3,
      },
    },
  },

  searchInput: {
    width: "100%",
    display: "inline-block",
    padding: "16px 12px",
    color: theme.colors.white,

    "&:focus": {
      color: theme.colors.black,

      "&::placeholder": {
        color: theme.colors.black,
      },
    },
  },

  icon: {
    display: "flex",
    alignItems: "center",
    color: theme.colors.gray3,
  },

  clearSearchIcon: {
    cursor: "pointer",
  },
};

export const useStyles = createUseStyles(searchbarStyles);

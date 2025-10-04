import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  browseContainer: {
    height: "auto",
    display: "flex",
    gap: "20px",
    position: "relative",

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "40px",
    },
  },

  SearchResolver: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginRight: "300px",
    overflowY: "auto",

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "40px",
      marginRight: "347px",
    },
  },

  emptyState: {
    margin: "56px auto 0",
    [theme.mq(theme.breakpoints.desktop)]: {
      marginTop: "40px",
    },
  },
};

export const useStyles = createUseStyles(styles);
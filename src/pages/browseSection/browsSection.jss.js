import { theme } from "../../styles/theme";

export const browseStyles = {
  browseContainer: {
    height: "100%",
    display: "flex",
    gap: "20px",
    alignItems: 'flex-start',

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "40px",
    },
  },

  SearchResolver: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "40px",
    },
  },

  filters: {
    position: "sticky",
    top: "120px",
    height: "fit-content",
    alignSelf: "start",
  },

};

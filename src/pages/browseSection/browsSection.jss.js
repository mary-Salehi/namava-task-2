import { theme } from "../../styles/theme";

export const browseStyles = {
  browseContainer: {
    height: "100%",
    display: "flex",
    gap: "20px",
    alignItems: 'flex-start',
    position: 'relative',

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "40px",
    },
  },

  SearchResolver: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    marginRight: '300px',

    [theme.mq(theme.breakpoints.desktop)]: {
      gap: "40px",
      marginRight: '347px',
    },
  },

};

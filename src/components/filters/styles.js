import { createUseStyles } from "react-jss";
import { theme } from "../../styles/theme";

const styles = {
  filterSection: {
    padding: "16px 24px",
    backgroundColor: theme.colors.gray5,
    borderRadius: "5px",
    width: "280px",
    position: "fixed",
    top: "104px",
    alignSelf: "flex-start",
    overflowY: "auto",

    [theme.mq(theme.breakpoints.desktop)]: {
      width: "307px",
    },
  },

  filterHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "16px",
    marginBottom: "4px",
  },

  deleteAllBtn: {
    color: theme.colors.gray3,
    fontSize: "12px",
    cursor: "pointer",

    [theme.mq(theme.breakpoints.desktop)]: {
      fontSize: "14px",
    },
  },

  filterAccordion: {
    padding: "16px 0",
    fontSize: "14px",

    "&:not(:last-child)": {
      borderBottom: `1px ${theme.colors.gray4}  solid`,
    },
  },

  filterAccordionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  filterAccordionContent: {
    display: "flex",
    gap: "16px",
    maxHeight: "0",
    overflow: "hidden",
    transition: "max-height 0.2s ease , padding-top 0.2s ease",
  },

  accordionOpen: {
    paddingTop: "16px",
    maxHeight: '600px',
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  flexCol: {
    flexDirection: "column",
  },

  optionContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",

    "& input": {
      display: "inline-block",
      width: "16px",
      height: "16px",
      backgroundColor: "transparent",
      border: `1px ${theme.colors.gray4} solid`,
      borderRadius: "4px",
    },

    '& input[type="radio"]': {
      width: "15px",
      height: "15px",
      borderRadius: "100%",
      borderColor: theme.colors.white,
    },
  },

  chevronIcon: {
    fill: theme.colors.white,
  },
};

export const useStyles = createUseStyles(styles);

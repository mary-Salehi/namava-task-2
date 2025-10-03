import { createUseStyles } from "react-jss";
import { theme } from "../../../styles/theme";

const styles = {
  notFound: {
      width: "400px",
      textAlign: "center",
      fontSize: "14px",
      color: theme.colors.gray3,
      margin: '0 auto',
    },
}

export const useStyles = createUseStyles(styles);
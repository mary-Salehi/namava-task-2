import NotFoundIcon from "../../icons/NotFoundIcon";
import { useStyles } from "./styles";

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.notFound}>
      <NotFoundIcon/>
      <div>موردی یافت نشد.</div>
    </div>
  );
}

export default NotFound;

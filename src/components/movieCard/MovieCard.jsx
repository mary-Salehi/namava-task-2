import { createUseStyles } from "react-jss";
import { movieCardStyles } from "./movieCard.jss";

const useStyles = createUseStyles(movieCardStyles);

function MovieCard() {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imageCard}>
        <div className={classes.overlay}>
          <div className={classes.info}>
            <div><span>فیلم</span>
            <span>2022</span>
            </div>
            <div>زیرنویس</div>
          </div>
        </div>
        <img className={classes.movieImage} src="" alt="" />
      </div>
      <div>اسم فیلم</div>
    </div>
  );
}

export default MovieCard;

import { createUseStyles } from "react-jss";
import { movieCardStyles } from "./movieCard.jss";

const useStyles = createUseStyles(movieCardStyles);

function MovieCard({movie}) {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.imageCard}>
        <div className={classes.overlay}>
          <div className={classes.info}>
            <div>
              <span>فیلم</span>
              <span>2022</span>
            </div>
            <div>
              {movie.name}
            </div>
            <div>زیرنویس</div>
          </div>
        </div>
        <img className={classes.movieImage} src={movie.image_url} alt="" />
      </div>
      <div>{movie.name}</div>
    </div>
  );
}

export default MovieCard;

import { useStyles } from "./styles";
import { useCallback, useState } from "react";
import { useMoviePreview } from "../../hooks/useMoviePreview";
import { useDebounce } from "../../hooks/useDebounce";
import BriefPreview from "./briefPreviewOverlay";


function MovieCard({ movie }) {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const debouncedHover = useDebounce(isHovered, 300);
  const { briefPreview } = useMoviePreview(movie.id, debouncedHover);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className={classes.cardWrapper}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={classes.imageCard}
      >
        {briefPreview && (
            <BriefPreview movie={movie} briefPreview={briefPreview} isHovered={isHovered}/>
        )}
        <img className={classes.movieImage} src={movie.image_url} alt="" />
      </div>
      <div>{movie.name}</div>
    </div>
  );
}

export default MovieCard;

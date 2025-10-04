import { useStyles } from "./styles";
import { useCallback, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import BriefPreview from "./briefPreviewOverlay";
import { useMediaPreview } from "../../hooks/useMediaPreview";

function MovieCard({ movie }) {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const debouncedHover = useDebounce(isHovered, 300);
  const { briefPreview } = useMediaPreview(movie.id, debouncedHover);

  // const { data: briefPreview } = useFetch(
  //   debouncedHover ? `v1.0/medias/${movie.id}/brief-preview` : null,
  //   {},
  //   false
  // );

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
          <BriefPreview
            movie={movie}
            briefPreview={briefPreview}
            isHovered={isHovered}
          />
        )}
        <img className={classes.movieImage} src={movie.image_url} alt="" />
      </div>
      <div>{movie.name}</div>
    </div>
  );
}

export default MovieCard;

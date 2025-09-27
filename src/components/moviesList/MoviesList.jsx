import { createUseStyles } from "react-jss";
import MovieCard from "../movieCard/MovieCard";
import { moviesListStyles } from "./moviesList.jss";
import { useCallback, useEffect, useRef } from "react";

const useStyles = createUseStyles(moviesListStyles);

function MoviesList({ data, isLoading, hasMore, loadMore }) {
  const classes = useStyles();
  const observer = useRef(null);

  const lastItemRefCallback = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      if (!node) return;

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !isLoading) {
            loadMore();
          }
        },
        {
          rootMargin: "100px",
          threshold: 0.1,
        }
      );

      observer.current.observe(node);
    },
    [isLoading, hasMore, loadMore]
  );

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={classes.moviesList}>
      {data?.map((movie, index) => {
        const isLastCard = index === data.length - 1;

        return (
          <div ref={isLastCard ? lastItemRefCallback : null} key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
}

export default MoviesList;

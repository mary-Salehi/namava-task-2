import { createUseStyles } from "react-jss";
import MovieCard from "../movieCard/MovieCard"
import { moviesListStyles } from "./moviesList.jss";

const useStyles = createUseStyles(moviesListStyles)

function MoviesList({data}) {
  const classes = useStyles();
  return (
    <div className={classes.moviesList}>
      {
        data?.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))
      }
    </div>
  )
}

export default MoviesList
import Filters from "../../components/filters";
import SearchBar from "../../components/searchbar";
import { useStyles } from "./styles";
import MoviesList from "../../components/moviesList";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import EmptyState from "../../components/ui/emptyState";
import NotFound from "../../components/ui/notFound";
import Loader from "../../components/ui/loader";
import useFetchSearchData from "../../hooks/useFetchSearchData";

function Search() {
  const classes = useStyles();
  const [checkedBoxes, setCheckedBoxes] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const savedType = searchParams.get("type") || "";

  useEffect(() => {
    const initialCheckedBoxes = {};

    if (savedType === "all") {
      initialCheckedBoxes.movie = true;
      initialCheckedBoxes.series = true;
    } else if (savedType === "movie" || savedType === "series") {
      initialCheckedBoxes[savedType] = true;
    }

    setCheckedBoxes(initialCheckedBoxes);
  }, []);

  const getContentType = useCallback(() => {
    const activeFilters = Object.entries(checkedBoxes).filter(
      ([key, value]) => value
    );

    let type;

    if (activeFilters.length === 2) {
      type = "all";
    } else if (activeFilters.length === 1) {
      type = activeFilters[0][0];
    }
    return type;
  }, [checkedBoxes]);

  let type = getContentType();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const queries = useMemo(() => {
    const params = {};

    if (debouncedSearchQuery) {
      params.query = debouncedSearchQuery;
    }

    if (type) {
      params.type = type;
    }

    return params;
  }, [debouncedSearchQuery, type]);

  useEffect(() => {
    setSearchParams(queries);
  }, [queries.query, queries.type]);

  const { data, error, isLoading, hasMore, loadMore } =
    useFetchSearchData(queries);

  const hasNoSearchData =
    !isLoading && !error && data && data.length === 0 && searchQuery;

  return (
    <div className={classes.browseContainer}>
      <Filters checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} />
      <div className={classes.SearchResolver}>
        <SearchBar
          type={type}
          queries={queries}
          className={classes.searchBar}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
        />
        {isLoading && searchQuery && !data?.length && <Loader />}
        {!isLoading && !searchQuery && !data?.length && (
          <EmptyState className={classes.emptyState} />
        )}
        {hasNoSearchData && <NotFound />}
        <MoviesList
          data={data}
          isLoading={isLoading}
          hasMore={hasMore}
          loadMore={loadMore}
        />
      </div>
    </div>
  );
}

export default Search;

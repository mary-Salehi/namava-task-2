import Filters from "../../components/filters";
import SearchBar from "../../components/searchbar";
import { useStyles } from "./styles";
import MoviesList from "../../components/moviesList";
import { useFetch } from "../../hooks/useFetch";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import EmptyState from "../../components/ui/emptyState";
import NotFound from "../../components/ui/notFound";
import Loader from "../../components/ui/loader";

function Search() {
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );
  const [checkedBoxes, setCheckedBoxes] = useState({});

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

  const type = getContentType();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const queries = useMemo(() => {
    const params = {
      query: debouncedSearchQuery,
    };

    if (type) {
      params.type = type;
    }

    return params;
  }, [debouncedSearchQuery, type]);

  const { data, error, isLoading, hasMore, loadMore } = useFetch(
    searchQuery ? "v5.0/search/advance" : [],
    queries,
    true
  );
  console.log("search page data", data);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setSearchParams(queries);
    } else {
      setSearchParams({});
    }
  }, [queries, setSearchParams, debouncedSearchQuery, type]);

  const hasNoSearchData =
    !isLoading && !error && data && data.length === 0 && searchQuery;

  return (
    <div className={classes.browseContainer}>
      <Filters checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} />
      <div className={classes.SearchResolver}>
        <SearchBar
          className={classes.searchBar}
          setSearchQuery={setSearchQuery}
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

import Filters from "../../components/filters";
import SearchBar from "../../components/searchbar";
import { useStyles } from "./styles";
import MoviesList from "../../components/moviesList";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EmptyState from "../../components/ui/emptyState";
import NotFound from "../../components/ui/notFound";
import Loader from "../../components/ui/loader";
import useFetchSearchData from "../../hooks/useFetchSearchData";
import { useDebounce } from "../../hooks/useDebounce";

function Search() {
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const savedType = searchParams.get("type") || "";
  const [checkedBoxes, setCheckedBoxes] = useState(() => {
    const initial = {};
    if (savedType === "all") {
      initial.movie = true;
      initial.series = true;
    } else if (savedType === "movie" || savedType === "series") {
      initial[savedType] = true;
    }
    return initial;
  });

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

  // const queries = useMemo(() => {
  //   const params = {};

  //   if (debouncedSearchQuery) {
  //     params.query = debouncedSearchQuery;
  //   }

  //   if (type) {
  //     params.type = type;
  //   }

  //   return params;
  // }, [debouncedSearchQuery, type]);

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
    const currentParams = Object.fromEntries([...searchParams]);
    if (JSON.stringify(currentParams) !== JSON.stringify(queries)) {
      setSearchParams(queries);
    }
  }, [queries.query, queries.type]);

  const { data, setData, error, isLoading, hasMore, loadMore, hasFetched } =
    useFetchSearchData(queries);

  const hasNoSearchData = !error && !data && searchQuery && isLoading;
  // const hasNoData = hasFetched && !isLoading && searchQuery && data?.length === 0;

  return (
    <div className={classes.browseContainer}>
      <Filters checkedBoxes={checkedBoxes} setCheckedBoxes={setCheckedBoxes} />
      <div className={classes.SearchResolver}>
        <SearchBar
          className={classes.searchBar}
          setData={setData}
          type={type}
          setSearchParams={setSearchParams}
          searchQuery={searchQuery}
        />

        {searchQuery && !data?.length && isLoading && <Loader />}
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

import { createUseStyles } from "react-jss";
import Filters from "../../components/filters/Filters";
import SearchBar from "../../components/searchbar/SearchBar";
import { browseStyles } from "./browsSection.jss";
import MoviesList from "../../components/moviesList/MoviesList";
import { useFetch } from "../../hooks/useFetch";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const useStyles = createUseStyles(browseStyles);

function BrowseSection() {
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

  const { data, isLoading, hasMore, loadMore } = useFetch(
    "v5.0/search/advance",
    queries
  );

  useEffect(() => {
    if (debouncedSearchQuery) {
      setSearchParams(queries);
    } else {
      setSearchParams({});
    }
  }, [queries, setSearchParams, debouncedSearchQuery, type]);

  return (
    <div className={classes.browseContainer}>
        <Filters
          checkedBoxes={checkedBoxes}
          setCheckedBoxes={setCheckedBoxes}
        />
      <div className={classes.SearchResolver}>
        <SearchBar
          className={classes.searchBar}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
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

export default BrowseSection;

import { useStyles } from "./styles";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import SearchIcon from "../icons/SearchIcon";

function SearchBar({
  setSearchParams,
  searchQuery,
  type,
  setData,
}) {
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleValueChange = (e) => {
    const newQuery = e.target.value;
    if (!newQuery) {
      setData([]);
    }
    const params = {};
    params.query = newQuery;
    if (type) {
      params.type = type;
    }
    setSearchParams(params);
  };

  const handleClearSearch = (e) => {
    e.preventDefault();
    setData([]);
    const params = {};
    if (type) {
      params.type = type;
    }
    setSearchParams(params);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={classes.searchContainer}>
      <SearchIcon className={classes.icon} />
      <input
        ref={inputRef}
        value={searchQuery}
        onChange={handleValueChange}
        className={classes.searchInput}
        type="search"
        placeholder="فیلم، سریال، بازیگر و ژانر"
      />
      {searchQuery && (
        <DeleteIcon
          onClick={handleClearSearch}
          className={classNames(classes.icon, classes.clearSearchIcon)}
        />
      )}
    </div>
  );
}

export default SearchBar;

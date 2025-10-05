import { useStyles } from "./styles";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import SearchIcon from "../icons/SearchIcon";

function SearchBar({ setSearchParams, searchQuery, type }) {
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleValueChange = (e) => {
    const newQuery = e.target.value;
    const params = {};
    if (newQuery) {
      params.query = newQuery;
    }

    if (type) {
      params.type = type;
    }

    setSearchParams(params);
    console.log('after value change params are',params);
    
  };

  const handleClearSearch = (e) => {
    e.preventDefault();

    const params = {};
    if (type) {
      params.type = type;
    }
    setSearchParams(params);
        console.log('after clear search params are',params);
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

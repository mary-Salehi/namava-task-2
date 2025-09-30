import { createUseStyles } from "react-jss";
import { searchbarStyles } from "./styles";
import classNames from "classnames";
import { useEffect, useRef } from "react";

const useStyles = createUseStyles(searchbarStyles);

function SearchBar({setSearchQuery , searchQuery}) {
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleValueChange = (e) => {
    setSearchQuery(e.target.value)    
  };

  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
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
      <span>
        <svg
          className={classes.icon}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.2243 7.65212C19.6529 5.82772 17.3873 4.74645 14.9798 4.67189C14.8797 4.66838 14.7795 4.66663 14.6794 4.66663C12.3812 4.66777 10.1769 5.57801 8.54818 7.19843C5.73361 10.0057 5.19599 14.3689 7.24499 17.7747C7.6306 18.4083 7.53496 19.223 7.01308 19.7501L3.77882 22.9819C3.59633 23.1664 3.49588 23.4165 3.50013 23.6759C3.49961 23.9009 3.59099 24.1164 3.75313 24.2725C4.09888 24.5827 4.62532 24.5747 4.96144 24.2541L8.23919 20.9775C8.75498 20.4546 9.56166 20.3521 10.192 20.7293C11.5439 21.5448 13.0931 21.9754 14.6721 21.9744C17.1677 21.9737 19.5421 20.8994 21.1894 19.0258C24.0347 15.7728 24.0495 10.9226 21.2243 7.65212ZM19.9567 17.8024C18.6397 19.3503 16.7091 20.2422 14.6761 20.242C12.6436 20.2431 10.713 19.3524 9.39546 17.8057C7.21633 15.2149 7.21633 11.4334 9.39546 8.84263C10.7119 7.29444 12.6419 6.40183 14.6748 6.40103C16.7075 6.39985 18.6383 7.29054 19.956 8.83736C22.1378 11.4291 22.1381 15.2136 19.9567 17.8057V17.8024Z"
            fill="currentColor"
          />
          <mask
            id="mask0_949_567"
            maskUnits="userSpaceOnUse"
            x="3"
            y="4"
            width="21"
            height="21"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.2243 7.65212C19.6529 5.82772 17.3873 4.74645 14.9798 4.67189C14.8797 4.66838 14.7795 4.66663 14.6794 4.66663C12.3812 4.66777 10.1769 5.57801 8.54818 7.19843C5.73361 10.0057 5.19599 14.3689 7.24499 17.7747C7.6306 18.4083 7.53496 19.223 7.01308 19.7501L3.77882 22.9819C3.59633 23.1664 3.49588 23.4165 3.50013 23.6759C3.49961 23.9009 3.59099 24.1164 3.75313 24.2725C4.09888 24.5827 4.62532 24.5747 4.96144 24.2541L8.23919 20.9775C8.75498 20.4546 9.56166 20.3521 10.192 20.7293C11.5439 21.5448 13.0931 21.9754 14.6721 21.9744C17.1677 21.9737 19.5421 20.8994 21.1894 19.0258C24.0347 15.7728 24.0495 10.9226 21.2243 7.65212ZM19.9567 17.8024C18.6397 19.3503 16.7091 20.2422 14.6761 20.242C12.6436 20.2431 10.713 19.3524 9.39546 17.8057C7.21633 15.2149 7.21633 11.4334 9.39546 8.84263C10.7119 7.29444 12.6419 6.40183 14.6748 6.40103C16.7075 6.39985 18.6383 7.29054 19.956 8.83736C22.1378 11.4291 22.1381 15.2136 19.9567 17.8057V17.8024Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_949_567)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28 28H0V0H28V28Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </span>
      <input
        ref={inputRef}
        value={searchQuery}
        onChange={handleValueChange}
        className={classes.searchInput}
        type="search"
        placeholder="فیلم، سریال، بازیگر و ژانر"
      />
      {searchQuery && (
        <span onMouseDown={handleClearSearch}>
          <svg
            className={classNames(classes.icon, classes.clearSearchIcon)}
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.4818 7.28247C20.0913 6.89195 19.4581 6.89195 19.0676 7.28247L14 12.3501L8.9324 7.28247C8.54188 6.89195 7.90871 6.89195 7.51819 7.28247L7.28249 7.51817C6.89196 7.9087 6.89196 8.54186 7.28249 8.93239L12.3501 14L7.28249 19.0676C6.89196 19.4581 6.89196 20.0913 7.28249 20.4818L7.51819 20.7175C7.90871 21.108 8.54188 21.108 8.9324 20.7175L14 15.6499L19.0676 20.7175C19.4581 21.108 20.0913 21.108 20.4818 20.7175L20.7175 20.4818C21.108 20.0913 21.108 19.4581 20.7175 19.0676L15.6499 14L20.7175 8.93239C21.108 8.54186 21.108 7.9087 20.7175 7.51817L20.4818 7.28247Z"
              fill="currentColor"
            />
            <mask
              id="mask0_949_585"
              maskUnits="userSpaceOnUse"
              x="6"
              y="6"
              width="16"
              height="16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4818 7.28247C20.0913 6.89195 19.4581 6.89195 19.0676 7.28247L14 12.3501L8.9324 7.28247C8.54188 6.89195 7.90871 6.89195 7.51819 7.28247L7.28249 7.51817C6.89196 7.9087 6.89196 8.54186 7.28249 8.93239L12.3501 14L7.28249 19.0676C6.89196 19.4581 6.89196 20.0913 7.28249 20.4818L7.51819 20.7175C7.90871 21.108 8.54188 21.108 8.9324 20.7175L14 15.6499L19.0676 20.7175C19.4581 21.108 20.0913 21.108 20.4818 20.7175L20.7175 20.4818C21.108 20.0913 21.108 19.4581 20.7175 19.0676L15.6499 14L20.7175 8.93239C21.108 8.54186 21.108 7.9087 20.7175 7.51817L20.4818 7.28247Z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#mask0_949_585)">
              <rect width="28" height="28" fill="currentColor" />
            </g>
          </svg>
        </span>
      )}
    </div>
  );
}

export default SearchBar;

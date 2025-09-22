import { createUseStyles } from "react-jss";
import Filters from "../../components/filters/Filters";
import SearchBar from "../../components/searchbar/SearchBar";
import { browseStyles } from "./browsSection.jss";

const useStyles = createUseStyles(browseStyles);

function BrowseSection() {
  const classes = useStyles();

  return (
    <div className={classes.browseContainer}>
      <Filters className={classes.filters} />
      <div className={classes.SearchResolver}>
        <SearchBar className={classes.searchBar} />
      </div>
    </div>
  );
}

export default BrowseSection;

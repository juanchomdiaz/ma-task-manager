import SearchIcon from "@svgs/icons/SearchIcon.svg";

import styles from './Search.module.scss';

const Search = () => {
  return (
      <div className={styles.searchWrapper}>
        <SearchIcon />
        {/* <SearchInput /> */}
      </div>
  )
  
};

export default Search;

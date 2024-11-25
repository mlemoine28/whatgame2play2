import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeholder, data }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input type="text" placeholder={placeholder} />
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.dataResult}></div>
    </div>
  );
};

export default SearchBar;

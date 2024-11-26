import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, data }) => {
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  async function fetchAndFormatData(url, formatFunction) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    return formatFunction(data.results);
  }

  const formatList = (
    results //the purpose of this is so that it converts the data into an array with value and label, which is needed for use in dropdown menus!
  ) =>
    results.map((item) => ({
      value: item.id,
      label: item.name,
    }));

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchList([]); // Clear results if search term is empty
      return;
    }

    const url = `https://api.rawg.io/api/games?key=${
      import.meta.env.VITE_REACT_APP_RAWG_API_KEY
    }&search=${searchTerm}`;
    fetchAndFormatData(url, formatList).then(setSearchList);
  }, [searchTerm]); // Re-run effect whenever searchTerm changes

  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.dataResult}>
        {searchList.map((item) => (
          <div key={item.value} className={styles.resultItem}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

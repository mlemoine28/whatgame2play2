import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, game }) => {
  const [searchList, setSearchList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

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
      setIsDropdownVisible(false);
      return;
    }

    if (!isDropdownVisible) {
      return;
    }

    const url = `https://api.rawg.io/api/games?key=${
      import.meta.env.VITE_REACT_APP_RAWG_API_KEY
    }&search=${searchTerm}`;
    fetchAndFormatData(url, formatList).then((results) => {
      setSearchList(results);
      setIsDropdownVisible(true);
    });
  }, [searchTerm, isDropdownVisible]); // Re-run effect whenever searchTerm changes

  const handleGameClick = (game) => {
    setSearchTerm(game.label);
    navigate(`/game/${game.value}`, { state: { game } });
    setIsDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownVisible(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.search} ref={dropdownRef}>
      <div className={styles.searchInputs}>
      <div>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
        />
        
      </div>
      {isDropdownVisible && searchList.length > 0 && (
        <div className={styles.dataResult}>
          {searchList.map((item) => (
            <div
              key={item.value}
              className={styles.resultItem}
              onClick={() => handleGameClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

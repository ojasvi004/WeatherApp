import React, { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [city, setCity] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCity("");
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form className="searchBar" onSubmit={handleSearchSubmit}>
      <span>
        <input
          type="search"
          id="search"
          className="search"
          placeholder="City Name"
          value={city}
          onChange={handleInputChange}
        />
        <label htmlFor="search"></label>
        <button type="submit" className={styles.submitSearch}>
          <span className={styles.text}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </button>
      </span>
    </form>
  );
}

export default Search;

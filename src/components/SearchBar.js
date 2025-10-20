import {useState} from "react";

import styles from "../styles/SearchBar.module.css"

export default function SearchBar({setCityData}) {
  const [searchText, setSearchText] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  async function handleSearch() {

    if (!searchText) {
      alert("Please enter a city name.");
      return;
    }

    try{

      const response = await fetch(`${API_URL}${encodeURIComponent(searchText)}&appid=${API_KEY}&units=metric`);

      if (!response.ok){
        throw new Error("No such city.");
      }

      const data = await response.json();
      setCityData(data.list);
    }

    catch(err){
      alert(err.message);
    }

  }
  return(
    <div className={styles.searchBarContainer}>

      <input
        className={styles.searchBar}
        type={"text"}
        placeholder={"Enter city..."}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <img
        onClick={handleSearch}
        className={styles.searchImg}
        alt = "search"
        src = "/images/search.png"
      />

    </div>
  )
}
import styles from "../styles/searchbar.module.css"
import {useState} from "react";

export default function SearchBar({setCityData}) {
  const [searchText, setSearchText] = useState("");

  async function handleSearch() {

    if (!searchText) {
      alert("Please enter a city name.");
      return;
    }

    try{

      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=d457f9a1531004669ebc5a64b33dcf3c&units=metric`)

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
      <input className={styles.searchBar} type={"text"} placeholder={"Enter city..."}
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
      />
      <img onClick={handleSearch} className={styles.searchImg} alt = "search" src = "/images/search.png"/>
    </div>
  )
}
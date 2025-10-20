import styles from "../styles/forecastcard.module.css"

import SearchBar from "../components/SearchBar"
import {useState} from "react";

export default function ForecastCard() {
  const [cityData, setCityData] = useState();

  return(
    <div className={styles.forecastCardContainer}>
      <SearchBar setCityData={setCityData} />
      {cityData && <div>{cityData[0].main.temp}</div>}
    </div>
  )
}
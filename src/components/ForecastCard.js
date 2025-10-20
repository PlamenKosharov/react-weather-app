import {useState} from "react";

import styles from "../styles/ForecastCard.module.css"

import SearchBar from "../components/SearchBar"
import OneDayForecastCard from "../components/OneDayForecastCard"


export default function ForecastCard() {
  const [cityData, setCityData] = useState([]);


  return(
    <div className={styles.forecastCardContainer}>

      <SearchBar setCityData={setCityData} />

      <div className={styles.fiveDayForecast}>

        {cityData
          .filter((_, index) => index % 8 === 0)
          .map((city, index) => (<OneDayForecastCard data={city} key={index} />))}
      </div>

    </div>
  )
}
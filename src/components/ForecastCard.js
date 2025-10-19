import styles from "../styles/forecastcard.module.css"

import SearchBar from "../components/SearchBar"

export default function ForecastCard() {
  return(
    <div className={styles.forecastCardContainer}>
      <SearchBar />
    </div>
  )
}
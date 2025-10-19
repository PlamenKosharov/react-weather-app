import styles from "../styles/searchbar.module.css"

export default function SearchBar() {
  return(
    <div className={styles.searchBarContainer}>
      <input className={styles.searchBar} type={"text"} placeholder={"Enter city..."}/>
      <img className={styles.searchImg} alt = "search" src = "/images/search.png"/>
    </div>
  )
}
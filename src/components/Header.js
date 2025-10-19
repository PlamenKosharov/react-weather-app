import styles from "../styles/header.module.css"
import {Link} from "react-router-dom";

import Search from "../components/SearchBar";
import SearchBar from "../components/SearchBar";

export default function Header(){
  return(
    <div className={styles.container}>
      <SearchBar></SearchBar>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}
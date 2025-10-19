import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import ForecastCard from "./components/ForecastCard"

import styles from "./styles/general.module.css"


function App() {
  return (
    <div className={styles.app}>
      <ForecastCard/>
    </div>
  );
}

export default App;

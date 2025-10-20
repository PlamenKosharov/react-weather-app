import styles from "../styles/OneDayForecast.module.css"

export default function OneDayForecastCard({data}) {

  let date = data.dt_txt.split(' ')[0]
  date = date.split('-');
  let month = date[1];
  let day = date[2];

  const temp = data.main.feels_like;
  const weatherStatus = data.weather[0].main;

  const weatherImages = {
    "Clear": "/images/sun.png",
    "Clouds": "/images/cloudy.png",
    "Rain": "/images/rain.png"
  }

  const months = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  }

  return(
    <div className={styles.container}>
      <p>{months[month]} {day}</p>
      <img className ={styles.image} src = {weatherImages[weatherStatus]}/>
      <p>{temp}C</p>
    </div>
  )
}
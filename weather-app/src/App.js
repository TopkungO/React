import './App.css';
import React ,{useState} from 'react'
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};
function App() {
  //ดึงข้อมูลวันที่
  const dataBuild=(d)=>{
    let date=String(new window.Date()); //ทำข้อมูลให้เป็นstring
    date=date.slice(3,15);//ตัดข้อความเอาแต่วันที่ Nov 28 2020
    return date;
  }

  //ส่งข้อมูลไป
  const [query,setQuery]=useState("");
  const [weather,setWeather]=useState({});
  
  const search=(e)=>{
    //หากกดปุ่มenter จะส่งข้อมูลไป https://api.openweathermap.org/data/2.5/weather?q=.เมืองที่ค้นหา.
    //&units=metric&appid=a572744e649f701c7e4931c1c1f1d9c3 และแปลงข้อมูลเป็นJSON 
    if(e.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res)=>res.json())
      .then((results)=>{
        setQuery("");
        setWeather(results);
        console.log(results);
      })
    }
  }

  //---------------
  return (
    <div className={
      typeof weather.main !="undefined" ? 
      weather.main.temp >18 ? "App hot" 
      : "App cold" 
      : "App"
    }>
      <main>

        {/* ช่องsearch */}
        <div className="search-container">
          <input type="text" 
          placeholder="Search..."
          className="search-bar"
          onChange={(e)=>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>

        {typeof weather.main !="undefined" ? (
          //ตรวจสอบว่าsetWeather มีข้อมูลไม่ใช่ค่าว่าง ก้จะแสดงข้อมูล
          <div>
            {/* ช่องแสดงที่อยูและวันที่ */}
            <div className="location-container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">
                {dataBuild( new Date() )}
              </div>
            </div>
            
            {/* แสดงอุณหภูมิ */}
            <div className="weather-container">
              <div className="temperature"> 
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : (
          "" //ถ้าหากerrorให้แสดงหน้าเปล่า
        )}
      </main>
    </div>
  );
}

export default App;

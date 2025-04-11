import { useState } from "react";
import { FetchWeather } from "./FetchWeather";
const Weather = ()=>{
   // Weather apiKey in www.openweathermap.org
   const apiKey = "154a39c34da780ca32eb7abde70be2f5";

   const [city,setCity] = useState('');
   const [weather,setWeather] = useState(null);
   // const [error,setError] = useState('');


   const getWeather = async ()=>{
      const data  = await FetchWeather(city);
      setWeather(data);
   }

   return(
      <>
      <h1>بررسی آب و هوای شهر</h1>
      <input type="text" placeholder="نام شهر را وارد کنید"
      value={city}
      onChange={e=>setCity(e.target.value)} />
      <button onClick={getWeather} >
         جستجو
      </button>
      {weather && (
         <div style={{ marginTop: '20px' }}>
         <h2>{weather.name}</h2>
         <p>دما: {weather.main.temp}°C</p>
         <p>احساس واقعی: {weather.main.feels_like}°C</p>
         <p>توضیح: {weather.weather[0].description}</p>
         <p>باد: {weather.wind.speed} متر بر ثانیه</p>
       </div>
      )}
      </>
   )
}
export default Weather;
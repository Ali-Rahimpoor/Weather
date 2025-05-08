import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import axios from "axios";
const apiKey ="154a39c34da780ca32eb7abde70be2f5";

export const useFetchWeather = ()=>{
   const {setWeatherData} = useContext(WeatherContext);
const FetchWeather = async (city,unit="metric")=>{
try{
   const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,{
         params:{
            q:city,
            appid: apiKey,
            units: unit,
            lang: 'fa' 
         }
      }
   );

   const weather = weatherRes.data;
   setWeatherData(weather);
   return {
      weather
   };
}catch(error){
   console.error(error.response ? error.response.data : error.message)
   return null;
}
}
return FetchWeather;
}
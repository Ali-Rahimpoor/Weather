import axios from "axios";
import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";
const apiKey ="154a39c34da780ca32eb7abde70be2f5";
export const useMoreFetchWeather = ()=>{
   const {weatherData} = useContext(WeatherContext);
 const MoreFetchWeather = async (unit="metric")=>{
try{
   
   const weather = weatherData;
   const {lat,lon} = weather.coord;

   const pollutionRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution`,{
         params:{
            lat,
            lon,
            appid: apiKey
         }
      }
   );
   
   const airData = pollutionRes.data;

   const forecastRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,{
       params:{
         lat,
         lon,
         appid:apiKey,
         units:unit,
         lang:'fa',
         cnt:40
       }  
      }
   );

   const foreCastData = forecastRes.data;

   return {
      weather,
      air : airData,
      forecast: foreCastData
   };
}catch(error){
   console.error(error.response ? error.response.data : error.message)
   return null;
}
}
return MoreFetchWeather;
}
import axios from "axios";

const apiKey ="154a39c34da780ca32eb7abde70be2f5";

export const FetchWeather = async (city)=>{
try{
   // 2.5/weather => Default
   // 2.5/forecast => ForeCast
   // 2.5/air_pollution => Air Pollution
   // /3.0/onecall => new 
   // units : metric 0C ,,,, imperial 0F
   const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,{
         params:{
            q:city,
            appid: apiKey,
            units: "metric",
            lang: 'fa' 
         }
      }
   );

   const weatherData = weatherRes.data;
   const {lat,lon} = weatherData.coord;

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

   return {
      weather: weatherData,
      air : airData
   };
}catch(error){
   console.error(error.response ? error.response.data : error.message)
   return null;
}
}
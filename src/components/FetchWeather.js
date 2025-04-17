import axios from "axios";

const apiKey ="154a39c34da780ca32eb7abde70be2f5";

export const FetchWeather = async (city)=>{
try{
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
   return {
      weather: weatherData
   };
}catch(error){
   console.error(error.response ? error.response.data : error.message)
   return null;
}
}
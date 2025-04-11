import axios from "axios";

const apiKey ="154a39c34da780ca32eb7abde70be2f5";

export const FetchWeather = async (city)=>{
try{
   // 2.5/weather => Default
   // 2.5/forecast => ForeCast
   // 2.5/air_pollution => Air Pollution
   // /3.0/onecall => new 
   // units : metric 0C ,,,, imperial 0F
   const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,{
         params:{
            q:city,
            appid: apiKey,
            units: "metric",
            lang: 'fa' 
         }
      }
   );
   return response.data;
}catch(error){
   console.error(error.response ? error.response.data : error.message)
   return null;
}
}
import { useState,useEffect } from "react";
import { FetchWeather } from "./FetchWeather";
import { useParams } from "react-router-dom";
import Loading from "./fragment/Loading";
import NotFound from "./fragment/NotFound";
import Error from "./fragment/Error";
const Weather = () => {
  // const params = useParams();
  // const city = params.city;
  const {city} = useParams();
  const [weatherData,setWeatherData] = useState(null)
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const getWeather = async ()=>{
      try{
      setLoading(true);
      const data = await FetchWeather(city);
      setWeatherData(data.weather);
      console.log(data.weather)
      setError(null);
    }catch(err){
      setError("خطا در دریافت اطلاعات آّب و هوا");
      console.error("FetchERR"+err)
    }finally{
      setLoading(false);
    }
     }
     if(city){
      getWeather();
     }
  },[city])

  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }
  if(!weatherData){
    return <NotFound/>
  }

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const getHumidityStatus = (humidity)=>{
    if(humidity < 30 ) return "خشک";
    if(humidity < 50) return "متوسط";
    if(humidity < 70) return "مرطوب";
    return "خیلی مرطوب";}

    const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
  return (
    <section className=" mt-3 shadow bg-slate-50 p-4 font-Dana-Regular w-[768px] mx-auto ">
      <h1 className="text-center text-xl mt-5" >اطلاعات آب و هوای 
        <span className="font-Dana-Bold text-2xl" > {weatherData.name}</span>
      </h1>
      {/* Temperature */}
      <div>
        <p>دما : 
        <span>{Math.round(weatherData.main.temp)} °C</span>
        </p>
        <p>وضعیت رطوبت:
          <span> {getHumidityStatus(weatherData.main.humidity)}
          </span>
        </p>
        <p>سرعت باد : {Math.round(weatherData.wind.speed)}m/s</p>
        <div className="flex items-center" >شرایط جوی:
          <span> {weatherData.weather[0].description}</span>
          <img 
           className="w-16 h-16"
            src={iconUrl} 
            alt={iconCode} 
           />
        </div>
        <div>
          <p>طلوع خورشید: 
            <span>{sunriseTime}</span>
          </p>
          <p>غروب خورشید :
            <span>{sunsetTime}</span>
          </p>
        </div>
      </div>
    </section>
  );
    // <div className="container mx-auto p-4">
    //   <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    //     {/* اطلاعات آب و هوا */}
    //     {weatherData.weather && (
    //       <div className="p-6">
    //         <h2 className="text-2xl font-bold text-gray-800">
    //           آب و هوا در {weatherData.weather.name}
    //         </h2>
            
    //         <div className="flex items-center mt-4">
    //           <div className="text-5xl font-bold text-blue-600">
    //             {Math.round(weatherData.weather.main.temp)}°C
    //           </div>
    //           <div className="ml-4">
    //             <p className="text-gray-600">
    //               {weatherData.weather.weather[0].description}
    //             </p>
    //             <p className="text-gray-600">
    //               رطوبت: {weatherData.weather.main.humidity}%
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {/* اطلاعات آلودگی هوا */}
    //     {weatherData.air && weatherData.air.list && weatherData.air.list.length > 0 && (
    //       <div className="bg-gray-100 p-6">
    //         <h3 className="text-xl font-semibold text-gray-800">کیفیت هوا</h3>
    //         <div className="mt-2">
    //           <p className="text-gray-600">
    //             شاخص کیفیت هوا (AQI): {weatherData.air.list[0].main.aqi}
    //           </p>
    //           <p className="text-sm text-gray-500 mt-2">
    //             ۱: عالی | ۲: خوب | ۳: متوسط | ۴: بد | ۵: خیلی بد
    //           </p>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  
};

export default Weather;
import { useState,useEffect } from "react";
import { FetchWeather } from "./FetchWeather";
import { useParams } from "react-router-dom";
import axios from "axios";
const Weather = () => {
  const {city} = useParams();
  const [weatherData,setWeatherData] = useState(null)
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const getWeather = async ()=>{
      try{
      const data = await FetchWeather(city);
      setWeatherData(data);
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
    return <div>LOADING...</div>
  }
  if(error){
    return <div>ERROR...</div>
  }
  if(!weatherData){
    return <div>NOT FOUND</div>
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* اطلاعات آب و هوا */}
        {weatherData.weather && (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              آب و هوا در {weatherData.weather.name}
            </h2>
            
            <div className="flex items-center mt-4">
              <div className="text-5xl font-bold text-blue-600">
                {Math.round(weatherData.weather.main.temp)}°C
              </div>
              <div className="ml-4">
                <p className="text-gray-600">
                  {weatherData.weather.weather[0].description}
                </p>
                <p className="text-gray-600">
                  رطوبت: {weatherData.weather.main.humidity}%
                </p>
              </div>
            </div>
          </div>
        )}

        {/* اطلاعات آلودگی هوا */}
        {weatherData.air && weatherData.air.list && weatherData.air.list.length > 0 && (
          <div className="bg-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-800">کیفیت هوا</h3>
            <div className="mt-2">
              <p className="text-gray-600">
                شاخص کیفیت هوا (AQI): {weatherData.air.list[0].main.aqi}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ۱: عالی | ۲: خوب | ۳: متوسط | ۴: بد | ۵: خیلی بد
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
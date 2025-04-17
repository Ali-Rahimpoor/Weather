import { useState,useEffect } from "react";
import { FetchWeather } from "./FetchWeather";
import { useParams,Link } from "react-router-dom";
import Loading from "./fragment/Loading";
import Error from "./fragment/Error";
import { LuSunMedium } from "react-icons/lu";
const Weather = () => {
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
    return <Error/>
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
    <section className="text-gray-800 md:mt-3 shadow bg-blue-300 p-4 font-Dana-Regular w-full md:w-[768px] mx-auto ">
      <header>
      <h1 className="text-center text-lg sm:text-xl mt-3 sm:mt-5" >اطلاعات آب و هوای 
        <span className="font-Dana-Bold text-xl sm:text-2xl" > {weatherData.name}</span>
      </h1>
      </header>
      <main>
      {/* Temperature & Wind & Humidity */}
        <div className="flex flex-col items-center justify-center">
          {/* Temp */}
          <div className="sm:text-3xl text-xl shadow bg-gradient-to-tr from-blue-200 to-blue-300 rounded-xl sm:py-6 sm:px-8 px-4 py-5 my-5 text-gray-700 font-Dana sm:hover:shadow-xl sm:transition-all sm:cursor-none">
            <p>دما : 
              <span>{Math.round(weatherData.main.temp)} °C</span>
            </p>
          </div>
          {/* Hum & Wind */}
          <div className="flex sm:flex-row flex-col gap-y-3 sm:gap-x-10 items-center text-xl my-2 font-Morabba-Light">
            <p>وضعیت رطوبت :
              <span> {getHumidityStatus(weatherData.main.humidity)}
              </span>
            </p>
            <p>سرعت باد : 
                <span> {Math.round(weatherData.wind.speed)}m/s</span>
            </p>
          </div>
        </div>
        {/* Weather */}
        <div className="justify-center my-2 text-xl flex items-center" >شرایط جوی :
          <span> {weatherData.weather[0].description}</span>
          <img 
           className="w-16 h-16"
            src={iconUrl} 
            alt={iconCode} 
           />
        </div>
      </main>
      <footer>
        <div className="flex justify-between items-center sm:px-2 mt-5">
          {/* Sunrise & Sunset */}
        <div className="flex items-center text-gray-600 gap-x-1">
          <LuSunMedium className="sm:size-14 size-8" />
          <div className="sm:text-xl text-sm  child:tracking-wide font-Morabba-Light">
          <p>طلوع خورشید: 
            <span>{sunriseTime}</span>
          </p>
          <p>غروب خورشید :
            <span>{sunsetTime}</span>
          </p>
          </div>
        </div>
        {/* More Data */}
        <Link to={'moreData'} className="sm:ml-5 font-Dana text-sky-900 p-1 sm:p-3 bg-blue-200 rounded-sm shadow-sm text-sm sm:text-base ">اطلاعات بیشتر</Link>
        </div>
      </footer>
    </section>
  );
};

export default Weather;
import { useState } from "react";
import { FetchWeather } from "./FetchWeather";
import {ReactComponent as Logo} from '../assets/svgs/undraw_cabin_7fei.svg'
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    const data = await FetchWeather(city);
    setWeatherData(data);
  };

  return (
  <>
    <header id='header' className="relative flex items-center justify-center font-Dana-Regular w-full h-[300px] bg-gradient-to-b from-slate-400 to-slate-300 ">
      {/* Logo absolute*/}
      <div className="absolute left-10 top-3  hover:opacity-90 cursor-pointer" >
      <Logo className="size-24" />
      <h6 className="font-mono tracking-tighter text-gray-800" >Show Weather</h6>
      </div>
      
      {/* Selection */}
      <div id="dropDown">
      <button  className="flex items-center text-gray-600 bg-sky-200 p-3 ml-2 rounded" >
        شهر های محبوب
        <GoChevronDown className="size-5" />
        </button>
        <div id="dropDown-content">
          <button>تهران</button>
          <button>مشهد</button>
          <button>یزد</button>
          <button>اصفهان</button>
        </div>
        </div>
      {/* Search */}
      <div 
      className="flex items-center rounded overflow-hidden p-3 bg-slate-50">
        <input 
        placeholder="نام شهر را وارد کنید"
        type="text" 
        className="bg-slate-50 focus:border-none focus:outline-none w-[300px]" />
        <CiSearch className="size-6 transition-all hover:size-7 cursor-pointer " />
      </div>
    </header>
    <main>

    </main>





  </>
  );
      {/* <h1>بررسی آب و هوای شهر</h1>
      <input
        type="text"
        placeholder="نام شهر را وارد کنید"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={getWeather}>جستجو</button>

      {weatherData ? (
        <>
          {weatherData.weather && weatherData.weather.main && (
            <div>
              <h3>آب‌و‌هوا در {weatherData.weather.name}</h3>
              <p>دما: {weatherData.weather.main.temp}°C</p>
              <p>توضیح: {weatherData.weather.weather[0].description}</p>
            </div>
          )}

          {weatherData.air && weatherData.air.list && weatherData.air.list.length > 0 && (
            <div>
              <h3>آلودگی هوا</h3>
              <p>شاخص کیفیت هوا (AQI): {weatherData.air.list[0].main.aqi}</p>
              <p>1 عالی</p>
              <p>2 خوب</p>
              <p>3 متوسط</p>
              <p>4 بد</p>
              <p>5 خیلی بد</p>
            </div>
          )}
        </>
      ) : (
        <p>در حال دریافت اطلاعات...</p>
      )} */}
   
};
export default Weather;

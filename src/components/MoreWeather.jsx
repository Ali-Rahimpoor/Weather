import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoreFetchWeather } from "./MoreFetchWeather";
import { useState } from "react";
import Loading from "./fragment/Loading";
import Error from "./fragment/Error";
import GifURLPollution from "../assets/gif/Animation - 1744872073203.gif";
import {ReactComponent as ForecastSVG} from "../assets/svgs/undraw_weather_7n28.svg";
const MoreWeather = ()=>{
   const {city} = useParams();
   const [weatherData, setWeatherData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [showDetails,setShowDetails] = useState(true);
   useEffect(()=>{
      const getWeather = async()=>{
         try{
            setLoading(true);
            const data = await MoreFetchWeather(city);
            if(!data){
               throw new Error("NOT FOUND DATA")
            }
            setWeatherData(data);
            setError(null);
         }catch(err){
            console.error(err.message);
            setError("خطا در دریافت اطلاعات");
         }finally{
            setLoading(false);
         }
      }
      if(city){
         getWeather();
      }
   },[city])

   if(loading){
      return (<Loading/>)
   }
   if(error){
      return(<Error/>)
   }
   if(!weatherData){
      return(<Error/>)
   }
      console.log(weatherData);
 
 // if do not have Forecast Show null
 if (!weatherData?.forecast?.list) return null;

 // Using Ai for Grouping Dates in Forecast
 const dailyForecast = {};
   weatherData.forecast.list.forEach(item => {
     const date = new Date(item.dt * 1000).toLocaleDateString('fa-IR');
     if (!dailyForecast[date]) {
       dailyForecast[date] = [];
     }
     dailyForecast[date].push(item);
   });
   const AirQuality = (aqi)=>{
      if(aqi ===1) return "عالی";
      if(aqi ===2) return "خوب";
      if(aqi ===3) return "متوسط";
      if(aqi ===4) return "ناسالم";
      if(aqi ===5) return "خطرناک";
      return "نامشخص";
   }
   const AirDescription = (aqi)=>{
      if(aqi ===1) return "با توجه به وضعیت کیفیت هوا در این شهر هوا عالی میباشد و هیچگونه آلاینده ای وجود ندارد";
      if(aqi ===2) return "هوا در این شهر خوب میباشد و در وضعیت سالم قرار دارد و درصد آلاینده بسیار کمی وجود دارد";
      if(aqi ===3) return "وضعبت کیفیت هوا در این شهر متوسط و مقداری آلاینده وجود دارد";
      if(aqi ===4) return "وضعیت کیفبت هوا در این شهر ناسالم و خطرناک برای گروه های حساس";
      if(aqi ===5) return "وضعیت کیفبت هوا خطرناک میباشد و برای همه گروه ها اکیدا توصیه میشود بیرون نمانند";
      return "اطلاعات دقیقی در درسترس نیست";
   }
   const toggleDetails = (e)=>{
      e.preventDefault();
      setShowDetails(!showDetails);
   }

 return (
   <section className="text-gray-800 overflow-y-scroll h-full md:mt-3 shadow bg-blue-300 p-4 font-Dana-Regular w-full lg:w-[900px] mx-auto">
      <header className=" p-3 rounded text-center text-lg text-gray-700 bg-white/20">
         <p>بررسی دقیق تر <span className="font-Dana-Bold text-gray-800">{weatherData.forecast.city.name}</span> از <span className="font-Dana-Bold text-gray-800">{weatherData.forecast.city.country}</span> با جمعیت <span className="font-Dana-Bold text-gray-800">{weatherData.forecast.city.population} نفر</span></p>
      </header>
      <main className="mt-5 p-1">
         <div className="flex flex-row items-center justify-between">
            {/* Pollution */}
            <div className="border-r flex-grow p-1  px-10 flex justify-between">
             
               <div>
                  <div className="flex items-center mb-5 gap-x-2">
                     <h1 className="text-lg font-Dana">شاخص آلودگی هوا</h1>
                     <img 
                     src={GifURLPollution} 
                     className="size-20" 
                     alt="" />
                  </div>
                  <h2 className="text-lg mb-2">وضعیت کیفیت هوا :
                  <span>َ {AirQuality(weatherData.air.list[0].main.aqi)} </span>
                  </h2>
               </div>
               {/* btn */}
               <div>
                  <button 
                  onClick={toggleDetails}
                  className="bg-blue-400/50 w-full text-gray-700 px-2 py-1 rounded mt-2">
                  {showDetails ? 'مخفی کردن اطلاعات' : 'اطلاعات بیشتر'}
                  </button>

                  <div className={`transition-opacity duration-300 text-xs ${showDetails ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                  <p className="mt-1 flex justify-between">مقدار کربن مونوکسید: 
                     <span className="font-Dana-Bold"> {weatherData.air.list[0].components.co} μg/m³</span>
                  </p>
                  <p className="flex justify-between" >مقدار گوگرد دی اکسید: 
                     <span className="font-Dana-Bold"> {weatherData.air.list[0].components.so2} μg/m³</span>
                  </p>
                  <p className="flex justify-between" >مقدار نیتروژن دی اکسید : 
                     <span className="font-Dana-Bold"> {weatherData.air.list[0].components.no2} μg/m³</span>
                  </p>
                  <p className="flex justify-between" >مقدار نیتروژن مونوکسید : 
                     <span className="font-Dana-Bold"> {weatherData.air.list[0].components.no} μg/m³</span>
                  </p>
                  <p className="flex justify-between" >مقدار گاز اوزون: 
                     <span className="font-Dana-Bold"> {weatherData.air.list[0].components.o3} μg/m³</span>
                  </p>
                  </div>
               </div>
             
            </div>
           
            <div className="border-r p-1 w-[250px] font-Morabba tracking-wide text-center text-balance">
               <h1>{AirDescription(weatherData.air.list[0].main.aqi)}</h1>
            </div>
         </div>
         {/* Forecast */}
        <div className="mt-5">
            <div className="flex">
            <ForecastSVG className="w-[300px] h-[130px]" />
            <h1 className="text-3xl text-gray-200 mr-32 px-16 rounded flex items-center justify-center font-Dana bg-blue-600/20">پیش بینی آب و هوا</h1>
            </div>

               {/* AI */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(dailyForecast).map(([date, items], index) => {
            const avgTemp = items.reduce((acc, item) => acc + item.main.temp, 0) / items.length;
            // most weather conditions
            const weatherCount = {};
            items.forEach((item) => {
            const desc = item.weather[0].description;
            weatherCount[desc] = (weatherCount[desc] || 0) + 1;
            });
            const mainWeather = Object.entries(weatherCount).reduce((a, b) =>
            a[1] > b[1] ? a : b)[0];
            // icons per day
            const icon = items[0].weather[0].icon;
           

            return (
            <div
            key={index}
            className="bg-white/30 rounded-xl p-4 shadow flex flex-col items-center text-center sm:hover:scale-105 sm:transition-transform">
            <p className="font-Dana-Bold text-sm sm:text-base">{date}</p>
            <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={mainWeather}
            className="w-20 h-20"/>
            <p className="text-gray-700 text-sm">
               {mainWeather}
            </p>
            <p className="text-blue-700 text-xl font-Dana-Bold mt-1">
               {avgTemp.toFixed(1)}°C
            </p>
         </div>);})}
            </div>

        </div>
      </main>
   </section>
 );
}
export default MoreWeather;
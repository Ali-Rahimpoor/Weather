import Weather from "./components/Weather";
import {ReactComponent as LogoLight} from './assets/svgs/undraw_cabin_7fei.svg'
import {ReactComponent as LogoDark} from './assets/svgs/undraw_cabin_7fei copy.svg'
import Search from "./components/Search";
import {Routes,Route,useNavigate} from "react-router-dom";
import Home from "./components/Home";
import MoreWeather from "./components/MoreWeather";
import { WeatherContext } from "./Context/WeatherContext";
import { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
function App() {
  const [unit,setUnit] = useState('metric');
  const [darkMode,setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleCitySelect = (city)=>{
    navigate(`/weather/${city}`);
  };
  const handleRefresh = ()=>{
    navigate('/');
  }

  const handleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark":''}>
     <header id='header' className="relative flex items-center justify-center font-Dana-Regular w-full h-[30vh] bg-gradient-to-b from-blue-100 to-blue-300 dark:from-zinc-500 dark:to-zinc-700 ">
        {/* Logo*/}
        <div className="absolute left-10 top-3  hover:opacity-90 cursor-pointer" >
          {darkMode ?
          (<LogoDark className="lg:size-28  md:size-20 size-12 " onClick={handleRefresh} />):
          (<LogoLight className="lg:size-28  md:size-20 size-12 " onClick={handleRefresh} />)}
          <h6 className="font-mono tracking-tighter lg:text-lg md:text-sm text-xs  hidden sm:block text-gray-800 dark:text-zinc-400" >Show Weather</h6>
        </div>

        {/* SearchInput & DropDownSelection*/}
        <Search onCitySelect={handleCitySelect} />

        {/* DarkMode */}
        <button 
        onClick={handleDarkMode}
        className="absolute sm:right-10 sm:top-10 md:right-7 md:top-7 right-4 top-4 p-3 cursor-pointer rounded-full bg-gray-100 dark:bg-gray-700"
        >
          {darkMode ? (<FaSun className="text-white text-lg"/>) : (<FaMoon className="text-lg" />)}
        </button>

     </header>
     <main className=" h-[63vh] md:h-[60vh] ">
      <WeatherContext.Provider 
      value={{
        unit,
        setUnit,
        darkMode,
        setDarkMode
      }}
      >
      <Routes>
        <Route 
        path="weather/:city" 
        element={<Weather/>} />
        <Route 
        path="weather/:city/moreData" element={<MoreWeather/>} />
        <Route 
        path="/" 
        element={<Home/>}/>
      </Routes>
      </WeatherContext.Provider>
     </main>
     <footer className="fixed bottom-0 -z-10 bg-gray-800 sm:h-auto w-full text-white  p-4">
      <div className="flex xs:flex-row flex-col justify-between text-xs sm:text-base items-center">
        <small>ساخته شده توسط علی رحیم پور</small>
        <small className="">Copyright © 2025 AliRahimpoor® All rights reserved</small>
       </div>
     </footer>
     </div>
  );
}

export default App;

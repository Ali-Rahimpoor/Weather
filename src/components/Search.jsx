import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
const Search = ({onCitySelect})=>{ 

   const [city, setCity] = useState('');


   const selectCity=(city)=>{
      setCity(city);
      onCitySelect(city);
    }

    const searchCity = ()=>{
      if(city.trim()){
         onCitySelect(city);
      }
    }
    const handleKeyPress = (e)=>{
      if(e.key==="Enter"){
         searchCity();
      }
    };

   

   return(
      <div className="flex items-center justify-between gap-x-1 ">
       {/* Selection */}
       <div id="dropDown">
      <button  className="flex items-center text-gray-700 dark:bg-sky-200 bg-sky-300 px-2 py-3 ml-2 rounded sm:text-base text-xs rounded-b-none" >
        <span className="sm:inline hidden">شهر های محبوب</span>
        <span className="sm:hidden inline">انتخاب</span>
        <GoChevronDown id='chevron' className="sm:size-5 size-4 transition-transform" />
        </button>
        <div id="dropDown-content">
          <button onClick={(e) => selectCity(e.target.textContent)}>تهران</button>
          <button onClick={(e)=> selectCity(e.target.textContent)}>مشهد</button>
          <button onClick={(e)=> selectCity(e.target.textContent)} >یزد</button>
          <button onClick={(e)=> selectCity(e.target.textContent)} >اصفهان</button>
          <button onClick={(e)=> selectCity(e.target.textContent)} >سبزوار</button>
          <button onClick={(e)=> selectCity(e.target.textContent)} >قم</button>
          <button onClick={(e)=> selectCity(e.target.textContent)} >دبی</button>
          <button onClick={(e)=> selectCity(e.target.textContent)} >تربت حیدریه</button>

        </div>
        </div>
      {/* Search */}
      <div 
      className="flex items-center rounded overflow-hidden p-3 text-sm sm:text-base dark:bg-zinc-400 bg-slate-50">
        <input 
        value={city}
        onChange={e=>setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="نام شهر را وارد کنید"
        type="text" 
        className="bg-slate-50 dark:placeholder:text-gray-700 font-Dana dark:text-gray-800  dark:bg-zinc-400 focus:border-none focus:outline-none sm:w-[300px]" />
        <CiSearch 
        className=" size-5  sm:size-6 sm:transition-all sm:hover:size-7 sm:cursor-pointer "
        onClick={searchCity}
         />
      </div>
      </div>
   )
}
export default Search;
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
const Search = ({onCitySelect})=>{ 

   const [city, setCity] = useState('');


   const clickSearch=(city)=>{
      setCity(city);
      onCitySelect(city);
    }

    const handleSearch = ()=>{
      if(city.trim()){
         onCitySelect(city);
      }
    }
    const handleKeyPress = (e)=>{
      if(e.target==="Enter"){
         handleSearch();
      }
    };

   return(
      <>
       {/* Selection */}
       <div id="dropDown">
      <button  className="flex items-center text-gray-600 bg-sky-200 p-3 ml-2 rounded" >
        شهر های محبوب
        <GoChevronDown className="size-5" />
        </button>
        <div id="dropDown-content">
          <button onClick={(e) => clickSearch(e.target.textContent)}>تهران</button>
          <button onClick={(e)=> clickSearch(e.target.textContent)}>مشهد</button>
          <button onClick={(e)=> clickSearch(e.target.textContent)} >یزد</button>
          <button onClick={(e)=> clickSearch(e.target.textContent)} >اصفهان</button>
        </div>
        </div>
      {/* Search */}
      <div 
      className="flex items-center rounded overflow-hidden p-3 bg-slate-50">
        <input 
        value={city}
        onChange={e=>setCity(e.target.value)}
        placeholder="نام شهر را وارد کنید"
        type="text" 
        className="bg-slate-50 focus:border-none focus:outline-none w-[300px]" />
        <CiSearch 
        className="size-6 transition-all hover:size-7 cursor-pointer "
        onClick={handleSearch}
         />
      </div>
      </>
   )
}
export default Search;
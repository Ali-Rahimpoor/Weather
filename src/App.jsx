import Weather from "./components/Weather";
import {ReactComponent as Logo} from './assets/svgs/undraw_cabin_7fei.svg'
import Search from "./components/Search";
import {Routes,Route,useNavigate} from "react-router-dom";
import Home from "./components/Home";
function App() {
  const navigate = useNavigate();

  const handleCitySelect = (city)=>{
    navigate(`/weather/${city}`);
  };
  const handleRefresh = ()=>{
    navigate('/');
  }

  return (
    <>
     <header id='header' className="relative flex items-center justify-center font-Dana-Regular w-full h-[30vh] bg-gradient-to-b from-blue-100 to-blue-300 ">
        {/* Logo*/}
        <div className="absolute left-10 top-3  hover:opacity-90 cursor-pointer" >
          <Logo className="lg:size-28  md:size-20 size-12 " onClick={handleRefresh} />
          <h6 className="font-mono tracking-tighter lg:text-lg md:text-sm text-xs  hidden sm:block text-gray-800" >Show Weather</h6>
        </div>

        {/* SearchInput & DropDownSelection*/}
        <Search onCitySelect={handleCitySelect} />
     </header>
     <main className="h-[62vh]">
      <Routes>
        <Route 
        path="weather/:city" 
        element={<Weather/>} />
        <Route 
        path="/" 
        element={<Home/>}/>
      </Routes>
     </main>
     <footer className="bg-gray-800 sm:h-auto w-full text-white p-4">
      <div className="flex xs:flex-row flex-col justify-between text-xs sm:text-base items-center">
        <small>ساخته شده توسط علی رحیم پور</small>
        <small className="">Copyright © 2025 AliRahimpoor® All rights reserved</small>
       </div>
     </footer>
     </>
  );
}

export default App;

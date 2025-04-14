import Weather from "./components/Weather";
import {ReactComponent as Logo} from './assets/svgs/undraw_cabin_7fei.svg'
import Search from "./components/Search";
import {Routes,Route,useNavigate} from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const handleCitySelect = (city)=>{
    navigate(`/weather/${city}`);
  };

  return (
    <>
     <header id='header' className="relative flex items-center justify-center font-Dana-Regular w-full h-[300px] bg-gradient-to-b from-slate-400 to-slate-300 ">
        {/* Logo*/}
        <div className="absolute left-10 top-3  hover:opacity-90 cursor-pointer" >
          <Logo className="size-24" />
          <h6 className="font-mono tracking-tighter text-gray-800" >Show Weather</h6>
        </div>

        {/* SearchInput & DropDownSelection*/}
        <Search onCitySelect={handleCitySelect} />
     </header>
     <main>
      <Routes>
        <Route 
        path="weather/:city" 
        element={<Weather/>} />
        <Route 
        path="/" 
        element={<div>SELECT</div>}/>
      </Routes>
     </main>
  
     </>
  );
}

export default App;

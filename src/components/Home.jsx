import { useState } from "react";

const Home = ()=>{
   const [selectedUnit,setSelectedUnit] = useState('');

   return(
     <div className="container font-Dana-Regular">
     <section>
         <h1 className="text-center mt-3 text-lg hidden sm:block">برای نمایش اطلاعات آب و هوایی شهر مورد نظر خود نام آن را وارد کنید

         </h1>
         <h1 className="sm:hidden block text-center mt-3">برای نمایش شهر مورد نظر را وارد کنید</h1>

        <div className="sm:mt-14 mt-4 p-2">
            <div className="flex items-center">
               <h2 className="whitespace-nowrap text-base sm:text-lg font-Dana ">تنظیمات نمایش</h2>
               <div className="border-t-2 flex-grow"></div>
            </div>
            <div className="p-2 sm:text-base text-xs child:my-4">
            {/* Unit */}
            <div>
               <div>نمایش دما به صورت :(در حال حاضر فقط به صورت سلیسوس)</div>
               <input 
               type="radio"
               name="units"
               value="metric"
               // checked={selectedUnit==="metric"}
               checked
               onChange={e=>setSelectedUnit(e.target.value)}
               />
               <span> سلیسوس </span>

               <input 
               type="radio" 
               name="units"
               value='imperial'
               checked={selectedUnit==="imperial"}
               disabled
               onChange={e=>setSelectedUnit(e.target.value)}
               />
               <span> فارنهایت </span>
            </div> 
            {/* Lang */}
            <div>
               <h2>زبان مورد نظر : (در حال حاضر ففط فارسی)
               </h2>
               <input type="radio" checked />
               <span> فارسی </span>
               <input type="radio" disabled />
               <span> انگلیسی </span>

            </div>
            </div>
         </div>
         
         <div className="p-2">
            <div className="flex items-center">
               <h2 className="whitespace-nowrap text-base sm:text-lg font-Dana ">آموزش ها</h2>
               <div className="border-t-2 flex-grow"></div>
            </div>

            <h1 className=" p-6  text-xl font-Dana" >به زودی</h1>

         </div>

     </section>
     </div>
   )
}
export default Home;
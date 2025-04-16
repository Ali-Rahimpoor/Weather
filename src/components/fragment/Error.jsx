import {ReactComponent as E404} from "../../assets/svgs/undraw_page-not-found_6wni.svg";
const Error = ()=>{

   return(
      <div className='font-Dana'>
         <h1 className='text-center mt-5 text-lg sm:text-xl'>مشکل در ارتباط با سرور</h1>
         <div className="flex items-center justify-center">
         <E404 className='sm:size-80 size-52'/>
         </div>
         <ul className='sm:w-[480px] my-4 w-[90%] mx-auto p-2 list-disc text-sm sm:text-base'>
            <li>اینترنت خود را چک کنید</li>
            <li>بررسی کنید که اسم شهر را درست وارد کردید</li>
            <li>در فرصتی دیگر دوباره امتحان کنید</li>
         </ul>
      </div>
   )
}
export default Error;
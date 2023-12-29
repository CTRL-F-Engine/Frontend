/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Standard_button } from "./Standard_button"
// bg-gradient-to-r from-sky-950 via-slate-800
import { Btn_transparent } from "./Btn_transparent"
export const Navbar=(props)=>
{
   var mod = '' ;
   {
         props.mode!=null?mod=props.mode : null
      }
   return(<nav className={`flex  justify-end gap-x-3 md:gap-x-7 list-none items-center   w-fit`}>
      
      <Btn_transparent mode={mod}  content="Log In"/>

      <Standard_button content="Sign Up"/>
   </nav>) 
}
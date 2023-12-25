/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export const Standard_button=(props)=>
{
 return (
    <button  className={`   w-[110px]
    box-border h-[38px] text-neutral-50 text-[15px] font-bold bg-slate-400  font-['TT Commons'] px-4 rounded-[5px] ` }>
   {(props.content=="Sign Up" ) ?  ( <Link to="/Signup"> {props.content} </Link>):((props.content=="Log In"?(<Link to="/Login"> {props.content} </Link>):props.content) )} 
    </button>  
)
}
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export const Btn_transparent=(props)=>
{
    return(
        <p>
        <button  className={`${props.mode != '' ? (props.mode=='dark' ? 'text-blue-950' : 'text-white'):'text-white' } font-semibold  text-[15px] text-right hover:underline font-['TT Commons']`}>
        {(props.content=="Sign Up" ) ?  ( <Link to="/Signup"> {props.content} </Link>):((props.content=="Log In"?(<Link to="/Login"> {props.content} </Link>):props.content) )}    
        
        
        </button>   
          </p>  

    )
}
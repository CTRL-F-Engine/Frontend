/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
export const Button =(props)=>
{
    const handleForget=()=>
    {
    if(props.reset){

        // la on met le code du reset mot de passe oublié
  
    }

    }
    return (
        <button onClick={props.onClick} 
        className="text-white lg:text-xl md:text-[16px] text-[15px] w-[100%] sm:w-[30%]
        box-border sm:h-auto h-[45px]
        font-semibold font-['TT Commons'] bg-gray-900 sm:w-[1/3] px-4 rounded-[4px]">
        {(props.content=="Sign Up" || props.content=="Log In") ?  ( (props.content=="Log In")? <Link to="/Login"> {props.content} </Link> : <Link to="/Signup"> {props.content} </Link>):props.content}
        </button>  
    )
}
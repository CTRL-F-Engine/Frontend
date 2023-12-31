import { Link } from "react-router-dom"
/* eslint-disable react/prop-types */
export const Btn =(props)=>
{
    return (
        <button  className={` text-xl  w-[100%] sm:w-[200px] font-bold
        box-border sm:h-[45px] h-[55px]
        sm:mb-0 mb-5 ${props.DarkMode? 'bg-gray-900 text-white':"text-cyan-950 bg-slate-200"}
        font-semibold font-['TT Commons']  sm:w-[1/3] px-4 rounded-[4px]`}>
        {(props.content=="Sign Up")?<Link to="/Signup"> {props.content} </Link> : (props.content=="Log In") ?  ( <Link to="/Login"> {props.content} </Link>):(props.content=="Click Here !")?<Link to="/Welcome"> {props.content} </Link>:props.content}
        </button>  
    )
}
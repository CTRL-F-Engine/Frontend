/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Search_bar } from "./Search_bar"
import { useState } from "react";
import { Navbar } from "./Navbar";
export const Navbar2=(props)=>
{
    const [search,setSearch]=useState('');
    const handleSearch=(e)=>
    {
    e.key==="Enter"?console.log(search):"";
    }
    const handleChange=(e)=>
    {
        setSearch(e.target.value); 
    }
    return (
    
    <div className={`   ${
        props.sticky && 'fixed top-0 left-0 w-full  shadow-lg ' 
      }bg-neutral-50 sm:h-[70px] sm:flex flex-row  sm:justify-between px-10 sm:items-center justify-center items-start`}>

    <h1 className="text-cyan-500 font-bold">
    LOGO
</h1>
    <div className="relative border-cyan-500 w-[90%] sm:w-[40%]">
    <input onChange={handleChange} onKeyUp={handleSearch}   className="block w-full p-3 text-sm text-sky-950  border-[3px]  text-[15px]  rounded-[4px] bg-slate-200 focus:cyan-500 font-medium 
   outline-none   placeholder:text-sky-900"
    placeholder="Search" required/>
    <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
        <svg className="w-3 h-3 text-sky-950 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
</div>

<Navbar mode='dark'/>
</div>
)
}
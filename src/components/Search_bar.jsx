/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Search_bar=(props)=>
{
    const navigate = useNavigate();
    const [search,setSearch]=useState('');
    const handleSearch=(e)=>
    {
    e.key==="Enter"?console.log(search):"";
     ( e.key==="Enter" && search) ?navigate('/ResultSearch') :"";
    }
    const handleChange=(e)=>
    {
        const data=e.target.value;
        console.log(data) ;
        setSearch(data);
    }
    const handleClick=(e)=>
    {
        props.disabled ? props.func(e.target.value) : ""
    }
    return (
    <div class="relative border-cyan-500 lg:w-[50%] after:border-none md:w-[70%] w-[70%] xs:w-[60%]">
        <input onChange={handleChange} onKeyUp={handleSearch}   id="default-search" class="block w-full p-3 xs:p-4 ps-6 xs:ps-10 text-sm text-cyan-500  border-[3px] lg:text-[24px] md:text-[22px] border-cyan-500 rounded-[4px] xs:rounded-lg bg-transparent focus:cyan-500 
        border-solid outline-none  placeholder:text-cyan-500"
        placeholder="Search" value={search}  onClick={(e)=>{handleClick(e) }} required/>
        <div class="absolute inset-y-0 end-6 flex items-center ps-5 pointer-events-none">
            <svg class="xs:w-6 xs:h-6 h-4 w-4 text-cyan-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </div>
    );
}
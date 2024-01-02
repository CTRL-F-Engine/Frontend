/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import pdp from '../assets/pdp.png'
import { LittleSideBarWhite } from "./LittleSideBarWhite";

export const Navbar3=(props)=>
{
  const getPdp=()=>
  {
    return pdp;
  }
const [LittleNavVisible , setLittleNavVisible]=useState(false);

    const [search,setSearch]=useState('');
    const nav=useRef();
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    const handleReseize=()=>
    {
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>
    {
    window.addEventListener('resize',handleReseize);
    setVisible(windowWidth>=468);
    return ()=>
    {
        window.removeEventListener('resize', handleReseize);
    }
    },[windowWidth])
    useEffect(() => {
      console.log('inside navbar2')
      if (nav.current) {
        props.func(window.innerHeight);
        console.log(nav.current.getBoundingClientRect().top);
      }
    },[]);
    
 const [isVisible, setVisible]=useState(true);
 let handleVisible = () => {
    setVisible(!isVisible);

    if (nav.current) {
      console.log(nav.current.classList);
      nav.current.classList.add('nav')
    }
  };
    const handleSearch=(e)=>
    {
    e.key==="Enter"?console.log(search):"";
    }
    const handleChange=(e)=>
    {
        setSearch(e.target.value); 
    }
    return (
     ( <div className="w-[100vw] z-20 relative border border-slate-950">
{ (<div ref={nav} className={`   ${
        props.sticky && 'fixed top-0 left-0 w-full  shadow-lg ' 
      } ${!props.sticky && 'hidden'} bg-neutral-50 h-[70px] flex  xs:justify-between px-8 xs:px-10 items-center  justify-between `}>
    
{(LittleNavVisible && props.connected)
 && <LittleSideBarWhite/>
} 

 {!props.connected && <div className="xs:hidden  w-[40px] h-[40px]" onClick={handleVisible} >

       <div className="w-[39px] h-[39px] relative">
  <div className="w-[19.50px] h-[19.50px] left-[13px] top-[9.75px] absolute">
    <div className="w-[25px] h-[3.25px] left-0 top-0 absolute bg-slate-400 rounded-[10px]" />
    <div className="w-[25px] h-[3.25px] left-0 top-[8.12px] absolute bg-slate-400 rounded-[10px]" />
    <div className="w-[25px] h-[3.25px] left-0 top-[16.25px] absolute bg-slate-400 rounded-[10px]" />
  </div>
</div> 
        
        </div>}
  
    <div className="relative xs:block hidden border-cyan-500 w-[90%] xs:w-[40%]">
     <div className="flex w-full justify-between gap-x-10 items-center">

     <h1 className="text-cyan-500 w-fit font-bold">
    LOGO
</h1> 
       </div> 


 
    
</div>
{ props.connected&&<div onClick={()=>
{
  setLittleNavVisible(!LittleNavVisible);
}} className='text-white rounded-full
 bg-white cursor-pointer xs:w-[50px] xs:h-[50px] w-[35px] h-[35px]'>
 <img src={getPdp()}/>
</div>}
</div>)}
      </div>)
    
    


)
}
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Standard_button } from '../components/Standard_button';
import { Button } from '../components/Button';
import { LittleSideBar } from '../components/LittleSideBar';
import { Search_bar } from '../components/Search_bar';
import { Navbar } from '../components/Navbar';
import { Navbar2 } from '../components/Navbar2';
import { Article } from '../components/Article';
import img from '../assets/footer.svg';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png'
import { Btn } from '../components/Btn';
export const Home =()=>
{
  const getPdp=()=>
  {
    return pdp;
  }
const [LittleNavVisible , setLittleNavVisible]=useState(false);
const {isConnected} = useContext(Appcontext2)
const [ref,setRef]=useState(null);
const [search,setSearch]=useState('');
const [isSticky, setIsSticky] = useState(false);
const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); // This might still show null
    
      // Use useEffect to log the ref value after it has been updated
    
      console.log('Data:', data);
    };
    useEffect(()=>
    {

    },[isConnected])
     useEffect(() => {
        console.log('Ref inside useEffect:', ref);
      }, [ref]);
     
      useEffect(() => {
        const handleScroll = () => {
        
          const offset = window.scrollY;
          console.log(ref);
          setIsSticky(offset > ref);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [ref]);
      const handleSearch=(e)=>
      {
      e.key==="Enter"?console.log(search):"";
      }
      const handleChange=(e)=>
      {
          setSearch(e.target.value); 
      }
    return (
    <div  className='home  w-[100%] h-[100%]'>
<div className='bg-gradient-to-l   from-sky-950 via-slate-800 to-transparent flex justify-end px-8 sm:px-10 items-center h-[70px]'>
{!isConnected && <Navbar />}

{ isConnected&&<div onClick={()=>
{
  setLittleNavVisible(!LittleNavVisible);
}} className='text-white rounded-full
 bg-white cursor-pointer xs:w-[50px] xs:h-[50px] w-[35px] h-[35px]'>
 <img src={getPdp()}/>
</div>}
</div>
{(LittleNavVisible && isConnected) &&<LittleSideBar/>} 

    <div className=" w-[100%] h-[90vh] flex items-center justify-center ">
       <Search_bar placeholder="search"/>
    </div>
    <Navbar2 func={handleOffset} connected={isConnected} sticky={isSticky}/>
    <div className='relative  z-10  px-8'>
     <input onChange={handleChange} onKeyUp={handleSearch}   className={`${(!isConnected)? 'xs:hidden' : 'block'} mt-10 w-full p-3 text-sm text-sky-950 border-[3px]  text-[15px]  rounded-[4px] bg-slate-200 focus:cyan-500 font-medium 
   outline-none  z-10 placeholder:text-sky-900`}
    placeholder="Search" required/>
 <div className="absolute xs:hidden block inset-y-5 end-12  items-center ps-3 pointer-events-none">
        <svg className="w-3 h-3 text-sky-950 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>

    
    </div> 
    </div>
      
  
    <h1 className='px-10 mt-8 font-semibold text-2xl text-blue-950 mb-8'>
        Recent
    </h1>
    <div className='px-4 sm:px-10'>
   <hr className='border-2 mb-10 border-blue-950'></hr>
    </div> 
  
    <div className=' grid gap-y-12'>
      <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
      <div className='px-4 sm:px-10'>
   <hr className='border-2 border-blue-950'></hr>
    </div> 
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <div className='px-4 sm:px-10'>
   <hr className='border-2 border-blue-950'></hr>
    </div> 
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <div className='px-4 sm:px-10'>   <hr className='border-2 border-blue-950'></hr>
    </div> 
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <div className='px-4 sm:px-10'>   <hr className='border-2 border-blue-950'></hr>
    </div> 
  
   
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <div className='px-4 sm:px-10'>   <hr className='border-2 border-blue-950'></hr>
    </div> 
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>   
   <div className='px-4 sm:px-10'>   <hr className='border-2 border-blue-950'></hr>
    </div> 
    <div className='h-[70px]'>

    </div>
    </div>
    {/* <div className="w-[1920px] h-[2293px] bg-gradient-to-b from-neutral-50 via-neutral-50 to-neutral-50 " /> */}


<footer className='h-[70px] w-full'>
  <img src={img} />
</footer>
    </div>)
}
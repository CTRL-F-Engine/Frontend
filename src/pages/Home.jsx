/* eslint-disable no-unused-vars */
import {Search_bar} 
from '../components/Search_bar'
import { Navbar } from '../components/Navbar' 
import { Navbar2 } from '../components/Navbar2'
import { useEffect } from 'react'
import { useState } from 'react'

import { Article } from '../components/Article'

export const Home =()=>
{
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          setIsSticky(offset > 691);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
    <div className='home  w-[100%] h-[100%]'>
<div className='bg-gradient-to-r from-sky-950 via-slate-800 flex justify-end px-10 to-gray-900 h-[70px]'>
<Navbar />

</div>
    <div className=" w-[100%] h-[90vh] flex items-center justify-center ">
        <Search_bar placeholder="search"/>
    </div>
    <Navbar2 sticky={isSticky}/>
    <h1 className='px-10 mt-8 font-semibold text-2xl text-blue-950 mb-8'>
        Recent
    </h1>
    {/* <hr className='bg-blue-950 mx-auto  border-2 border-blue-950  mb-8 w-[90vw] box-border'>
    </hr> */}
    <div className=' grid gap-y-12'>
      <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>

   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>
   <Article date='05 Dec' title = 'Article 01' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'/>   
    </div>
  
    </div>)
}
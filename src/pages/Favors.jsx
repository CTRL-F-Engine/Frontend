/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Article } from '../components/Article';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png'
import { Navbar3 } from '../components/Navbar3';
import Filter from '../components/Filter';
import img from '../assets/footer.svg';
import Bookmark2 from '../assets/Bookmark2.png';

export const Favors =()=>
{

const {isConnected} = useContext(Appcontext2)
const [ref,setRef]=useState(null);
const [search,setSearch]=useState('');
const [isSticky, setIsSticky] = useState(false);
const [isFilterVisible, setIsFilterVisible] = useState(false);

const handleFilterClick = () => {
  setIsFilterVisible(!isFilterVisible);
};
const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); 
    
      console.log('Data:', data);
    };
    useEffect(()=>
    {

    },[isConnected])
     useEffect(() => {
      }, [ref]);
     
      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          console.log(ref);
          console.log(isSticky);
          if(ref)
          {
               setIsSticky(offset > window.innerHeight);

          }
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
    <div  className='w-full h-screen flex flex-col'>

    <Navbar3 func={handleOffset} connected={true} sticky={true}/>
       
  
       <h1 className='px-10 mt-28 font-semibold text-2xl text-blue-950 mb-8'>
    Favors
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
    <footer className='h-[70px] w-full'>
  <img src={img} />
</footer> 
  
    </div>)
}
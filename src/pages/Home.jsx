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
import AuthContext from '../context/AuthContext'
import pdp from '../assets/pdp.png'
import { Btn } from '../components/Btn';
import Popup from '../components/PopupSearch';

import Wait from '../components/Wait';

import { useNavigate } from 'react-router-dom';
export const Home =()=>
{
  const navigate = useNavigate();
  const getPdp=()=>
  {
    return pdp;
  }
const [showPopup , setShowPopup]=useState(false);
const [LittleNavVisible , setLittleNavVisible]=useState(false);
const {isConnected} = useContext(AuthContext)
const [ref,setRef]=useState(null);
const [search,setSearch]=useState('');

const [isSticky, setIsSticky] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem('User'));
  const user_type = storedUser ? storedUser.user_type : null;
  useEffect(()=>{
    if (isConnected  && user_type==='admin'){
      navigate('/upload')
      //toast.error("You do not permissions to access to this link !")
    }
    
  },[])

  const handleSetPopUp=(val1)=>
  {
    setShowPopup((val1) => !val1);
   console.log(showPopup);
  }
const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); 
      console.log('Data:', data);
    };
    
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
       <Search_bar func={handleSetPopUp}  disabled={!isConnected}  placeholder="search"/>
    </div>
    <Navbar2 func={handleOffset} connected={isConnected} sticky={isSticky}/>
    <div className='relative  z-10  px-8'>

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
{!isConnected && window.scrollY>=400 &&<Popup />}
{!isConnected && showPopup &&<Popup />}
<footer className='h-[70px] w-full'>
  <img src={img} />
</footer>
    </div>)
}
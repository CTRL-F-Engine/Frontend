/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png'
import { Navbar3 } from '../components/Navbar3';
import img from '../assets/footer.svg';

export const UserSettings =()=>
{

const {isConnected} = useContext(Appcontext2)
const [ref,setRef]=useState(null);
const [isSticky, setIsSticky] = useState(false);
const [user, setuser] = useState({
    title: 'Abla RABIA',
    username: 'Abla_08',
    link: '',
    img: pdp,
    description: 'Administrator',
    Email:'la_rabii@esi.dz',
      Password:'456',
  });

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
    
    return (
    <div  className='w-full h-screen flex flex-col'>

    <Navbar3 func={handleOffset} connected={true} sticky={true}/>
       
  
       <h1 className='px-10 mt-28 font-semibold text-2xl text-blue-950 mb-8'>
       Settings
    </h1>
    <div className='px-4 sm:px-10'>
   <hr className='border-2 mb-10 border-blue-950'></hr>
    </div>
    <div className='userInfo flex flex-row border border-delete'>
    <img src={user.img} alt={user.title} className="lg:h-48 lg:w-48 md:h-32 md:w-32 h-24 w-24 rounded-full" />
    </div> 
  
   
    <footer className='h-[70px] w-full'>
  <img src={img} />
</footer> 
  
    </div>)
}
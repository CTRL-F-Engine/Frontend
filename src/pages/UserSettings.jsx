/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png'
import { Navbar3 } from '../components/Navbar3';
import img from '../assets/footer.svg';
import next from '../assets/Next.png';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

export const UserSettings =()=>
{

const {isConnected} = useContext(AuthContext)
const [ref,setRef]=useState(null);
const [isSticky, setIsSticky] = useState(false);
const [user, setuser] = useState({
  FullName: '',
  username: '',
  
  photo: '',
  
  email:'',
    password:'',
});
const [isEditMode, setIsEditMode] = useState(false);
useEffect(() => {
  const fetchUserData = async () => {
    try {
      
      const token=localStorage.getItem("access")
    let token2 = token.replace(/"/g, '');
      const response = await fetch("http://127.0.0.1:8000/settings/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token2}`,
          "Content-Type": "application/json",
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        setuser(userData);
        
        setIsEditMode(true); // Enable edit mode since you have fetched existing user data
        console.log(userData)
      } else {
        // Handle error
        console.error("Error fetching user data");
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching user data:", error);
    }
  };

  fetchUserData();
}, []);
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
       
  
       <h1 className='px-4 sm:px-10 mt-28 font-semibold text-2xl text-blue-950 mb-8'>
       Settings
    </h1>
    <div className='px-4 sm:px-10'>
   <hr className='border-2 mb-10 border-blue-950'></hr>
    </div>
    <div className='userInfo flex flex-row  px-4 sm:px-10 space-x-5 mb-10'>
    <img src={`http://127.0.0.1:8000${user.photo}`} alt={user.username} className="lg:h-36 lg:w-36 md:h-24 md:w-24 h-16 w-16 rounded-full" />
    <div className='flex flex-col  justify-center '>
      <span className='font-medium sm:text-2xl text-xl text-blue-950'>{user.username}</span>
      <span className='font-medium sm:text-2xl text-xl text-blue-950'>{user.FullName}</span>
      <span  className='font-medium sm:text-2xl text-xl text-blue-950'>{user.email}</span>
    </div>
    </div> 
    <div className='Choix flex flex-col space-y-3 px-4 sm:px-10 relative w-full'>
      <Link to='/ChangePictr'>
      <div className='bg-page-col px-4 cursor-pointer  flex flex-row rounded-[4px] focus:cyan-500 font-medium w-full items-center h-12 sm:h-16 '>
         <span className='text-settings-col text-lg sm:text-xl'>Change Profile Picture</span>
         <img className='absolute  end-8 sm:end-14' src={next}/>
      </div>
      </Link>
      <Link to='/ChangeName' >
      <div className='bg-page-col px-4 cursor-pointer flex flex-row rounded-[4px] focus:cyan-500 font-medium w-full items-center h-12 sm:h-16'>
         <span className='text-settings-col text-lg sm:text-xl'>Change Name</span>
         <img className='absolute  end-8 sm:end-14' src={next}/>
      </div>
      </Link>
      <Link to='/ChangePw'>
      <div className='bg-page-col px-4 cursor-pointer flex flex-row rounded-[4px] focus:cyan-500 font-medium w-full items-center h-12 sm:h-16'>
         <span className='text-settings-col text-lg sm:text-xl'>Change Password</span>
         <img className='absolute  end-8 sm:end-14' src={next}/>
      </div>
      </Link>
    </div>
  
   
   <footer className='h-[70px] w-full absolute bottom-0'>
  <img src={img} />
    </footer> 
  
    </div>)
}

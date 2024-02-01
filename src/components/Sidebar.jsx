import React, { useState,useContext,useEffect } from 'react';
import '../App.css';
import imag from '../assets/pdp.png'
import SidebarHeader from './SidebarHeader';
import logg from '../assets/log-out.png';
import List from '../assets/LIST.svg'
import upload from '../assets/upload.svg'
import Settings from '../assets/settings2.svg'
import add from '../assets/add.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext'
import {decode} from '../utils/decode'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
const user1 = [
  {
    title: '',
    img: imag, 
    link: '',
    description: '',
    Email:'',
    Password:'',
  },
];

function Sidebar() {
  const {isConnected,setIsConnected} = useContext(AuthContext)
  const storedUser = JSON.parse(localStorage.getItem('User'));
  const user_type = storedUser ? storedUser.user_type : null;
  useEffect(()=>{
    if (!isConnected  || user_type!=='admin'){
      if (!isConnected){
        navigate('/Login')
      }else{
        navigate('/')
        toast.error("You do not permissions to access to this link !")
      }
      
      
    }
    
  },[])
  
  // Initial state for selected item
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
    
    const {AuthTokens,setAuthTokens} = useContext(AuthContext)
    const {user,setUser} = useContext(AuthContext)
  const handleLogout=async()=>{
    setAuthTokens(null)
    setUser(null)
    setIsConnected(false)
    localStorage.removeItem("authTokens")
    toast.success("User logged out successfully!")
    navigate('/Login')
}
  return (

    <div className="flex flex-col  bg-sidebar p-0 lg:w-64 md:w-60 w-48 h-[100vh]">
      <SidebarHeader />
      <ul className="w-full list-none flex-col  items-start justify-start flex-end ">

      <Link to="/upload">
      <li
          key="upload"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'upload' ? 'bg-page-col border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('upload');
          }}
        >
          <img src={upload} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Upload Articles</div>
        </li>
       </Link>

       <Link to="/add">
      <li
          key="Add Moderator"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'Add Moderator' ? 'bg-page-col border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('Add Moderator');
          }}
        >
          <img src={add} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Add Moderator</div>
        </li>
       </Link>
       <Link to="/list">
      <li
          key="List Of Moderators"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'List Of Moderators' ? 'bg-page-col border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('List Of Moderators');
          }}
        >
          <img src={List} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>List Of Moderators</div>
        </li>
       </Link>
       <Link to="/settings">
      <li
          key="Settings"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'Settings' ? 'bg-page-col border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('Settings');
          }}
        >
          <img src={Settings} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Settings</div>
        </li>
       </Link>
       </ul>

       <ul className="w-full list-none flex-col  items-start justify-start mt-[60%]">


        <li
          className={`w-full cursor-pointer m-0 h-12 space-x-4 flex flex-row justify-center items-center  hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${selectedItem === 'logout' ? 'bg-page-col border-l-4 border-black': ''}`}
          onClick={handleLogout}
        >
          <img src={logg}className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Log Out</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
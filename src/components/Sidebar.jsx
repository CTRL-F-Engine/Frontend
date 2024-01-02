import React, { useState } from 'react';
import '../App.css';
import imag from '../assets/pdp.png'
import SidebarHeader from './SidebarHeader';
import logg from '../assets/log-out.png';
import List from '../assets/LIST.png'
import upload from '../assets/upload.png'
import Settings from '../assets/settings.png'
import add from '../assets/add.png';

import { Link } from 'react-router-dom';
const user = [
  {
    title: 'Abla RABIA',
    img: imag, 
    link: '',
    description: 'Administrator',
    Email:'',
    Password:'',
  },
];

function Sidebar() {
  // Initial state for selected item
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col h-full bg-sidebar p-0 lg:w-64 md:w-60 w-48 relative">
      <SidebarHeader props={user} />
      <ul className="w-full list-none flex-col  items-start justify-start flex-end lg:mb-60 md:mb-48 mb-44">
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
       <ul className="w-full list-none flex-col  items-start justify-start flex-end mb-8">

        <li
          className={`w-full cursor-pointer m-0 h-12 space-x-4 flex flex-row justify-center items-center  hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${selectedItem === 'logout' ? 'bg-page-col border-l-4 border-black': ''}`}
          onClick={() => {
            setSelectedItem('logout');
          }}
        >
          <img src={logg}className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Log Out</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

import React, { useState } from 'react';
import '../App.css';
import imag from '../assets/pdp.png'
import SidebarHeader from './SidebarHeader';
import logg from '../assets/log-out.png';
import ArtList from '../assets/ArtList.png'
import EditS from '../assets/EditS.png'
import Settings from '../assets/settings.png'
import { Link } from 'react-router-dom';

const user = [
  {
    title: 'BENDAHMANE Nesrine',
    img: imag, 
    link: '',
    description: 'Moderator',
  },
];

function ModeratorSidebar() {
  // Initial state for selected item
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col  h-screen bg-sidebar p-0 lg:w-64 md:w-60 w-48">
      <SidebarHeader props={user} />
      <ul className="w-full list-none flex-col  justify-start flex-end lg:mb-60 md:mb-48 mb-44">
      <Link to="/ArticlesList">
      <li
          key="List of Articles"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'List of Articles' ? 'bg-admin-bg border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('List of Articles');
          }}
        >
          <img src={ArtList} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>List of Articles</div>
        </li>
       </Link>

       <Link to="/Article_editing">
      <li
          key="Article Editing"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'Article Editing' ? 'bg-admin-bg border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('Article Editing');
          }}
        >
          <img src={EditS} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Article Edting</div>
        </li>
       </Link>
       <Link to="/ModeratorSettings">
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

export default ModeratorSidebar;
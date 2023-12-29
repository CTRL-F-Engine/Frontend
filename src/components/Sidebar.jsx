/* eslint-disable no-unused-vars */
import  { useState } from 'react';

import { SidebarData } from './SidebarData';
import imag from './person.png'
import SidebarHeader from './SidebarHeader';
import logg from './log-out.png';
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
    <div className="flex flex-col h-screen bg-sidebar p-0 lg:w-64 md:w-60 w-48">
      <SidebarHeader props={user} />
      <ul className="w-full list-none flex-col  items-start justify-start flex-end lg:mb-60 md:mb-48 mb-44">
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
              selectedItem === key ? 'bg-page-col border-l-4 border-black' : ''
            }`}
            onClick={() => {
              window.location.pathname = val.link;
              setSelectedItem(key);
            }}
          >
            <a href={val.link}></a>
            <img src={val.img}  className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px] " />
            <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>{val.title}</div>
          </li>
        ))}
        </ul>


        <li
          className={`w-full cursor-pointer m-0 h-12 space-x-4 flex flex-row justify-center items-center  hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${selectedItem === 'logout' ? 'bg-page-col border-l-4 border-black': ''}`}
          onClick={() => {
            window.location.pathname="";
            setSelectedItem('logout');
          }}
        >
          <img src={logg}className="lg:w-[24px] lg:h-[24px]  h-[16px] w-[16px] md:h-[20px] md:w-[20px] " />
          <div className=' w-[60%] text-[13px] lg:w-[60%] lg:text-[17px] md:w-[65%] md:text-[15px]'>Log Out</div>
        </li>
      
    </div>
  );
}

export default Sidebar;
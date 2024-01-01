/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Navbar3 } from '../components/Navbar3';
import Filter from '../components/Filter';
import { Article } from '../components/Article';

export function ResultSearch  ()  {
  const [ref, setRef] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 

  const handleOffset = (data) => {
    setRef(data);
    console.log('Ref immediately after setRef:', data);
  };

  const handleFilterClick = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar3 func={handleOffset} connected={true} sticky={true} />
      <div className='flex flex-row space-x-[15%] mt-28  px-10'>
        <div className='w-[78%] h-7 bg-search-col relative'>
          <input
            className="block w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 end-3 flex items-center ps-10 pointer-events-none">
            <svg
              className="w-3 h-3 text-sky-950 mt-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
        <button
          onClick={handleFilterClick}
          className={`sm:w-[110px] w-fit box-border xs:h-[38px] h-[30px] text-white text-[13px] sm:text-[15px] font-medium sm:font-bold  ${
            isFilterVisible ? 'bg-filter-after' : 'bg-filter'
          } font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]`}
        >
          Filter
        </button>
      </div>
      {isFilterVisible && <Filter />}
      
      <h1 className='px-10 mt-8 font-semibold text-2xl text-blue-950 mb-8'>
        Result
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
    </div>
    </div>
  );
};

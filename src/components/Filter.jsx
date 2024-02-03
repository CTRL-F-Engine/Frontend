// Content component (content.js)
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Filter({ onFilterChange }) {
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [institutions, setInstitutions] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilterChange = () => {
    // You can pass the values back to the parent component
    onFilterChange({
      keywords,
      author,
      institutions,
      startDate,
      endDate,
    });
  };

  return (
    <div className='flex flex-row   px-10 space-x-1   lg:space-x-10'>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Key Words</h3>
        <input
        onChange={(e) => setKeywords(e.target.value)}
        onBlur={handleFilterChange}
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
          placeholder="lot"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Author</h3>
        <input
        onChange={(e) => setAuthor(e.target.value)}
        onBlur={handleFilterChange}
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
          placeholder="Haddad Amira"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Institutions</h3>
        <input
        onChange={(e) => setInstitutions(e.target.value)}
        onBlur={handleFilterChange}
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
          placeholder="ESI Algiers"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Date Range</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Start Date"
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <div className="h-5"></div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="End Date"
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
        />
      </div>
    </div>
  );
}

export default Filter;

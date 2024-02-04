// Content component (content.js)
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Filter({ onFilterChange ,onkey}) {
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [institutions, setInstitutions] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);

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
  const handleStartDateChange = (date) => {
    setStartDate2(date)
    // Check if date is a valid Date object
    if (date instanceof Date && !isNaN(date)) {
      // Format the date as a string in "YYYY-MM-DD" format
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      
      setStartDate(formattedDate);
      console.log(formattedDate)
      console.log(typeof formattedDate)
      handleFilterChange()
    } else {
      console.error("Invalid date format");
    }
  };
  
  const handleEndDateChange = (date) => {
    // Check if date is a valid Date object
    if (date instanceof Date && !isNaN(date)) {
      setEndDate2(date)
      // Format the date as a string in "YYYY-MM-DD" format
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      
      setEndDate(formattedDate);
      console.log(formattedDate)
      console.log(typeof formattedDate)
      handleFilterChange()
    } else {
      console.error("Invalid date format");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleFilterChange();
      event.preventDefault(); // Prevent the default behavior of the Enter key
    }
  };

  return (
    <div className='flex flex-row   px-10 space-x-1   lg:space-x-10'>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Key Words</h3>
        <input
        onChange={(e) => setKeywords(e.target.value)}
        onKeyUp={handleFilterChange}
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
          placeholder="lot"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Author</h3>
        <input
        onChange={(e) => setAuthor(e.target.value)}
        
        onKeyUp={handleFilterChange}
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
          placeholder="Haddad Amira"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Institutions</h3>
        <input
        onChange={(e) => setInstitutions(e.target.value)}
        onKeyUp={handleFilterChange}
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
          placeholder="ESI Algiers"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <h3 className="text-person-col font-medium text-[80%]">Date Range</h3>
        <DatePicker
                  onKeyDown={handleKeyDown}
          selected={startDate2}
          
          onChange={handleStartDateChange}
          placeholderText="Start Date"
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
        />
      </div>
      <div className="flex flex-col space-y-2 sm:w-full">
        <div className="h-5"></div>
        <DatePicker
                  onKeyDown={handleKeyDown}
          selected={endDate2}
          
          onChange={handleEndDateChange}
          placeholderText="End Date"
          className="w-full xs:h-[38px] h-[30px] p-3 text-sm text-sky-950 border-[3px] text-[15px] rounded-[4px] bg-slate-200 focus:cyan-500 font-medium outline-none placeholder:text-sky-900"
        />
      </div>
    </div>
  );
}

export default Filter;

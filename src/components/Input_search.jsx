/* eslint-disable react/prop-types */
// Input.jsx
import  { useState } from "react";
import '../index.css';
export const Input_search = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [val, setVal] = useState("");

  const handleChange = (e) => {

    setVal(e.target.value);
    if (props.handleChange) {
      props.handleChange(e.target.value);
    }
  };

  return (
    <div className="w-[100%]">
<input required
      onChange={handleChange}
      placeholder={props.placeholder}
      {...(props.type != null ? { type: props.type } : {})}
      className=" outline-none
       bg-transparent border-2 lg:w-[88%] md:w-[78%]  w-[100%]
       sm:w-[75%] sm:mb-0 mb-6 text-[17px]
       pl-[20px]   text-gray-900  lg:text-xl py-2 
       border-sky-950  placeholder:opacity-75
      focus:border-[2px]  focus:text-gray-900 placeholder:text-gray-900 rounded-[4px] mx-auto placeholder-TT-Commons box-border"
      />
     
 
 
    </div>
    
      
   
  );
};
export default Input_search ;
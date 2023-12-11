/* eslint-disable react/prop-types */
// Input.jsx
import  { useState } from "react";
import '../index.css';
export const Input = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    
    setVal(e.target.value);
    e.preventDefault();
    if (props.setValue) {
      props.setValue(e.target.value);
    }
  };

  return (
    <div>
<input required
      onChange={handleChange}
      placeholder={props.placeholder}
      {...(props.type != null ? { type: props.type } : {})}
      
      className="border-cyan-300
       bg-transparent border-2 sm:w-[300px] lg:w-[450px] px-4 h-[50px] sm:h-[60px] text-white  sm:text-xl w-[258.4px] box-border
      focus:border-[2px] focus:border-cyan-300 placeholder:text-cyan-300 rounded-[10px] mx-auto placeholder-TT-Commons0 sm:box-content"
      />
     
 
 
    </div>
    
      
   
  );
};
export default Input ;
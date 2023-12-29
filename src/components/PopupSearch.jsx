/* eslint-disable react/prop-types */
// Popup component (popup.js)
import { Btn } from "./Btn";
function PopupSearch() {


  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="h-[40%] w-[50%] bg-white  rounded flex flex-col p-7 sm:p-0 justify-center gap-y-6 items-center box-content">
<h2 className="text-item-col font-medium  text-center text-[130%]">
You are not connected , To access to this content click Here 
      </h2>
<Btn DarkMode content="Click Here !"/>
   </div>
    </div>
  );
}

export default PopupSearch;

// Popup component (popup.js)
import React from "react";
import succes from "../assets/succes.png";

function Popup({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="h-64 w-96 bg-white  rounded flex flex-col justify-center items-center">
      <button
            className="place-self-end text-item-col text-md bg-sidebar " 
            onClick={onClose}
          >
            x
          </button>
         <img src={succes} className=" h-[45%] w-[30%] mb-12" alt="Success" />
      <h2 className="text-item-col text-[130%]">Changes saved successfully !</h2>
   </div>
    </div>
  );
}

export default Popup;

/* eslint-disable react/prop-types */
import  { useState } from "react";
import trashIcon from '../assets/trash2.png';
import Popup from "./DeletedArticle"; 

function Delete({ visible, onClose }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleSave = () => {
    setShowPopup(true);
  };

  const closeAll = () => {
    onClose();
    setShowPopup(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="h-64 w-96 bg-sidebar  rounded flex flex-col justify-center items-center">
        <button
          className="place-self-end text-item-col text-md bg-sidebar pr-5"
          onClick={closeAll}
        >
          x
        </button>
        <img src={trashIcon} className=" h-[45%] w-[30%] " alt="trashIcon" />
        <h2 className="text-item-col  text-[105%] text-center">
          Are you sure you want to delete this article ?
        </h2>
        <div  className="flex flex-row  space-x-36">
          <button onClick={onClose} className="bg-sidebar text-person-col text-md">Cancel</button>
          <button onClick={handleSave} className="bg-sidebar text-delete text-md">Delete</button>
        </div>
        <Popup visible={showPopup} onClose={closeAll} /> 
      </div>
    </div>
  );
}

export default Delete;
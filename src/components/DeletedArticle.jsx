import React from "react";
import succes from "../assets/succes.png";
import { useNavigate, useParams } from 'react-router-dom';


function Popup({ visible, onClose }) {
  if (!visible) return null;
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/ArticlesList')
    
  };

  return (
    <div className="fixed inset-0flex justify-center items-center">
      <div className="h-64 w-96 bg-white  rounded flex flex-col justify-center items-center">
        <button
          className="place-self-end text-item-col text-md bg-sidebar pr-5"
          onClick={handleClose}
        >
          x
        </button>
        <img src={succes} className=" h-[45%] w-[30%] mb-12" alt="Success" />
        <h2 className="text-item-col text-[130%]">Article Deleted Successfully !</h2>
      </div>
    </div>
  );
}

export default Popup;
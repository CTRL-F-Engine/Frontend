import React, { useState } from 'react';
import { ModeratorsList } from '../components/ModeratorsList';
import editIcon from '../assets/edit.png';
import trashIcon from '../assets/trash.png';
import Modal from '../components/modal';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// Import the custom CSS
import '../App.css';

function Notcool() {
  const [showModal, setShowModal] = useState(false);
  const [selectedModerator, setSelectedModerator] = useState('');

  const handleSave = (moderatorName) => {
    const moderatorIndex = ModeratorsList.findIndex((moderator) => moderator.Moderator === moderatorName);

    if (moderatorIndex !== -1) {
      const updatedModeratorsList = [...ModeratorsList];
      updatedModeratorsList.splice(moderatorIndex, 1);
      ModeratorsList.length = 0;
      ModeratorsList.push(...updatedModeratorsList);
    }

    setSelectedModerator(moderatorName);
    setShowModal(true);
  };
  return (
    <div className='admin flex flex-row w-screen bg-page-col h-[100vh]'>
      <Sidebar />
    <div className="flex flex-auto flex-col ml-[5%] mt-8 mr-[5%] overflow-x-auto scrollbar-thin scrollbar-thumb-white ">
      <h1 className="text-person-col text-5xl whitespace-nowrap">List Of Moderators</h1>
      <div className="bg-sidebar space-y-8 mt-10 h-96 sm:h-[450px] sm:w-[80%] w-[90%]  text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white">
        {ModeratorsList.map((moderator, index) => (
          <div key={index} className="flex flex-row sm:space-x-5 space-x-3 ">
            <div className="w-10 h-10 flex-shrink-0 ">
            {index === 0 ? (
                  <h3 className='mb-3'>Photo</h3>
                ) : null}
              <img src={moderator.Photo} alt={moderator.Moderator} className="w-full h-full rounded-md mb-2" />
            </div>
            
            <div className="w-36 flex-shrink-0">
            {index === 0 ? (
                  <h3 className='mb-5'>Moderator</h3>
                ) : null}
              <span className="text-person-col">{moderator.Moderator}</span>
            </div>
            
            <div className="w-44 flex-shrink-0">
            {index === 0 ? (
                  <h3 className='mb-5'>Email</h3>
                ) : null}
              <span className="text-person-col">{moderator.Email}</span>
            </div>
            
            <div className="w-36 flex-shrink-0">
            {index === 0 ? (
                  <h3 className='mb-5'>Phone Number</h3>
                ) : null}
              <span className="text-person-col">{moderator.Phone}</span>
            </div>
            
            <div className="w-28 flex-shrink-0">
            {index === 0 ? (
                  <h3 className='mb-5 pl-3'>Action</h3>
                ) : null}
              <div className="flex flex-row space-x-2">
                <Link to="/modify-moderator">
                  <a href={moderator.link} target="_blank">
                    <img src={editIcon} alt="Edit" className="w-8 h-6 cursor-pointer" />
                  </a>
                </Link>
                <img
                  src={trashIcon}
                  alt="Delete"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => handleSave(moderator.Moderator)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div  className="flex  h-[31.2vh] sm:h-[15.4vh] " ></div>
      <Modal visible={showModal} onClose={() => setShowModal(false)} moderatorName={selectedModerator} />
    </div>
    </div>
  );
}

export default Notcool;

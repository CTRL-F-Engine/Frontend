import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import editIcon from '../assets/edit.png';
import trashIcon from '../assets/trash.png';
import Modal from '../components/modal';
import Sidebar from '../components/Sidebar';

function Notcool() {
    const [moderators, setModerators] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedModerator, setSelectedModerator] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token=localStorage.getItem("access")
                let token2 = token.replace(/"/g, '');
                const response = await axios.get('http://127.0.0.1:8000/manage/moderators/',{
                  headers:{
                    Authorization:`Bearer ${token2}`,
                  },
                });
                setModerators(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once

    const handleDelete = async (moderatorId,moderatorUsername) => {
      try {
          const token = localStorage.getItem("access");
          let token2 = token.replace(/"/g, '');
          await axios.delete(`http://127.0.0.1:8000/manage/delete-moderator/${moderatorId}`, {
              headers: {
                  Authorization: `Bearer ${token2}`,
              },
          });
  
          // Update the state based on the previous state
          setSelectedModerator(moderatorUsername);
          setShowModal(true);
          setModerators((prevModerators) => prevModerators.filter((moderator) => moderator.id !== moderatorId));

      } catch (error) {
          console.error('Error deleting moderator:', error);
      }
  };
  

    const handleEdit = (moderatorId) => {
        // Implement the edit functionality or navigate to the edit page
        
    };

    const handleSave = (moderatorUsername) => {
        setSelectedModerator(moderatorName);
        setShowModal(true);
    };

    return (
        <div className='flex flex-row w-screen bg-page-col '>
            <Sidebar />
            <div className="flex flex-auto flex-col ml-[5%] mt-[3%] mr-[5%] overflow-x-auto scrollbar-thin scrollbar-thumb-white ">
                <h1 className="text-person-col text-[300%]">List Of Moderators</h1>
                <div className="bg-sidebar space-y-8 mt-10 h-96 lg:h-[500px] md:h-[470px] w-[95%]  text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white">
                <div className="flex flex-row space-x-20">
                        <div className="w-10 h-10 flex-shrink-0">
                            <h3 className='mb-3'>Photo</h3>
                        </div>
                        <div className="w-40 flex-shrink-0">
                            <h3 className='mb-5'>Moderator</h3>
                        </div>
                        <div className="w-52 flex-shrink-0">
                            <h3 className='mb-5'>Email</h3>
                        </div>
                        <div className="w-40 flex-shrink-0">
                            <h3 className='mb-5'>Phone Number</h3>
                        </div>
                        <div className="w-28 flex-shrink-0">
                            <h3 className='mb-5 pl-3'>Action</h3>
                        </div>
                    </div>

                    {moderators.map((moderator) => (
                        <div key={moderator.id} className="flex flex-row space-x-20 ">
                            <div className="w-10 h-10 flex-shrink-0 ">
		         	    <img src={moderator.Photo} alt={moderator.photo} 				className="w-full h-full rounded-md mb-2" />
            </div>
            
            <div className="w-40 flex-shrink-0">
              
              <span className="text-person-col">{moderator.username}</span>
            </div>
            
            <div className="w-52 flex-shrink-0">
              
              <span className="text-person-col">{moderator.email}</span>
            </div>
            
            <div className="w-40 flex-shrink-0">
              
              <span className="text-person-col">{moderator.phone}</span>
            </div>
            

                            <div className="w-28 flex-shrink-0">
                                
                                <div className="flex flex-row space-x-2">
                                    <Link to={`/modify-moderator/${moderator.id}`}>
                                        <img src={editIcon} alt="Edit" className="w-8 h-6 cursor-pointer" />
                                    </Link>
                                    <img
                                        src={trashIcon}
                                        alt="Delete"
                                        className="w-6 h-6 cursor-pointer"
                                        onClick={() => handleDelete(moderator.id,moderator.username)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal visible={showModal} onClose={() => setShowModal(false)} moderatorName={selectedModerator} />
            </div>
        </div>
    );
}

export default Notcool;

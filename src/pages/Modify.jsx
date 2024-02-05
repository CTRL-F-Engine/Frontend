import React, { useState,useEffect } from "react";
import Col1 from "../components/Col1M";
import Col2 from "../components/Col2M";
import Popup from "../components/popupM";
import Sidebar from '../components/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Content() {
  // Initialize state with the moderator data
  const [moderator, setModerator] = useState({
    FullName: '',
    username: '',
    link: '',
    description: '',
    email: '',
    password: '',
    PhoneNumber: '',
  });
  
  
  const [isEditMode, setIsEditMode] = useState(false);
  //l'affichage des infos de l'utilisateur 
  const moderatorId=useParams()
  const id =moderatorId.id
  useEffect(() => {
    
    const fetchUserData = async () => {
      
      try {
        
        
        const token=localStorage.getItem("access")
      let token2 = token.replace(/"/g, '');
        const response = await fetch(`http://127.0.0.1:8000/manage/modify-moderator/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token2}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          
          setModerator(userData);
          
          setIsEditMode(true); // Enable edit mode since you have fetched existing user data
          console.log(userData)
        } else {
          // Handle error
          console.error("Error fetching user data");
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  // Handle input changes
  const handleInputChange = (key, value) => {
    
      setModerator((prevModerator) => ({
        ...prevModerator,
        [key]: value,
      }));
    
  };

  // Handle save action
  const handleSave = async () => {
    
  
    try {
      const formData = new FormData();
  
      formData.append('email', moderator.email);
      formData.append('username', moderator.username);
      formData.append('FullName', moderator.FullName);
      formData.append('PhoneNumber', moderator.PhoneNumber);
      const token = localStorage.getItem('access');
      let token2 = token.replace(/"/g, '');
  
      const response = await fetch(`http://127.0.0.1:8000/manage/modify-moderator/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token2}`,
        },
        body: formData,
      });
      console.log(response.status)
      if (response.status === 200) {
        setShowpopup(true);
      } else {
        const errorText = await response.text();
        toast.error(`${errorText}`);
      }
    } catch (error) {
      toast.error("There was an issue. Please, try again.");
    }
  };

  /****** 
  useEffect(() => {
    // Fetch moderator data from the API endpoint
    fetch("YOUR_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setModerator(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this effect runs once after mount
*/

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showpopup, setShowpopup]=useState(false);
  return (
    <div className='admin flex flex-row w-screen  bg-page-col h-[100vh]'>
      <Sidebar />

    <div className="flex flex-auto flex-col  ml-[3%] mt-8 mr-[3%] ">
      <h1 className="text-person-col text-5xl whitespace-nowrap">Modify Moderator</h1>
      <div className="bg-sidebar sm:mt-10 mt-5 sm:h-80 h-96  rounded-md shadow p-9 sm:pt-12 pt-6 flex sm:flex-row flex-col sm:space-x-10">

        <Col1 props={{ moderator, handleInputChange }} />
        <Col2 props={{ moderator, handleInputChange }} />
      </div>
    

      <div className="flex flex-auto flex-col place-items-end  " >
      
      <button
        className="mt-[8%]  sm:w-[110px] w-full box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleSave}  

      >
        Save
      </button>
      </div>
      <Popup visible={showpopup} onClose={() => setShowpopup(false)} />
    </div>
    </div>
  );
}

export default Content;
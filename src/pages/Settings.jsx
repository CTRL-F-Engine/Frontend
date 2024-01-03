import React, { useState,useEffect } from "react";
import Col1 from "../components/Col1S";
import imag from '../assets/pdp.png';
import Col2 from "../components/Col2S";
import Popup from "../components/popupS";
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Content() {
  const [showpopup, setShowpopup]=useState(false);
  const [user, setuser] = useState({
    FullName: '',
    username: '',
    
    photo: '',
    //description: 'Administrator',
    email:'',
      password:'',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  //l'affichage des infos de l'utilisateur :
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token=localStorage.getItem("access")
      let token2 = token.replace(/"/g, '');
        const response = await fetch("http://127.0.0.1:8000/manage/settings/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token2}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setuser(userData);
          
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
    if (key === 'password') {
      setuser((prevuser) => ({
        ...prevuser,
        password: value,
      }));
    } else if (key === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setuser((prevuser) => ({
        ...prevuser,
        [key]: value,
      }));
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    const reader = new FileReader();
    reader.onload = () => {
      setuser((prevuser) => ({
        ...prevuser,
        photo: file, // Store the actual file, not the data URL
      }));
    };
  
    reader.readAsDataURL(file);
    console.log(file)
  };
  
  
  // Handle save action
  const handleSave = async () => {
    if (user.password && user.password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
  
    try {
      const formData = new FormData();
  
      formData.append('email', user.email);
      formData.append('username', user.username);
      formData.append('password', user.password || '');  // Password can be empty if not changed
      formData.append('FullName', user.FullName);
      formData.append('photo', user.photo);  // Append the actual file
      console.log(user.photo)
      const token = localStorage.getItem('access');
      let token2 = token.replace(/"/g, '');
  
      const response = await fetch("http://127.0.0.1:8000/manage/settings/", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token2}`,
        },
        body: formData,
      });
  
      if (response.status === 202) {
        window.location.reload();
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
    // Fetch user data from the API endpoint
    fetch("YOUR_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => {
        // Update state with the fetched data
        setuser(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this effect runs once after mount
*/



  return (
    <div className='flex flex-row w-screen  bg-page-col'>
      <Sidebar />
    <div className="flex flex-auto flex-col relative ml-[5%] mt-[3%] mr-[5%]">
      <h1 className="text-person-col text-[300%] ">Settings</h1>
      <div className="bg-sidebar sm:mt-10 sm:h-[70%]  rounded-md shadow p-9 sm:pt-12 pt-6 flex flex-row space-x-24">
        <Col1 props={{user,handleInputChange}} />
        <Col2 props={{ user, handleImageChange }} />
      </div>
      
      <button
        className="absolute right-0  bottom-5 w-[110px]  box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleSave}
      >
        Save
      </button>
      <Popup visible={showpopup} onClose={() => setShowpopup(false)} />
    </div>
    </div>
  );
}

export default Content;
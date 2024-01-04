import React, { useState } from "react";
import Moderator from "../components/Moderator";
import Col1 from "../components/Col1A";
import Col2 from "../components/Col2A";
import Popup from "../components/popupA";
import Sidebar from '../components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Content() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleAddModerator = async () => {
    if ( !email ||  !username ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      
      const token=localStorage.getItem("access")
      let token2 = token.replace(/"/g, '');
      console.log(token)
      console.log(token2)
      const response = await fetch("http://127.0.0.1:8000/manage/add-moderator/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token2}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
        }),
      });
      console.log(response.status)
      if (response.status===201) {
        console.log("hellllooooooo")
        // Successfully added moderator to the database
        setShowPopup(true);
        // You may also update the local state or perform any other actions
      } else {
        // Handle error
        const errorText = await response.text();
        toast.error(errorText)
      }
    } catch (error) {
      toast.error("There was an issue.Please, try again .")
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className='flex flex-row  w-screen bg-page-col '>
      <Sidebar />
    <div className="flex flex-auto flex-col ml-[3%] mt-[3%] mr-[3%] relative">
      <h1 className="text-person-col sm:text-[300%] text-[250%] ">Add Moderator</h1>
      <div className="bg-sidebar sm:mt-10 mt-5 sm:h-[60%] h-[70%]  rounded-md shadow p-9 sm:pt-12 pt-6 flex sm:flex-row flex-col sm:space-x-10">
        <Col1
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Col2
          username={username}
          setUsername={setUsername}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      </div>
      
      <button
        className="absolute right-0 sm:bottom-12 bottom-6 sm:w-[110px] w-[100%] box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleAddModerator} 
      >
        Add
      </button>
      <Popup visible={showPopup} onClose={() => setShowPopup(false)} />
     
      
    </div>
    </div>
  );
}

export default Content;

/**
 *  <div className="mt-4 space-y-4 text-person-col">
        {moderators.map((moderator) => (
          <Moderator key={moderator.email} {...moderator} />
        ))}
      </div>
 */
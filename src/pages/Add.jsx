import React, { useState } from "react";
import Moderator from "../components/Moderator";
import Col1 from "../components/Col1A";
import Col2 from "../components/Col2A";
import Popup from "../components/popupA";
import Sidebar from '../components/Sidebar';

function Content() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showpopup, setShowpopup] = useState(false);

  const handleAddModerator = async () => {
    if (!fullName || !email || !password || !username || !phoneNumber || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT/moderators", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          username,
          phoneNumber,
        }),
      });

      if (response.ok) {
        // Successfully added moderator to the database
        setShowPopup(true);
        // You may also update the local state or perform any other actions
      } else {
        // Handle error
        alert("Failed to add moderator. Please try again.");
      }
    } catch (error) {
      console.error("Error adding moderator:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className='flex flex-row w-screen  bg-page-col h-[100vh]'>
      <Sidebar />
    <div className="flex flex-auto flex-col ml-[3%] mt-8 mr-[3%] ">
      <h1 className="text-person-col text-5xl whitespace-nowrap">Add Moderator</h1>
      <div className="bg-sidebar sm:mt-10 mt-5 sm:h-96 h-[475px]  rounded-md shadow p-9 sm:pt-12 pt-6 flex sm:flex-row flex-col -space-y-10 sm:space-y-0 sm:space-x-10">
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
      
     
      <div className="flex flex-auto flex-col place-items-end " >
      
      <button
        className="mt-[8%]  sm:w-[110px] w-full box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleAddModerator}  
      >
        Add
      </button>
      </div>
      <Popup visible={showpopup} onClose={() => setShowpopup(false)} />
     
      
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

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import  { useState } from "react";
import Col1 from "./Col3";
import Col2 from "./Col4";
import Popup from "./popup3";

function Content3() {
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
    <div className="flex flex-auto flex-col  ml-[3%] mt-[3%] mr-[3%]">
      <h1 className="text-person-col text-[300%] ">Add Moderator</h1>
      <div className="bg-sidebar mt-10 h-[60%]  rounded-md shadow p-9 pt-12 flex flex-row space-x-10">
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
        className="absolute right-[3%] bottom-[10%] text-sidebar pl-12 text-[20px] flex items-center bg-person-col h-12 w-36"
        onClick={handleAddModerator}
      >
        Add
      </button>
      <Popup visible={showpopup} onClose={() => setShowpopup(false)} />
     
      
    </div>
  );
}

export default Content3;

/**
 *  <div className="mt-4 space-y-4 text-person-col">
        {moderators.map((moderator) => (
          <Moderator key={moderator.email} {...moderator} />
        ))}
      </div>
 */
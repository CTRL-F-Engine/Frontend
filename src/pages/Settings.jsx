import React, { useState } from "react";
import Col1 from "../components/Col1S";
import imag from '../assets/pdp.png';
import Col2 from "../components/Col2S";
import Popup from "../components/popupS";
import Sidebar from '../components/Sidebar';

function Content() {
  const [showpopup, setShowpopup]=useState(false);
  const [user, setuser] = useState({
    title: 'Abla RABIA',
    username: 'Abla_08',
    link: '',
    img: imag,
    description: 'Administrator',
    Email:'la_rabii@esi.dz',
      Password:'456',
  });
   // Handle input changes
   const handleInputChange = (key, value) => {
    if (key === 'Password') {
      setuser((prevuser) => ({
        ...prevuser,
        Password: value,
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
  const handleImageChange = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setuser((prevuser) => ({
        ...prevuser,
        img: e.target.result,
      }));
    };

    reader.readAsDataURL(file);
  };
  
  // Handle save action
  const handleSave = () => {
    if (user.Password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setShowpopup(true);
    // Add logic to save the moderator data (e.g., send it to a server)
    console.log("user data saved:", user);
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

const [confirmPassword, setConfirmPassword] = useState('');

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

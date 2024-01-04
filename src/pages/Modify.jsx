import React, { useState } from "react";
import Col1 from "../components/Col1M";
import Col2 from "../components/Col2M";
import Popup from "../components/popupM";
import Sidebar from '../components/Sidebar';
function Content() {
  // Initialize state with the moderator data
  const [moderator, setModerator] = useState({
    fullName: 'Abla RABIA',
    username: 'Abla_08',
    link: '',
    description: 'Administrator',
    email: 'la_rabii@esi.dz',
    password: 'azerty',
    phoneNumber: '+213561739469',
  });

  // Handle input changes
  const handleInputChange = (key, value) => {
    
      setModerator((prevModerator) => ({
        ...prevModerator,
        [key]: value,
      }));
    
  };

  // Handle save action
  const handleSave = () => {
   
    setShowpopup(true);
    // Add logic to save the moderator data (e.g., send it to a server)
    console.log("Moderator data saved:", moderator);
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
    <div className='flex flex-row w-screen  bg-page-col'>
      <Sidebar />
    <div className="flex flex-auto flex-col  ml-[3%] mt-8 mr-[3%] ">
      <h1 className="text-person-col text-5xl whitespace-nowrap">Modify Moderator</h1>
      <div className="bg-sidebar sm:mt-10 mt-5 sm:h-80 h-96  rounded-md shadow p-9 sm:pt-12 pt-6 flex sm:flex-row flex-col sm:space-x-10">
        <Col1 props={{ moderator, handleInputChange }} />
        <Col2 props={{ moderator, handleInputChange }} />
      </div>
    
      <div className="flex flex-auto flex-col place-items-end h-[34vh] sm:h-[40vh] " >
      
      <button
        className="sm:mt-24 mt-5  sm:w-[110px] w-full box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
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

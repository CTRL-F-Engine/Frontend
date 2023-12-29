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
    <div className='flex flex-row w-screen  '>
      <Sidebar />
    <div className="flex flex-auto flex-col  ml-[3%] mt-[3%] mr-[3%]">
      <h1 className="text-person-col text-[300%] ">Modify Moderator</h1>
      <div className="bg-sidebar mt-10 h-[50%]  rounded-md shadow p-9 pt-12 flex flex-row space-x-10">
        <Col1 props={{ moderator, handleInputChange }} />
        <Col2 props={{ moderator, handleInputChange }} />
      </div>
      <button
        className="absolute right-[3%] bottom-[10%] text-sidebar pl-12 text-[20px] flex items-center bg-person-col h-12 w-36"
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

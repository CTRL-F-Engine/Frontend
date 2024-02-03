import React, {useState} from 'react'
import ModeratorSidebar from '../components/ModeratorSidebar'
import Row1 from '../components/Row1';
import Row2 from '../components/Row2';
import imag from '../assets/pdp.png';
import Popup from "../components/popupS";

const ModeratorSettings = () => {
    const [showpopup, setShowpopup]=useState(false);
    const [user, setuser] = useState({
      title: 'Bendahmane',
      username: 'Nesrine',
      link: '',
      img: imag,
      Email:'ln_bend@esi.dz',  
        Password:'12345',
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
      console.log("moderator data saved", user);
    };

  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div className='admin flex flex-row w-screen  bg-admin-bg v-[100vh]'>
      <ModeratorSidebar />
    <div className="flex flex-auto flex-col relative ml-[5%] mt-8 mr-[5%]">
      <h1 className="text-text-col text-5xl whitespace-nowrap">Settings</h1>
      <div className="bg-sidebar mt-5 h-[430px] sm:h-[460px] rounded-md shadow p-9 sm:pt-12 pt-6 flex flex-row space-x-24">
        <Row1 props={{user,handleInputChange}} />
        <Row2 props={{ user, handleImageChange }} />
      </div>
      
      <div className="flex flex-auto flex-col place-items-end h-[27.6vh] sm:h-[23.65vh]" >
      
      <button
        className="sm:mt-24 mt-5  sm:w-[110px] box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-text-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleSave} 
      >
        Save
      </button>
      </div>
      <Popup visible={showpopup} onClose={() => setShowpopup(false)} />
    </div>
    </div> 
  )
}

export default ModeratorSettings
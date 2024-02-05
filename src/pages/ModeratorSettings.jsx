import React, {useState,useEffect} from 'react'
import ModeratorSidebar from '../components/ModeratorSidebar'
import Row1 from '../components/Row1';
import Row2 from '../components/Row2';
import imag from '../assets/pdp.png';
import Popup from "../components/popupS";
import { ToastContainer, toast } from 'react-toastify';

const ModeratorSettings = () => {
    const [showpopup, setShowpopup]=useState(false);
    const [photoChanged,setphotoChanged]=useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setuser] = useState({
      FullName: '',
      username: '',
      
      photo: '',
      
      email:'',
        password:'',
    });
    const [isEditMode, setIsEditMode] = useState(false);
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          
          const token=localStorage.getItem("access")
        let token2 = token.replace(/"/g, '');
          const response = await fetch("http://127.0.0.1:8000/moderate/settings/", {
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
    const [imgUrl,setimgUrl]=useState('')
    const handleImageChange = (e) => {
      const file = e.target.files[0];
    
      const reader = new FileReader();
      reader.onload = () => {
        setuser((prevuser) => ({
          ...prevuser,
          photo: file, // Store the actual file, not the data URL
        }));
      };
      setimgUrl(`http://127.0.0.1:8000/profile_pictures/profile_pictures/${file.name}`)
      setphotoChanged(true)
    
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
        console.log("ablus")
        if (photoChanged){
          
          formData.append('photo', user.photo);  // Append the actual file
        
        }
        
        
        
        const token = localStorage.getItem('access');
        let token2 = token.replace(/"/g, '');
    
        const response = await fetch("http://127.0.0.1:8000/moderate/settings/", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token2}`,
          },
          body: formData,
        });
    
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
  return (
    <div className='admin flex flex-row w-screen  bg-admin-bg v-[100vh]'>
      <ModeratorSidebar />
    <div className="flex flex-auto flex-col relative ml-[5%] mt-8 mr-[5%]">
      <h1 className="text-text-col text-5xl whitespace-nowrap">Settings</h1>
      <div className="bg-sidebar mt-5 h-[430px] sm:h-[460px] rounded-md shadow p-9 sm:pt-12 pt-6 flex flex-row space-x-24">
        <Row1 props={{user,handleInputChange}} />
        <Row2 props={{ user, handleImageChange ,imgUrl}} />
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
import React, { useState ,useContext,useEffect }  from 'react';
import '../App.css';
import imag from '../assets/pdp.png'
import SidebarHeader from './SidebarHeader2';
import logg from '../assets/log-out.png';
import ArtList from '../assets/ArtList.png'
import EditS from '../assets/EditS.png'
import Settings from '../assets/settings.png'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const user1 = [
  {
    title: '',
    img: imag, 
    link: '',
    description: '',
    Email:'',
    Password:'',
  },
];

function ModeratorSidebar() {
  const {isConnected,setIsConnected} = useContext(AuthContext)
  const storedUser = JSON.parse(localStorage.getItem('User'));
  const user_type = storedUser ? storedUser.user_type : null;
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(()=>{
    if (!isConnected  || user_type!=='moderator'){
      if (!isConnected){
        navigate('/Login')
        toast.error("You have to connect first !")
      }else{
        navigate('/')
        toast.error("You do not have permissions to access to this link !")
      }
      
      
    }
    
  },[])
  const navigate = useNavigate();
  const {AuthTokens,setAuthTokens} = useContext(AuthContext)
  const {user,setUser} = useContext(AuthContext)
  const handleLogout=async()=>{
    setAuthTokens(null)
    setUser(null)
    setIsConnected(false)
    localStorage.removeItem("authTokens")
    toast.success("User logged out successfully!")
    navigate('/Login')
}
  return (
    <div className="flex flex-col  h-screen bg-sidebar p-0 lg:w-64 md:w-60 w-48">
      <SidebarHeader  />
      <ul className="w-full list-none flex-col  justify-start flex-end lg:mb-60 md:mb-48 mb-44">
      <Link to="/ArticlesList">
      <li
          key="List of Articles"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'List of Articles' ? 'bg-admin-bg border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('List of Articles');
          }}
        >
          <img src={ArtList} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>List of Articles</div>
        </li>
       </Link>

       <Link to="/Article_editing">
      <li
          key="Article Editing"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'Article Editing' ? 'bg-admin-bg border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('Article Editing');
          }}
        >
          <img src={EditS} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Article Edting</div>
        </li>
       </Link>
       <Link to="/ModeratorSettings">
      <li
          key="Settings"
          className={`w-full cursor-pointer m-0 h-12 flex text-left justify-center items-center space-x-4 hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${
            selectedItem === 'Settings' ? 'bg-page-col border-l-4 border-black' : ''
          }`}
          onClick={() => {
            setSelectedItem('Settings');
          }}
        >
          <img src={Settings} className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Settings</div>
        </li>
       </Link>
       </ul>
       <ul className="w-full list-none flex-col  items-start justify-start mt-[60%]">

        <li
          className={`w-full cursor-pointer m-0 h-12 space-x-4 flex flex-row justify-center items-center  hover:border-l-4 hover:border-black text-item-col opacity-50 hover:opacity-100 ${selectedItem === 'logout' ? 'bg-page-col border-l-4 border-black': ''}`}
          onClick={handleLogout}
        >
          <img src={logg}className="lg:w-[24px] lg:h-[24px] md:h-[20px] md:w-[20px] h-[16px] w-[16px]" />
          <div className='lg:w-[80%] lg:text-[17px] md:w-[85%] md:text-[15px] w-[80%] text-[13px]'>Log Out</div>
        </li>
      </ul>
    </div>
  );
}

export default ModeratorSidebar;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Search_bar } from "./Search_bar"
import { useState,useContext } from "react";
import { Navbar } from "./Navbar";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from '../assets/logoLong.png';
import AuthContext from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LittleSideBarWhite } from "./LittleSideBarWhite";
import { Link } from "react-router-dom";
export const Navbar2=(props)=>
{    const navigate = useNavigate();

  const [pdp,setPdp]=useState('')
  const storedUser = JSON.parse(localStorage.getItem('User'));
  const user_type = storedUser ? storedUser.user_type : null;

  const {isConnected,setIsConnected} = useContext(AuthContext)

  const [user, setuser] = useState({
    FullName: '',
    username: '',
    
    photo: '',
    
    email:'',
      password:'',
  });
  const getPdp=()=>
  {
    return pdp;
  }
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const token=localStorage.getItem("access")
      let token2 = token.replace(/"/g, '');
        const response = await fetch("http://127.0.0.1:8000/settings/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token2}`,
            "Content-Type": "application/json",
          },
        });
        
        if (response.ok) {
          const userData = await response.json();
          setuser(userData);
          setPdp(`http://127.0.0.1:8000/profile_pictures/profile_pictures/${file.name}`)
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
const [ShowResulet ,setShowResult]=useState(false)
const [LittleNavVisible , setLittleNavVisible]=useState(false);

    const [search,setSearch]=useState('');
    const nav=useRef();
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    const handleReseize=()=>
    {
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>
    {
    window.addEventListener('resize',handleReseize);
    setVisible(windowWidth>=468);
    return ()=>
    {
        window.removeEventListener('resize', handleReseize);
    }
    },[windowWidth])
    useEffect(() => {
      console.log('inside navbar2')
      if (nav.current) {
        props.func(window.innerHeight);
        console.log(nav.current.getBoundingClientRect().top);
      }
    },[]);
    
 const [isVisible, setVisible]=useState(true);
 let handleVisible = () => {
    setVisible(!isVisible);

    if (nav.current) {
      console.log(nav.current.classList);
      nav.current.classList.add('nav')
    }
  };
  const handleSearch=async(e)=>
  {
    if (e.key === "Enter") {
  try {
    const token=localStorage.getItem("access")
    let token2 = token.replace(/"/g, '');
      const response = await fetch(`http://127.0.0.1:8000/search/query=${search}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token2}`,
          "Content-Type": "application/json",
        },
      });
    const data = await response.json();
    console.log("____________________________________")
    console.log(data)
    //setSearchResults(data.results); // Update results based on your API response
    navigate(`/ResultSearch/${encodeURIComponent(search)}`);
  } catch (error) {
    console.error('Error fetching search results:', error);
  }}
  }
  const handleChange=(e)=>
  {
      const data=e.target.value;
      console.log(data) ;
      setSearch(data);
  }
    return (
     ( <div className="w-[100vw] z-20 relative">
{ (<div ref={nav} className={`   ${
        props.sticky && 'fixed top-0 left-0 w-full  shadow-lg ' 
      } ${!props.sticky && 'hidden'} bg-neutral-50 h-[70px] flex  xs:justify-between px-8 xs:px-10 items-center  justify-between `}>
    
{(LittleNavVisible && props.connected)
 && <LittleSideBarWhite/>
} 

 {!props.connected && <div className="xs:hidden  w-[40px] h-[40px]" onClick={handleVisible} >

       <div className="w-[39px] h-[39px] relative">
  <div className="w-[19.50px] h-[19.50px] left-[13px] top-[9.75px] absolute">
    <div className="w-[25px] h-[3.25px] left-0 top-0 absolute bg-slate-400 rounded-[10px]" />
    <div className="w-[25px] h-[3.25px] left-0 top-[8.12px] absolute bg-slate-400 rounded-[10px]" />
    <div className="w-[25px] h-[3.25px] left-0 top-[16.25px] absolute bg-slate-400 rounded-[10px]" />
  </div>
</div> 
        
        </div>}
  
    <div className="relative xs:block hidden border-cyan-500 w-[90%] xs:w-[40%]">
     <div className="flex w-full justify-between gap-x-10 items-center">

     <Link to="/">

      <img src={logo} className=" w-28 mt-[50%] cursor-pointer" />
      </Link>{(isVisible && props.connected) && <input onChange={handleChange} onKeyUp={handleSearch}   className="block w-full p-3 text-sm text-sky-950  border-[3px]  text-[15px]  rounded-[4px] bg-slate-200 focus:cyan-500 font-medium 
   outline-none   placeholder:text-sky-900"
    placeholder="Search" required/>}
  { (isVisible && props.connected) &&<div className="absolute inset-y-0 end-3 flex items-center ps-10 pointer-events-none">
        <svg className="w-3 h-3 text-sky-950 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>}
       </div> 


 
    
</div>
{(isVisible && !props.connected) &&<Navbar mode='dark'/>}
{ props.connected&&<div onClick={()=>
{
  setLittleNavVisible(!LittleNavVisible);
}} className='text-white rounded-full
 bg-white cursor-pointer xs:w-[50px] xs:h-[50px] w-[35px] h-[35px]'>
 <img src={`http://127.0.0.1:8000${user.photo}`} style={{
    borderRadius: '50%', // Make it a circle by setting border-radius to 50%
    objectFit: 'cover', // Ensure the image covers the entire circle without stretching
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
  }}
  />
</div>}
</div>)}
      </div>)
    
    


)
}
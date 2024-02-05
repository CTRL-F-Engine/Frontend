/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState,useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import pdp from '../assets/pdp.png'
import { LittleSideBarWhite } from "./LittleSideBarWhite";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext'
import { Navbar } from "./Navbar";
import { Link } from 'react-router-dom';
import logo from '../assets/logoLong.png';
import { useNavigate } from 'react-router-dom';

export const Navbar3=(props)=>
{
  const navigate = useNavigate();
  
  const [user, setuser] = useState({
    FullName: '',
    username: '',
    
    photo: '',
    
    email:'',
      password:'',
  });
  const {isConnected,setIsConnected} = useContext(AuthContext)
  const storedUser = JSON.parse(localStorage.getItem('User'));
  const user_type = storedUser ? storedUser.user_type : null;
  useEffect(()=>{
    if (!isConnected  || user_type!=='simple'){
      if (!isConnected){
        navigate('/Login')
        toast.error("You have to connect first !")
      }else{
        navigate('/')
        toast.error("You do not have permissions to access to this link !")
      }
      
      
    }
    
  },[])
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
  const getPdp=()=>
  {
    return pdp;
  }

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
    const handleSearch=(e)=>
    {
    e.key==="Enter"?console.log(search):"";
    }
    const handleChange=(e)=>
    {
        setSearch(e.target.value); 
    }
    return (
     ( <div className="w-[100vw] z-20 relative border border-slate-950">
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
      </Link>
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
    objectFit: 'cover', // Ensure the image covers the entire circle without stretchin
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
  }}/>
</div>}
</div>)}
      </div>)
    
    


)
}
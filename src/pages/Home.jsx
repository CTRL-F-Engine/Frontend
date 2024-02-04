/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Standard_button } from '../components/Standard_button';
import { Button } from '../components/Button';
import { LittleSideBar } from '../components/LittleSideBar';
import { Search_bar } from '../components/Search_bar';
import { Navbar } from '../components/Navbar';
import { Navbar2 } from '../components/Navbar2';
import { Article } from '../components/Article';
import img from '../assets/footer.svg';
import AuthContext from '../context/AuthContext'
import pdp from '../assets/pdp.png'
import { Btn } from '../components/Btn';
import Popup from '../components/PopupSearch';

import Wait from '../components/Wait';

import { useNavigate } from 'react-router-dom';
export const Home =()=>
{
  
  const [articles,setArticles]=useState([])
  const [user, setuser] = useState({
    FullName: '',
    username: '',
    
    photo: '',
    
    email:'',
      password:'',
  });
  const navigate = useNavigate();
  const getPdp=()=>
  {
    return pdp;
  }
  const truncateText = (text, limit) => {
    const words = text.split(' ');
    const truncatedText = words.slice(0, limit).join(' ')+ '...';
    return truncatedText;
  };
const [showPopup , setShowPopup]=useState(false);
const [LittleNavVisible , setLittleNavVisible]=useState(false);
const {isConnected} = useContext(AuthContext)
const [ref,setRef]=useState(null);
const [search,setSearch]=useState('');

const [isSticky, setIsSticky] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem('User'));
  const user_type = storedUser ? storedUser.user_type : null;
  useEffect(()=>{
    if (isConnected  && user_type==='admin'){
      navigate('/upload')
      //toast.error("You do not permissions to access to this link !")
    }else if (isConnected && user_type==='moderator'){
      navigate('/ArticlesList')
    }
    
  },[])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("access");
        const token2 = token.replace(/"/g, '');
  
        const response = await fetch(`http://127.0.0.1:8000/homeArticles/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token2}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log(data)
        const truncatedArticles = data.map(article => ({
          ...article,
          content: truncateText(article.content, 50),
        }));
  
        setArticles(truncatedArticles);
        
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
  
    fetchArticles();
  }, []);

  const handleSetPopUp=(val1)=>
  {
    setShowPopup((val1) => !val1);
   console.log(showPopup);
  }
const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); 
      console.log('Data:', data);
    };
    
     useEffect(() => {
      }, [ref]);
     
      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          console.log(ref);
          console.log(isSticky);
          if(ref)
          {
               setIsSticky(offset > window.innerHeight);

          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [ref]);
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
      } catch (error) {
        console.error('Error fetching search results:', error);
      }}
      }
      const handleChange=(e)=>
      {
          setSearch(e.target.value); 
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
    return (
    <div  className='home  w-[100%] h-[100%]'>
<div className='bg-gradient-to-l   from-sky-950 via-slate-800 to-transparent flex justify-end px-8 sm:px-10 items-center h-[70px]'>
{!isConnected && <Navbar />}

{ isConnected&&<div onClick={()=>
{
  setLittleNavVisible(!LittleNavVisible);
}} className='text-white rounded-full
  cursor-pointer xs:w-[50px] xs:h-[50px] w-[35px] h-[35px]'>
 <img src={`http://127.0.0.1:8000${user.photo}`} style={{
    borderRadius: '50%', // Make it a circle by setting border-radius to 50%
    objectFit: 'cover', // Ensure the image covers the entire circle without stretchin
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
  }}/>
</div>}
</div>
{(LittleNavVisible && isConnected) &&<LittleSideBar/>} 

    <div className=" w-[100%] h-[90vh] flex items-center justify-center ">
       <Search_bar func={handleSetPopUp}  disabled={!isConnected}  placeholder="search" onKeyUp={handleSearch} onSearch={handleSearch}
          onChange={handleChange}/>
    </div>
    <Navbar2 func={handleOffset} connected={isConnected} sticky={isSticky}/>
    <div className='relative  z-10  px-8'>

    </div>
      
  
    <h1 className='px-10 mt-8 font-semibold text-2xl text-blue-950 mb-8'>
        Recent
    </h1>
    <div className='px-4 sm:px-10'>
   <hr className='border-2 mb-10 border-blue-950'></hr>
    </div> 
    <div className='grid gap-y-12'>
        {articles.map((article, index) => (
          <React.Fragment key={index}>
            <Article date={article.date} article_id={article.article_id} title={article.article_title} content={article.content} keywords={article.keywords}/>
            <div className='px-4 sm:px-10'>
              <hr className='border-2 border-blue-950'></hr>
            </div>
          </React.Fragment>
        ))}
      </div>
    <div className='h-[70px]'>
    </div>
{!isConnected && window.scrollY>=400 &&<Popup />}
{!isConnected && showPopup &&<Popup />}
<footer className='h-[70px] w-full'>
  <img src={img} />
</footer>
    </div>)
}
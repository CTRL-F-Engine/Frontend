/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Article } from '../components/Article';
import { Appcontext2 } from '../App';
import { Navbar3 } from '../components/Navbar3';
import img from '../assets/footer.svg';
import AuthContext from '../context/AuthContext'

export const Favors =()=>
{

const {isConnected} = useContext(AuthContext)
const [ref,setRef]=useState(null);
const [articles,setArticles]=useState([])
const [isSticky, setIsSticky] = useState(false);
const truncateText = (text, limit) => {
  const words = text.split(' ');
  const truncatedText = words.slice(0, limit).join(' ')+ '...';
  return truncatedText;
};

const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); 
    
      console.log('Data:', data);
    };
    
     
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
      useEffect(() => {
        const fetchUserData = async () => {
          
          try {
            
            const token=localStorage.getItem("access")
          let token2 = token.replace(/"/g, '');
            const response = await fetch(`http://127.0.0.1:8000/favors/`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token2}`,
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              const data = await response.json();
             const truncatedArticles = data.map(article => ({
        ...article,
        content: truncateText(article.content, 50),
      }));

      setArticles(truncatedArticles);
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
    <div  className='w-full h-screen flex flex-col'>

    <Navbar3 func={handleOffset} connected={true} sticky={true}/>
       
  
       <h1 className='px-4 sm:px-10 mt-28 font-semibold text-2xl text-blue-950 mb-8'>
    Favors
    </h1>
    <div className='px-4 sm:px-10'>
   <hr className='border-2 mb-10 border-blue-950'></hr>
    
   <div className='grid gap-y-12'>
        {articles.map((article, index) => (
          <React.Fragment key={index}>
            <Article date={article.date} article_id={article.article_id} title={article.title} content={article.content} keywords={article.keywords}/>
            <div className='px-4 sm:px-10'>
              <hr className='border-2 border-blue-950'></hr>
            </div>
          </React.Fragment>
        ))}
      </div>
    <div className='h-[70px]'>

    </div>
    </div>
    <footer className='h-[70px] w-full'>
  <img src={img} />
</footer> 
  
    </div>)
}

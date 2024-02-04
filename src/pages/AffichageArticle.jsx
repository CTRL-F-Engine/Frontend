/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Article } from '../components/Article';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png'
import AuthContext from '../context/AuthContext'
import { Navbar3 } from '../components/Navbar3';
import { useNavigate, useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import img from '../assets/footer.svg';
import { ArticleAffiché } from '../components/ArticleAffiché';

export const AffichageArticle =()=>
{

const {isConnected} = useContext(AuthContext)
const [ref,setRef]=useState(null);
const [search,setSearch]=useState('');
const [isSticky, setIsSticky] = useState(false);
const [isFilterVisible, setIsFilterVisible] = useState(false);
const navigate = useNavigate();
const [article, setArticle] = useState({
  article_id:'',
  title:'',
  institutions:'',
  authors:'',
  abstract:'',
  keywords:'',
  content:'',
  references:'',
  state:'',
  date:'',
  url:'',
});
const articleId=useParams()
    const article_id =articleId.article_id
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          
          const token=localStorage.getItem("access")
        let token2 = token.replace(/"/g, '');
          const response = await fetch(`http://127.0.0.1:8000/article/${article_id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token2}`,
              "Content-Type": "application/json",
            },
          });
          console.log(articleId)
          if (response.ok) {
            const articleData = await response.json();
            setArticle(articleData);
            console.log(articleData)
            console.log(article)
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

const handleFilterClick = () => {
  setIsFilterVisible(!isFilterVisible);
};
const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); 
    
      console.log('Data:', data);
    };
    useEffect(()=>
    {

    },[isConnected])
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
      const handleSearch=(e)=>
      {
      e.key==="Enter"?console.log(search):"";
      }
      const handleChange=(e)=>
      {
          setSearch(e.target.value); 
      }
    return (
    <div  className='w-full h-screen flex flex-col'>

    <Navbar3 func={handleOffset} connected={true} sticky={true}/>
       
  
       <ArticleAffiché title={article.title} url ={article.url} date={article.date} author={article.authors} Institutions={article.institutions} Abstract={article.abstract} 
       content={article.content} 
       References={article.references}/>
  
   
   
    <footer className='h-[70px] w-full'>
  <img src={img} />
</footer> 
  
    </div>)
}
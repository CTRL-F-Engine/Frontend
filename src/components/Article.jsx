/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState ,useEffect} from 'react';
import myImage from '../assets/bookmark.svg';
import Bookmark2 from '../assets/Bookmark2.png';
import { KeyWord } from './KeyWord';
import { ReadMore } from './ReadMore';

export const Article = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(props.isFavorPage);
  const [keywords,setKeywords]=useState(props.keywords)
  const keys=keywords.split(',');
  const [articleLink,setArticleLink]=useState('')

  const handleSave = async() => {
    const requestBody = {
      article_id: props.article_id
    };
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked){
      try {
        const token=localStorage.getItem("access")
        let token2 = token.replace(/"/g, '');
          const response = await fetch(`http://127.0.0.1:8000/addfv/`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token2}`,
              "Content-Type": "application/json",
            },body: JSON.stringify(requestBody),
          });
        const data = await response.json();
      } catch (error) {
        console.error('Error adding the article to favors');
      }}else{
        try {
          const token=localStorage.getItem("access")
          let token2 = token.replace(/"/g, '');
            const response = await fetch(`http://127.0.0.1:8000/rmfv/`, {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${token2}`,
                "Content-Type": "application/json",
              },body: JSON.stringify(requestBody),
            });
          const data = await response.json();
        } catch (error) {
          console.error('Error removing the article from favors');
        }
      }
      console.log(props.article_id)}

      useEffect(() => {
        const requestBody = {
          article_id: props.article_id
        };
        const fetchUserData = async () => {
          
          try {
          
            console.log(props.article_id)
            const token=localStorage.getItem("access")
          let token2 = token.replace(/"/g, '');
            const response = await fetch(`http://127.0.0.1:8000/isfv/`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token2}`,
                "Content-Type": "application/json",
              },body: JSON.stringify(requestBody),
            });
            if (response.status===200) {
                setIsBookmarked(true)
            }else if (response.status===204) {
              setIsBookmarked(false)
            }}
           catch (error) {
            // Handle error
            console.error("Error fetching user data:", error);
          }
        };
    
        fetchUserData();
      }, []);
  return (
    <div className="sm:px-10 px-4">
      <h1 className="inline mr-3 text-[32px] sm:text-3xl md:text-4xl text-gray-900 font-bold">
        {props.title}
      </h1>
      <span className="text-gray-500 sm:text-[12px] text-[3vw] font-medium">{props.date}</span>
      <p className="font-normal text-justify lg:text-[1.5vw] text-[3.85vw] sm:text-[3vw] md:text-[2vw] text-black text-opacity-70 mt-5">
        {props.content}
      </p>
      <div className="xs:flex grid gap-y-4 mt-10 items-center justify-between">
        <div className="flex sm:gap-x-4 gap-x-2">
        {Array.isArray(keys) && keys.map((keyword, index) => (
        <KeyWord key={index} content={keyword} />
      ))}
        </div>
        <div className="flex justify-end gap-x-3">
        <button onClick={handleSave}>
          <img
            className="sm:w-8 w-5"
            src={isBookmarked ? Bookmark2 : myImage}
            alt="Bookmark"
          />
        </button>
          <ReadMore action={`/AffichageArticle/${props.article_id}`}/>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState ,useEffect} from 'react';
import myImage from '../assets/bookmark.svg';
import Bookmark2 from '../assets/Bookmark2.png';
import { KeyWord } from './KeyWord';
import { Download } from './Download';


export const ArticleAffiché = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

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
      }
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
    <div className='pb-20'>
      <div className='xs:flex grid gap-y-4 px-4 sm:px-10 mt-28 mb-3  space-x-5 items-end justify-between '>
        <div  className='flex justify-end items-end gap-x-3 '>
      <h1 className="inline mr-3 text-[32px] sm:text-3xl md:text-4xl text-gray-900 font-bold">
{props.title}
</h1>
<span className="text-gray-500 sm:text-sm text-xs font-medium">{props.date}</span>
</div>
<div className='flex justify-end gap-x-3 '>
<Download pdfUrl={props.url} />

<button onClick={handleSave}>
            <img
              className="sm:w-8 w-5"
              src={props.isFavorPage ? Bookmark2 : isBookmarked ? Bookmark2 : myImage}
              alt="Bookmark"
            />
          </button>
         </div> 
      </div>
      <div className='px-4 sm:px-10 h-3 '>
        <hr className='border-2 mb-10 border-blue-950'></hr>
      </div> 
        <div className='flex flex-col mt-10'>
        <h1 className='text-black opacity-75 text-2xl px-4 sm:px-10 font-semibold'>Authors</h1>
        <h2 className='text-black opacity-75 text-xl px-4 sm:px-10 font-normal'>{props.author}</h2>
        </div>

        <div className='flex flex-col mt-4'>
        <h1 className='text-black opacity-75 text-2xl px-4 sm:px-10 font-semibold'>Institutions</h1>
        <h2 className='text-black opacity-75 text-xl px-4 sm:px-10 font-normal'>{props.Institutions}</h2>
        </div>
        <div className='flex flex-col mt-4'>
        <h1 className='text-black opacity-75 text-2xl px-4 sm:px-10 font-semibold'>Abstract</h1>
        <p className='text-black opacity-75 text-xl px-4 sm:px-10 font-normal'>{props.Abstract}</p>
        </div>
        <div className='flex flex-col mt-4'>
        <h1 className='text-black opacity-75 text-2xl px-4 sm:px-10 font-semibold'>Key Words</h1>
        <div className="flex flex-row sm:gap-x-4 gap-x-2 mt-3 px-4 sm:px-10">
          <KeyWord content="Data Science" />
          <KeyWord content="Machine Learning" />
          <KeyWord content="NLP" />
          </div>
        </div>
        <div className='mt-4'>
            <p className='text-black opacity-75 text-xl px-4 sm:px-10 font-normal'>{props.content}</p>
        </div>
        <div className='flex flex-col mt-4'>
        <h1 className='text-black opacity-75 text-2xl px-4 sm:px-10 font-semibold'>References</h1>
        <p className='text-black opacity-75 text-xl px-4 sm:px-10 font-normal'>{props.References}</p>
        </div>
    </div>
  );
};
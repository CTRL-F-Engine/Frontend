import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScrollProgressBar from "react-scroll-progress-bar";
import "../index.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Article = () => {
    const { articleId } = useParams();
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    // Other article properties from bdd
  });
    useEffect(() => {
    // Fetch article data based on articleId from the database
    /*fetch(`/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticleData(data))
      .catch((error) => console.error('Error fetching article data:', error));*/
    }, [articleId]);
  const handleContentChange = (content) => {
     setArticleData({
      ...articleData,
      content: content,
     });
    };
    const handleTitleChange = (title) => {
      setArticleData({
       ...articleData,
       title: title,
      });
     };
  return (
    <div  className="flex flex-col bg-sidebar h-96 sm:h-[500px]  w-[80%]  text-item-col rounded-md shadow  overflow-y-auto scrollbar-thin scrollbar-thumb-white">
      <ScrollProgressBar className=" bg-[#01C38D] h-1 w-full" />

        <label>Title:</label>
      <ReactQuill
        value={articleData.title}
        onChange={handleTitleChange}
        modules={{ toolbar: true }}
        theme="snow"
      />

      <label>Content:</label>
      <ReactQuill
        value={articleData.content}
        onChange={handleContentChange}
        modules={{ toolbar: true }}
        theme="snow"
      />
        </div>     
  );
}

export default Article
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ModeratorSidebar from "../components/ModeratorSidebar"
import { ReadMore } from "../components/ReadMore";
import { useState } from "react";
import { FinalBtn } from "../components/FinalBtn";
import { FinalBtn2 } from "../components/FinalBtn2";
import DeleteArticlePopup from "../components/DeleteArticlePopup";
import { useNavigate, useParams } from 'react-router-dom';
import { useContext ,useEffect} from "react";
import Delete from "../components/DeletePopup";

import axios from 'axios';
import { toast } from "react-toastify";
export const EditArticles=(props)=>
{
  const navigate = useNavigate();
  const formattedDateString=new Date().toLocaleDateString();
  var dateParts = formattedDateString.split('/');
  var d = dateParts[2] + '-' + dateParts[0].padStart(2, '0') + '-' + dateParts[1].padStart(2, '0');
  console.log(typeof d);  // Outputs: string
  const [article, setArticle] = useState({
    article_id:0,
    title:'',
    institutions:'',
    authors:'',
    abstract:'',
    keywords:[],
    content:'',
    references:'',
    state:'',
    url:'',
    date:'',

  });
  const [isEditMode, setIsEditMode] = useState(false);
    //const {Article,setArticle} = useContext(Appcontext3)

    const [content,setContent]=useState('');
    const [title,setTitle]=useState('');

    const [showpopup, setShowpopup]=useState(false);
    const [showpopup2, setShowpopup2]=useState(false);
    const articleId=useParams()
    const article_id =articleId.article_id
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          
          const token=localStorage.getItem("access")
        let token2 = token.replace(/"/g, '');
          const response = await fetch(`http://127.0.0.1:8000/moderate/article/${article_id}`, {
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
            
            setIsEditMode(true); // Enable edit mode since you have fetched existing user data
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

    // Handle input changes
  const handleInputChange = (key, value) => {
    
    setArticle((prevArticle) => ({
      ...prevArticle,
      [key]: value,
    }));
  
};
const handleDelete = () => {
  setShowpopup2(true); // Show the confirmation popup
};
const confirmDelete=async()=>
{
  try {
    const token = localStorage.getItem("access");
    let token2 = token.replace(/"/g, '');
    await axios.delete(`http://127.0.0.1:8000/moderate/delete/${article_id}`, {
        headers: {
            Authorization: `Bearer ${token2}`,
        },
    });

    // Update the state based on the previous state
    
    


    

} catch (error) {
    console.error('Error deleting moderator:', error);
}
}
const handleWheel = (e) => {
    e.preventDefault();
  };

  const handleSave=async()=>
  {
    try {
      
      const formData = new FormData();
      
      formData.append('title', article.title);
      formData.append('content', article.content);
      formData.append('references', article.references);
      formData.append('institutions', article.institutions);
      console.log(article.institutions)
      formData.append('authors', article.authors);
      formData.append('keywords', article.keywords.split(','));
      formData.append('abstract', article.abstract);
      formData.append('url', article.url);
      formData.append('state', 'pending');
      formData.append('date', d);

      formData.append('article_id', article.article_id);
  
      
      
      const token = localStorage.getItem('access');
      let token2 = token.replace(/"/g, '');
  
      const response = await fetch(`http://127.0.0.1:8000/moderate/article/${article_id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token2}`,
        },
        body: formData,
      });
      console.log(response.status)
      if (response.status === 200) {
        toast.success('Article saved successfully ! ')
      } else {
        const errorText = await response.text();
        toast.error(`${errorText}`);
      }
    } catch (error) {
      toast.error("There was an issue. Please, try again.");
    }
  }
const handleEdit=async()=>
{
  try {
    const formData = new FormData();

    formData.append('title', article.title);
    formData.append('content', article.content);
    formData.append('references', article.references);
    formData.append('institutions', article.institutions);
    formData.append('authors', article.authors);
    formData.append('keywords', article.keywords.split(','));
    formData.append('abstract', article.abstract);
    formData.append('url', article.url);
    formData.append('date', d);
    formData.append('state', 'done');
    formData.append('article_id', article.article_id);

    
    
    const token = localStorage.getItem('access');
    let token2 = token.replace(/"/g, '');

    const response = await fetch(`http://127.0.0.1:8000/moderate/article/${article_id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token2}`,
      },
      body: formData,
    });
    console.log(response.status)
    if (response.status === 200) {
      setShowpopup(true);
    } else {
      const errorText = await response.text();
      toast.error(`${errorText}`);
    }
  } catch (error) {
    toast.error("There was an issue. Please, try again.");
  }
}
 const textareaStyle = {
        
        /* You can add other styles as needed */
      };
    return (

        <div className='flex  w-screen
        bg-page-col items-center h-[100vh]'>
        <ModeratorSidebar />
        <div  className="mx-auto w-[60%]">
         <h1 className="text-[40px] mb-[30px]">
Article Editing        </h1>
<div className="w-[100%] h-[60vh] rounded-[5px] bg-white mb-10 overflow-auto">
     
     <h1 className="text-[25px]  ">
       </h1>
       <h2 className=" text-[30px] font-bold mb-2 h-[5vh]  p-3 text-[#191E29]">Title</h2>
<textarea style={{
    ...textareaStyle,   // Include any other styles from textareaStyle
    whiteSpace: 'pre-wrap',
    height: 'fit-content', // Set to 'fit-content'
    overflowY: 'hidden', // Remove the vertical scrollbar  // Set your preferred maximum height
  }} onChange={(e) => {handleInputChange("title", e.target.value);console.log(e.target.value)}} className="w-[100%] text-[25px] h-[auto] p-3 outline-none "       onWheel={handleWheel}
 defaultValue={article.title} /> 
     <h2 className=" text-[30px] font-bold mb-2 h-[5vh]  p-3 text-[#191E29]">Authors</h2>
     <textarea
      style={{
        ...textareaStyle,
        
        height: '8vh',
        whiteSpace: 'pre-wrap',
        resize: 'none', // If you want to disable resizing
      }}
      onChange={(e) => handleInputChange("authors", e.target.value)}
      className="w-[100%] text-[25px] p-3 outline-none"
      value={article.authors} // Use value instead of dangerouslySetInnerHTML
    />
 <h2 className=" text-[30px] font-bold mb-2 h-[5vh]  p-3 text-[#191E29]">Institutions</h2>
 <textarea
      style={{
        ...textareaStyle,
        
        height: '20vh',
        whiteSpace: 'pre-wrap',
        resize: 'none', // If you want to disable resizing
      }}
      onChange={(e) => handleInputChange("institutions", e.target.value)}
      className="w-[100%] text-[25px] p-3 outline-none"
      value={article.institutions} // Use value instead of dangerouslySetInnerHTML
    />
 <h2 className=" text-[30px] font-bold mb-2 h-[5vh]  p-3 text-[#191E29]">Abstract</h2>
 <textarea
      style={{
        ...textareaStyle,
        
        height: '30vh',
        whiteSpace: 'pre-wrap',
        resize: 'none', // If you want to disable resizing
      }}
      onChange={(e) => handleInputChange("abstract", e.target.value)}
      className="w-[100%] text-[25px] p-3 outline-none"
      value={article.abstract} // Use value instead of dangerouslySetInnerHTML
    />
 <h2 className=" text-[30px] font-bold mb-2 h-[5vh]  p-3 text-[#191E29]">Keywords</h2>
 <textarea
      style={{
        ...textareaStyle,
        
        height: 'auto',
        whiteSpace: 'pre-wrap',
        resize: 'none', // If you want to disable resizing
      }}
      onChange={(e) => handleInputChange("keywords", e.target.value)}
      className="w-[100%] text-[25px] p-3 outline-none"
      value={article.keywords} // Use value instead of dangerouslySetInnerHTML
    />
 <h2 className=" text-[30px] font-bold mb-2 h-[vh]  p-3 text-[#191E29]">Content</h2>
 <textarea
      style={{
        ...textareaStyle,
        
        height: '50vh',
        whiteSpace: 'pre-wrap',
        resize: 'none', // If you want to disable resizing
      }}
      onChange={(e) => handleInputChange("content", e.target.value)}
      className="w-[100%] text-[25px] p-3 outline-none"
      value={article.content} // Use value instead of dangerouslySetInnerHTML
    />
 <h2 className=" text-[30px] font-bold mb-2 h-[5vh]  p-3 text-[#191E29]">References</h2>
 <textarea
      style={{
        ...textareaStyle,
        
        height: '20vh',
        whiteSpace: 'pre-wrap',
        resize: 'none', // If you want to disable resizing
      }}
      onChange={(e) => handleInputChange("references", e.target.value)}
      className="w-[100%] text-[25px] p-3 outline-none"
      value={article.references} // Use value instead of dangerouslySetInnerHTML
    />

     </div>
<div>
     {/* <Button
            reset={"hh"} content={"hhh"} />  */}
    <div className="flex justify-end gap-x-3 mr-2">
     
        <div onClick={handleDelete}>
        <FinalBtn2 content="Delete"/> 
            </div> 
            <div onClick={handleSave}>
        
        <FinalBtn content="Save"/>
        </div> 
            <div onClick={handleEdit}>
        
        <FinalBtn content="Finish"/>
        </div> 
    </div>
</div>
        </div>
    <DeleteArticlePopup visible={showpopup} onClose={() => {setShowpopup(false);
    navigate('/ArticlesList')}}/>   
    <Delete visible={showpopup2}  onConfirm={confirmDelete} onClose={() => setShowpopup2(false)} /> 
      </div>
    )
}
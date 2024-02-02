/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ModeratorSidebar from "../components/ModeratorSidebar"
import { ReadMore } from "../components/ReadMore";
import { useState } from "react";
import { FinalBtn } from "../components/FinalBtn";
import DeleteArticlePopup from "../components/DeleteArticlePopup";
import { Appcontext3 } from '../App';
import { useContext } from "react";
import Delete from "../components/DeletePopup";
export const EditArticles=(props)=>
{
    const {Article,setArticle} = useContext(Appcontext3)

    const [content,setContent]=useState('');
    const [title,setTitle]=useState('');

    const [showpopup, setShowpopup]=useState(false);
    const [showpopup2, setShowpopup2]=useState(false);

const handleDelete=()=>
{
setShowpopup2(true);
}
const handleWheel = (e) => {
    e.preventDefault();
  };
const handleEdit=()=>
{
    setShowpopup(true)
}
 const textareaStyle = {
        resize: 'none',
        /* You can add other styles as needed */
      };
    return (

        <div className='flex  w-screen
        bg-page-col items-center h-[100vh]'>
        <ModeratorSidebar />
        <div  className="mx-auto w-[60%]">
         <h1 className="text-[40px] mb-[30px]">
Article Editing        </h1>
     <div className="w-[100%]  h-[60vh] rounded-[5px] bg-white mb-10">
     <h1 className="text-[25px]  ">
       </h1>
<textarea style={textareaStyle} className="text-[25px] h-[9vh] p-3 outline-none"       onWheel={handleWheel}
 defaultValue="Article01" /> 
<textarea  style={textareaStyle} defaultValue="What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from" className=" w-[100%] h-[52vh] text-slate-600 text-[20px] pt-0 p-3 outline-none"/>
     </div>
<div>
     {/* <Button
            reset={"hh"} content={"hhh"} />  */}
    <div className="flex justify-end gap-x-3 mr-2">
     <div onClick={handleEdit}>
        
        <FinalBtn content="Finish"/>
        </div> 
        <div onClick={handleDelete}>
        <FinalBtn content="Delete"/> 
            </div> 
    </div>
</div>
        </div>
    <DeleteArticlePopup visible={showpopup} onClose={() => setShowpopup(false)}/>   
    <Delete visible={showpopup2} onClose={() => setShowpopup2(false)} /> 
      </div>
    )
}
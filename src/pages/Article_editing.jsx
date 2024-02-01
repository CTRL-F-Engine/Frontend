import React from 'react';
import Article from '../components/Editarticle';
import ModeratorSidebar from '../components/ModeratorSidebar'
import Popup from "../components/SaveArticlePopup"
import DPopup from "../components/DeleteArticle"
import '../index.css'

const Article_editing = () => {
  const [showDPopup, setShowDPopup] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  // Handle finish
  const handleFinish = () => {
    setShowpopup(true);
  };
  const handleSave = () => {
    //deleting logique
    setShowDPopup(true);
  };
    


  return (
    <div className='flex flex-row bg-admin-bg'>
      <ModeratorSidebar/>
      <div className='flex flex-auto flex-col relative ml-[5%] mt-8 mr-[5%]'>
        <h1 className='text-text-col text-5xl whitespace-nowrap'>Article Editing</h1>
        <div  className="bg-sidebar space-y-8 mt-10 h-96 sm:h-[500px]  w-[80%] ">
          <Article/>
        </div>    
        <div className="flex flex-auto flex-row space-x-1" >
      <button
        className="mt-[8%]  sm:w-[110px] w-full box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleFinish}  
      >
        Finish
      </button>
      <button
        className="mt-[8%]  sm:w-[110px] w-full box-border xs:h-[38px] h-[30px] text-[13px] sm:text-[15px] font-medium sm:font-bold  text-sidebar  bg-person-col font-['TT Commons'] sm:px-4 px-2 sm:rounded-[5px] rounded-[3px]"
        onClick={handleSave}  
      >
        Delete
      </button>
      </div> 
      </div>

      <Popup visible={showpopup} onClose={() => setShowpopup(false)} />
      <DPopup visible={showDPopup} onClose={() => setShowDPopup(false)}  />

    </div>
  )
}

export default Article_editing
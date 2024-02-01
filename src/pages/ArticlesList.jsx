import React,{useState} from 'react'
import "../index.css"
import ModeratorSidebare from '../components/ModeratorSidebar'
import Kindof_list from '../components/Kindof_list';
import List_pending from '../components/List_pending';

const ArticlesList = () => {
    const [currentList, setCurrentList] = useState(List_pending);
  return (
    <div className='flex flex-row bg-admin-bg w-screen h-[100vh]'>
        <ModeratorSidebare/>
        <div className='flex flex-auto flex-col relative ml-[5%] mt-8 mr-[5%] overflow-x-auto scrollbar-thin scrollbar-thumb-white'>
            <h1 className='flex absolute top-[100px] mb-10 text-text-col'>Articles</h1>
            <Kindof_list setCurrentList={setCurrentList}/>
            {currentList}
        </div>
         
    </div>
  )
}

export default ArticlesList
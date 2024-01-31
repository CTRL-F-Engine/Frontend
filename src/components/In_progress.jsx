import React from 'react'
import { Route,Routes } from 'react-router-dom';
import '../index.css';
import Article_editing from '../pages/Article_editing';

const In_progress = ({inprogressarticles}) => {
  //logique from back
  return (
    <div className="space-y-8 mt-10 h-96 sm:h-[500px]  w-[70%]  text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white bg-sidebar">
      <ul className="flex ">
        {inprogressarticles.map((article,index) => (
          <li key={article.id} className={`grid justify-between grid-cols-2 mb-[25px] pb-[25px] ${index < inprogressarticles.length - 1 ? 'border-b-admin-bg ' : ''}`}>
            <h3 className="text-lg font-semibold mb-2 text-text-col">{article.title}</h3>
              <button
                className="bg-text-col text-sidebar p-[20px] text-center rounded-md focus:outline-none focus:ring focus:border-black"
                /*onClick={() => handleIn_progress(article.id)}*/
              >
                <Link to="Article_editing"> Correct</Link>
              </button>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path='Article_editing' element={<Article_editing/>}/>
      </Routes>
    </div>
  )
}

export default In_progress
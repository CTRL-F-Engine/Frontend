import React from 'react'
import 'tailwindcss/tailwind.css'; 
import '../index.css'

const Done = ({articles}) => {
  return (
    <div className="space-y-8 mt-10 h-96 sm:h-[500px]  w-[70%]  text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white bg-sidebar">
    <ul >
      {articles.map((article,index) => (
        <li key={article.id} className={`grid justify-between grid-cols-2 mb-[25px] pb-[25px]${index < articles.length - 1 ? 'border-b-admin-bg ' : ''}`}>
          <h3 className="text-lg font-semibold mb-2 text-text-col">{article.title}</h3>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-text-col text-sidebar p-[20px] text-center rounded-md focus:outline-none focus:ring focus:border-black"
            >Publish</button>
            
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Done
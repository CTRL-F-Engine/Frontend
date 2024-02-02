/* eslint-disable no-unused-vars */
import React from 'react';
import { ListeArticlesInfo } from '../components/ListeArticlesInfo';
import { Link } from 'react-router-dom';
import ModeratorSidebare from '../components/ModeratorSidebar';
import '../App.css';
import { Appcontext3 } from '../App';
import { useContext } from 'react';

function ListeArticles() {
const {Article,setArticle} = useContext(Appcontext3)
// here the Article data is initially null , it holds the article so that 


const handleCorrect=()=>
{
   
}
  const handleDownload = async (url) => {
    try {
      console.log(Article)
      const response = await fetch(url);
      const blob = await response.blob();
      const urlBlob = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = urlBlob;
      link.setAttribute('download', 'article.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className='flex flex-row w-screen bg-page-col h-[100vh]'>
      <ModeratorSidebare />
      <div className="flex flex-auto flex-col sm:ml-[5%] ml-[3%] mt-8 sm:mr-[5%] mr-[3%] overflow-x-auto scrollbar-thin scrollbar-thumb-white ">
        <h1 className="text-person-col text-5xl whitespace-nowrap">Articles</h1>
        <div className="bg-sidebar space-y-5 mt-10 h-96 sm:h-[500px] w-[100%] text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white">
          {/* Map over ListeArticlesInfo and render only the title */}
          {ListeArticlesInfo.map((article, index) => (
            <div key={index} className="mb-4 flex flex-col">
              <div className="flex flex-row items-center mb-2">
                <h1 className="inline text-xl w-full font-semibold text-person-col">
                  {article.props.title} {/* Accédez correctement aux propriétés de l'élément Article */}
                </h1>
                <div className="flex items-center">
                  <button onClick={() => handleDownload(article.props.url)} className='w-20 mr-3 box-border xs:h-[30px] h-[25px] text-[13px] sm:text-[15px] bg-item-col text-sidebar text-lg font-medium sm:rounded-[5px] rounded-[3px] sm:px-2 px-1'>Download</button>
                  <Link to='/Article_editing'>
                    <button onClick={handleCorrect} className='w-20 box-border xs:h-[30px] h-[25px] text-[13px] sm:text-[15px] bg-item-col text-sidebar text-lg font-medium sm:rounded-[5px] rounded-[3px] sm:px-2 px-1'>Correct</button>
                  </Link>
                </div>
              </div>
              <hr className='border-1 search-col'></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListeArticles;

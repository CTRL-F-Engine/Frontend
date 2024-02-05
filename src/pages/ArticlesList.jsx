import React,{useState,useEffect} from 'react';
import { ListeArticlesInfo } from '../components/ListeArticlesInfo';
import { Link } from 'react-router-dom';
import ModeratorSidebare from '../components/ModeratorSidebar';
import axios from 'axios';

import '../App.css';

function ListeArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const token=localStorage.getItem("access")
            let token2 = token.replace(/"/g, '');
            const response = await axios.get('http://127.0.0.1:8000/moderate/articles/',{
              headers:{
                Authorization:`Bearer ${token2}`,
              },
            });
            setArticles(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []); // Empty dependency array ensures the effect runs only once
const handleDownload = async (url) => {
  

    
    try {
      window.location.href = url;
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
};
  return (
    <div className='admin flex flex-row w-screen bg-page-col h-[100vh]'>
      <ModeratorSidebare />
      <div className="flex flex-auto flex-col sm:ml-[5%] ml-[3%] mt-8 sm:mr-[5%] mr-[3%] overflow-x-auto scrollbar-thin scrollbar-thumb-white ">
        <h1 className="text-person-col text-5xl whitespace-nowrap">Articles</h1>
        <div className="bg-sidebar space-y-5 mt-10 h-96 sm:h-[500px] w-[100%] text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white">
          {/* Map over ListeArticlesInfo and render only the title */}
          {articles.map((article, index) => (
            <div key={index} className="mb-4 flex flex-col">
              <div className="flex flex-row items-center mb-2">
                <h1 className="inline text-xl w-full font-semibold text-person-col">
                  {article.article_title} {/* Accédez correctement aux propriétés de l'élément Article */}
                </h1>
                <div className="flex items-center">
                  <button onClick={() => handleDownload(article.url)} className='w-20 mr-3 box-border xs:h-[30px] h-[25px] text-[13px] sm:text-[15px] bg-item-col text-sidebar text-lg font-medium sm:rounded-[5px] rounded-[3px] sm:px-2 px-1'>Download</button>
                  <Link to={`/editArticle/${article.article_id}`}>
                    <button className='w-20 box-border xs:h-[30px] h-[25px] text-[13px] sm:text-[15px] bg-item-col text-sidebar text-lg font-medium sm:rounded-[5px] rounded-[3px] sm:px-2 px-1'>Correct</button>
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
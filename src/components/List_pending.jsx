import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../index.css'
/*import jsPDF from 'jspdf';*/
import { Link } from 'react-router-dom';
/*import FetchArticleData from './src/FetchArticleData'*/
import Article_editing from '../pages/Article_editing';


const List_pending = ({ articles }) => {
  
  /*const handleIn_progress = (article.id) => {
    // Move the article to In_progress list par le backend
    window.location.href = `/edit/${articleId}`;
  };*/

  /*const handleDownload = async(article) => {
    try{
    const articleData = FetchArticleData(article.id);
    // Créer un nouvel objet PDF
    const pdf = new jsPDF();
    
    // Ajouter le contenu de l'article au PDF
    pdf.text(`Titre: ${articleData.title}`, 10, 10);
    pdf.text(`contenu: ${articleData.contenu}`, 10, 20);

    // Télécharger le PDF avec le nom de l'article
    pdf.save(`${article.title}.pdf`);
  }
  catch(error){console.error('Erreur lors de la gestion des données de l\'article:', error)}
};*/
  return (
    <div className="space-y-8 mt-10 h-96 sm:h-[500px]  w-[70%]  text-item-col rounded-md shadow p-9 pt-12 overflow-y-auto scrollbar-thin scrollbar-thumb-white bg-sidebar">
      <ul >
        {articles.map((article,index) => (
          <li key={article.id} className={`grid justify-between grid-cols-2 mb-[25px] pb-[25px]${index < articles.length - 1 ? 'border-b-admin-bg ' : ''}`}>
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <div className=" flex items-center space-x-1">
              <button
                className="bg-text-col text-sidebar p-[20px] text-center rounded-md focus:outline-none focus:ring focus:border-black"
                /*onClick={() => handleIn_progress(article.id)}*/
              >
                <Link to="Article_editing"> Correct</Link>
              </button>
              <button
                className="bg-text-col text-sidebar p-[20px] text-center rounded-md focus:outline-none focus:ring focus:border-black"
                /*onClick={() => handleDownload(article.id)}*/
              >
                Download
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path='Article_editing' element={<Article_editing/>}/>
      </Routes>
    </div>
  );
};
export default List_pending
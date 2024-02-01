/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import { Article } from '../components/Article';
import { Appcontext2 } from '../App';
import pdp from '../assets/pdp.png'
import { Navbar3 } from '../components/Navbar3';
import Filter from '../components/Filter';
import img from '../assets/footer.svg';
import { ArticleAffiché } from '../components/ArticleAffiché';

export const AffichageArticle =()=>
{

const {isConnected} = useContext(Appcontext2)
const [ref,setRef]=useState(null);
const [search,setSearch]=useState('');
const [isSticky, setIsSticky] = useState(false);
const [isFilterVisible, setIsFilterVisible] = useState(false);

const handleFilterClick = () => {
  setIsFilterVisible(!isFilterVisible);
};
const handleOffset = (data) => {
      setRef(data);
      console.log('Ref immediately after setRef:', ref); 
    
      console.log('Data:', data);
    };
    useEffect(()=>
    {

    },[isConnected])
     useEffect(() => {
      }, [ref]);
     
      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          console.log(ref);
          console.log(isSticky);
          if(ref)
          {
               setIsSticky(offset > window.innerHeight);

          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [ref]);
      const handleSearch=(e)=>
      {
      e.key==="Enter"?console.log(search):"";
      }
      const handleChange=(e)=>
      {
          setSearch(e.target.value); 
      }
    return (
    <div  className='w-full h-screen flex flex-col'>

    <Navbar3 func={handleOffset} connected={true} sticky={true}/>
       
  
       <ArticleAffiché title="Feature Engineering 101" date="Sep 5, 2022" author="Amira HADDAD" Institutions="bitgrit Data Science Publication" Abstract="This makes data pre-processing a crucial step in the machine learning pipeline — which involves feature preprocessing and generation. Each type of feature in a data set has its own way of preprocessing depending on its data type and the model used." 
       content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute .... orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....
       orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ....'
       References="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ...."/>
  
   
   
    <footer className='h-[70px] w-full'>
  <img src={img} />
</footer> 
  
    </div>)
}
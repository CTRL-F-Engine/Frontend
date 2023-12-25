/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Import the image
import myImage from '../assets/bookmark.svg';
import { KeyWord } from './KeyWord';
import { ReadMore } from "./ReadMore"
export const Article=(props)=>
{

const handleSave=()=>
{

}
    return (
        <div className="px-10">
          <h1 className="inline mr-3 text-3xl md:text-4xl
          text-gray-900 font-bold
          ">
            {props.title}
            </h1> 
            <span className="text-gray-500  font-medium">
                
                {props.date}
                </span> 
                <p className="font-normal text-justify text-[20px] text-black text-opacity-70 mt-5">
                    {props.content}
                </p>
                <div className='flex mt-10 items-center justify-between'><div className='flex gap-x-4'>
                 <KeyWord content="Data Science"/>
                <KeyWord content="Machine Learning"/>

                <KeyWord content="NLP"/>
            </div>
 <div className='flex gap-x-3'>              <button onClick={handleSave}>
                  <img src={myImage} />  </button>  
<ReadMore/>
                </div>
            
                </div>
               
               
        </div>
    )
}
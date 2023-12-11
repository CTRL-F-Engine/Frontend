/* eslint-disable react/prop-types */
import Input_search from "./Input_search"
import { Button } from "./Button"
import { Link } from "react-router-dom"
export const Forget_pop_up=(props)=>
{
    const handleClick=()=>
    {

    }
    return (
        <div className="lg:w-[60%] 
        bg-white 
         md:w-[60%] w-[80%] md:h-fit
         box-border rounded-[10px]
         py-[70px]
         px-[55px]
          md:py-[105px] md:px-[101px] 
         ">
          <h1 className="text-sky-950 font-bold  mb-5 text-4xl">
            {props.title!=null?props.title:""}
          </h1>
          <p className="text-gray-900 font-medium  mb-10">
       {props.body!=null?props.body:""}
          </p>
          <div className="sm:flex  justify-around">
           {props.input && <Input_search handleChange={props.handleChange} placeholder={props.placeholder}/>}
            <Button content={props.content} />
          </div>
          <p className="text-left sm:text-xl mt-7 text-gray-900 text-opacity-75">
       {props.question}
          <b >
           {
            props.act!="Resend"?<Link to="/Login" className="text-opacity-100"> 
            {props.act} </Link> : 
           <button onClick={handleClick}>
             {props.act }
           </button> 
           }
             
          </b> 
          </p>
        </div>
    )
}
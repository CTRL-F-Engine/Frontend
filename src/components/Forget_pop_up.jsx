/* eslint-disable react/prop-types */
import Input_search from "./Input_search"
import {Button} from "./Button"
import {Link} from "react-router-dom"
export const Forget_pop_up = (props) => {
    
    return (
        <div
            className="lg:w-[60%]
        bg-white   text-justify
         md:w-[60%] w-[85%] md:h-fit
         box-border rounded-[10px]
         sm:py-[70px]
         sm:px-[55px]
         py-[30px]
         px-[8%]
          md:py-[105px] md:px-[101px]
         ">
            <h1 className="text-sky-950 font-bold mb-5 md:text-4xl text-3xl">
                {
                    props.title != null
                        ? props.title
                        : ""
                }
            </h1>
            <p className="text-gray-900 sm:text-xl font-medium mb-10">
                {
                    props.body != null
                        ? props.body
                        : ""
                }
            </p>
            <div className="sm:flex  justify-around">
                {
                    props.input && <Input_search
                            handleChange={props.handleChange}
                            placeholder={props.placeholder}
                            type={props.type}/>
                            
                }
                <Button onClick={props.onClick} content={props.content}/>
            </div>
            <p
                className="text-left sm:text-xl mt-7 text-gray-900 sm:block flex items-start flex-col text-opacity-75">
                {props.question}
                <b >
                    {
                        props.act != "Resend"
                            ? <Link to="/Login" className="text-opacity-100">
                                    {props.act}
                                </Link>
                            : <button onClick={props.onClick2}>
                                    {props.act}
                                </button>
                    }

                </b>
            </p>
        </div>
    )
}
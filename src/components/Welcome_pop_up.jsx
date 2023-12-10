import { Button } from "./Button"
export const Welcome_pop_up=()=>
{
    return (
        <div className="
        bg-white 
         md:w-[50%] w-[70%] md:h-fit
         box-border rounded-[10px]
         py-[85px]
         px-[75px]
          md:py-[105px] md:px-[101px] 
         ">
          <h1 className="text-sky-950 font-bold  mb-5 text-5xl">
            Welcome !
          </h1>
          <p className="text-gray-900 font-medium  mb-10 text-xl">
          To access this content, please sign up or log in. Create an account to unlock exclusive features. We look forward to having you on board!
          </p>
          <div className="sm:flex gap-y-3 sm:gap-x-3 justify-end  ">
            <Button   content="Sign Up"/>
            <Button  content="Log In"/>
          </div>
         
         
           
    
             
         
        </div>
    )
}
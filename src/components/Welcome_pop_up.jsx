import { Btn } from "./Btn"
export const Welcome_pop_up=()=>
{
    return (
        <div className="
        lg:w-[60%] 
        bg-white 
         md:w-[60%] w-[80%] md:h-fit
         box-border rounded-[4px]
         sm:py-[70px]
         sm:px-[55px]
         py-[40px]
         px-[8%]  text-justify 
          md:py-[105px] md:px-[101px] 
         ">
          <h1 className="text-sky-950 font-bold  mb-5 md:text-5xl text-4xl">
            Welcome !
          </h1>
          <p className="text-gray-900 w-[100%] font-medium  mb-10 text-xl">
          To access this content, please sign up or log in. Create an account to unlock exclusive features. We look forward to having you on board!
          </p>
          <div className="sm:flex gap-y-3 sm:gap-x-3 justify-end  ">
            <Btn DarkMode={true}  content="Sign Up"/>
            <Btn  content="Log In"/>
          </div>
         
         
           
    
             
         
        </div>
    )
}
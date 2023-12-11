import { Input } from '../components/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Login =()=> {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [password,setPassword] = useState('');
  const [signUp,setSignUp]=useState(false);
  const handleSetEmail = (value) => {
    console.log(email)
    setEmail(value);
  };
const handleSetPassword=(value)=>
{

  setPassword(value);
  console.log(password)
}
const handleSubmit=()=>
{
  setSignUp(!signUp)

}
const handleForget=()=>
{

}
// eslint-disable-next-line no-unused-vars
const handleSignUp=()=>
{
}
  return (
    <div className=" flex flex-col-reverse  app md:flex-row  
    w-full items-center h-full
    justify-around   gap-y-9">
        <div className=' flex flex-col sm:items-end justify-center gap-y-7  '>
<p className="lg:w-[450px]  mx-auto text-left w-full text-violet-100 sm:text-[50px] text-[40px] font-bold font-['TT Commons'] ">
      { !signUp ?"Log In" : "Sign up"   }
            </p> 
        {
         signUp && <Input 
          setValue={handleSetEmail}
            placeholder="Full Name"
          />
        }
          <Input 
          setValue={handleSetEmail}
            placeholder="Email"
          />
          
          <Input 
            setValue={handleSetPassword}
            placeholder="Password"
            type="password"
          />
       <p className='lg:w-[450px] mx-auto text-right'>
          <button className="text-cyan-300 hover:underline text-[14px] sm:text-xl  text-right font-semibold font-['TT Commons'] w-[100%] mr-0">
          <Link to="/Login/Forget">{ !signUp && "Forgot password ?"  } </Link>
          </button>   
            </p>   
   
         <button onClick={handleForget} className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-cyan-300 rounded-[10px] flex justify-center md:w-[300px] mx-auto items-center
          text-cyan-950 text-[23px] font-bold font-['TT Commons'] 
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content" >
            <p>
              {!signUp ? "Log in":<Link to="/Login/Otp"> Sign up</Link> }
            
            </p> 
          </button>
          <p className='text-violet-100 lg:w-[450px] 
          mx-auto sm:text-xl text-[14px] text-center'>
           <p className='md:inline mr-3'>
          {!signUp ?"Don't have an account ?" : "Already have an account ?"}  
            </p> 
          <button onClick={handleSubmit} className="text-cyan-300 sm:text-xl font-semibold  text-[14px] text-right hover:underline font-['TT Commons']">
          {!signUp ?"Sign up" : "Log in"}     </button>   
            </p>  
</div>
<div className='w-[30%]'>
  </div>
        </div> 
   
        
  );
}

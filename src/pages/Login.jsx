/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { useState ,useContext} from 'react';
import AuthContext from '../context/AuthContext'

export const Login =(props)=> {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {loginUser} = useContext(AuthContext)
  const handleSetEmail = (value) => {
    console.log(email)
    setEmail(value);
  };
const handleSetPassword=(value)=>
{

  setPassword(value);
  console.log(password)
}
const handleSubmit = () => {
  email.length > 0 && loginUser(email, password)
  console.log(email)
  console.log(password)
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
      Log In
            </p> 
          <Input 
          setValue={handleSetEmail}
            placeholder="Email"
            name="email"
          />
          
          <Input 
            setValue={handleSetPassword}
            placeholder="Password"
            type="password"
            name="password"
          />
       <p className='lg:w-[450px] mx-auto text-right'>
          <button className="text-cyan-300 hover:underline text-[14px] sm:text-xl  text-right font-semibold font-['TT Commons'] w-[100%] mr-0">
          <Link to="/Login/Forget"> Forgot password ?</Link>
          </button>   
            </p>   
   
         <button onClick={handleSubmit} className="lg:w-[450px] h-[50px] sm:h-[70px]    bg-cyan-300 rounded-[10px] flex justify-center md:w-[300px] mx-auto items-center
          text-cyan-950 text-[23px] font-bold font-['TT Commons'] 
          sm:w-[300px]
          w-[258.4px] sm:px-4 box-content" >
            <p>
           Log in
            </p> 
          </button>
          <p className='text-violet-100 lg:w-[450px] 
          mx-auto sm:text-xl text-[14px] text-center'>
           <p className='md:inline mr-3'>
          Don't have an account ?  
            </p> 
          <button onClick={handleSubmit} className="text-cyan-300 sm:text-xl font-semibold  text-[14px] text-right hover:underline font-['TT Commons']">
          <Link to="/Signup"> Sign up</Link>     </button>   
            </p>  
</div>
<div className='w-[30%]'>
  </div>
        </div> 
   
        
  );
}


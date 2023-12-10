/* eslint-disable no-unused-vars */
import './index.css'; 
import { Otp } from './pages/OTP';
import {Login} from './pages/Login';
import {Welcome} from './pages/Welcome'
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Forget } from './pages/Forget';
function App() {
 
  return (
    <div className=' w-[100%] h-[100vh] '>  
     <Router>
     <Routes> 
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Login/Forget' element={<Forget/>}/>
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Login/Otp' element={<Otp/>}/>
    {/* <Login/> */}
       </Routes>    
    </Router>
      
 
{/* //     </div> */}
{/* <div className="app w-[100%] h-[100vh]">

  <div className=' flex flex-col sm:items-end justify-center gap-y-9'>
<p className="lg:w-[450px] mx-auto text-left text-violet-100 text-[70px] font-bold font-['TT Commons'] ">
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
    <button className="text-cyan-300 hover:underline text-xl font-semibold font-['TT Commons']">
{ !signUp && "Forgot password ?"  }        </button>   
      </p>   

   <button onClick={handleForget} className="lg:w-[450px] h-[70px]    bg-cyan-300 rounded-[13px] flex justify-center  mx-auto items-center
    text-cyan-950 text-[30px] font-bold font-['TT Commons'] 
    w-[258.4px] " >
      <p>{!signUp ?"Log in" : "Sign up"}</p> 
    </button>
    <p className='text-violet-100 lg:w-[450px] 
    mx-auto text-xl text-center'>
     <p className='inline mr-3'>
    {!signUp ?"Don't have an account ?" : "Already have an account ?"}  
      </p> 
    <button onClick={handleSubmit} className="text-cyan-300 text-xl font-semibold  hover:underline font-['TT Commons']">
    {!signUp ?"Sign up" : "Log in"}     </button>   
      </p>  
</div>
<div className='w-[30%]'>
</div> */}
  </div> 
  )
 
}

export default App;
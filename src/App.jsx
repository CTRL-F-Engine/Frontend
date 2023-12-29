/* eslint-disable no-unused-vars */
import './index.css'; 
import { Otp } from './pages/OTP';
import {Login} from './pages/Login';
import {Welcome} from './pages/Welcome'
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Forget } from './pages/Forget';
import { SignUp } from './pages/SignUp';
import {Home} from './pages/Home';
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react';  
import Upload from './pages/Upload';
import Modify from './pages/Modify';
import Add from './pages/Add';
export const Appcontext2=createContext();
function App() {
  const [isConnected , setIsConnected]=useState(true);

  return (

    <div className=' w-[100%] h-[100vh] '>     
    <Appcontext2.Provider value={{isConnected , setIsConnected}}>

     <Router>
     <Routes> 
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Login/Forget' element={<Forget/>}/>
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Login/Otp' element={<Otp/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/Upload' element={<Upload/>}/>
    <Route path='/Modify' element={<Modify/>}/>
    <Route path='/Add' element={<Add/>}/>

       </Routes>    
    </Router>
      
</Appcontext2.Provider> 
  </div>
  
  )
 
}

export default App;
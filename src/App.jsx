/* eslint-disable no-unused-vars */
import './index.css'; 
import { Otp } from './pages/Otp';
import {Login} from './pages/Login';
import {Welcome} from './pages/Welcome'
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Forget } from './pages/Forget';
import { SignUp } from './pages/SignUp';
import {New_password} from './pages/new-password';
import {Home} from './pages/Home';
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react';  
import { AuthProvider } from './context/AuthContext'
export const Appcontext2=createContext();

function App() {
  const [isConnected , setIsConnected]=useState(true);

  return (

    <div className=' w-[100%] h-[100vh] '>     
    

     <Router>
     <AuthProvider value={{isConnected , setIsConnected}}>
     <Routes> 
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Login/Forget' element={<Forget/>}/>
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Otp' element={<Otp/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/password-reset-confirm/:uidb64/:token' element={<New_password/>}/>
       </Routes>   
       </AuthProvider>  
    </Router>
      
    
  </div>
  
  )
 
}

export default App;
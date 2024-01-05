/* eslint-disable no-unused-vars */

import './index.css'; 
import { Otp } from './pages/Otp';
import {Login} from './pages/Login';
import {Welcome} from './pages/Welcome'
import { Route ,Navigate} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Forget } from './pages/Forget';
import { SignUp } from './pages/SignUp';
import {New_password} from './pages/new-password';
import {Home} from './pages/Home';
import { useContext } from 'react'
import { createContext } from 'react'
import Upload from './pages/Upload';
import Settings from './pages/Settings';
import ListeModerators from './pages/ListeMod';
import Add from './pages/Add';
import ModifyModerator from './pages/Modify';
import { useState } from 'react';  
import { AuthProvider } from './context/AuthContext'

export const Appcontext2=createContext();
function App() {
  
  

  return (

    <div className=' w-[100%] h-[100vh] '>     
    

     <Router>
     <AuthProvider >
     
     <Routes> 
     
     
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Login/Forget' element={<Forget/>}/>
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Otp' element={<Otp/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/' element={<Home/>}/>
    
      
    <Route path="/modify-moderator/:id" element={<ModifyModerator />} />
    <Route path="/add" element={<Add />} />
  <Route path="/list" element={<ListeModerators />} />
  <Route path="/settings" element={<Settings />} />
  <Route path='/password-reset-confirm/:uidb64/:token' element={<New_password/>}/> 
  <Route path="/upload" element={<Upload />} />
    </Routes> 
       </AuthProvider>  
    </Router>
      
    
  </div>
  
  )
 
}

export default App;

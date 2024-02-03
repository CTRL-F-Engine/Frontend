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

import { useState } from 'react'; 
import Upload from './pages/Upload';
import Settings from './pages/Settings';
import ListeModerators from './pages/ListeMod';
import Add from './pages/Add';
import ModifyModerator from './pages/Modify';

import {ResultSearch} from './pages/ResultSearch';
import {Favors} from './pages/Favors';
import { Reset } from './pages/Reset';
import {AffichageArticle} from './pages/AffichageArticle'
import {UserSettings} from './pages/UserSettings'
import { ChangeName } from './pages/ChangeName';
import {ChangePw} from './pages/ChangePw';
import {ChangePictr} from './pages/ChangePictr';
import ModeratorSettings from './pages/ModeratorSettings';
import ArticlesList from './pages/ArticlesList';
import { AuthProvider } from './context/AuthContext';
import {EditArticles} from "./pages/Article_editing"
export const Appcontext3=createContext();
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
  <Route path="/editArticle/:article_id" element={<EditArticles />} />
  <Route path="/add" element={<Add />} />
  <Route path="/list" element={<ListeModerators />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/ResultSearch/:query" element={<ResultSearch />} />
  <Route path="/Favors" element={<Favors />} />
  <Route path="/AffichageArticle" element={<AffichageArticle />} />
  <Route path="/ChangeName" element={<ChangeName />} />
  <Route path="/ChangePw" element={<ChangePw />} />
  <Route path="/ChangePictr" element={<ChangePictr />} />
  <Route path="//UserSettings" element={<UserSettings />} />
  <Route path="//ModeratorSettings" element={<ModeratorSettings/>}/>
  <Route path="//ArticlesList" element ={<ArticlesList/>}/>
  <Route path="//Article_editing" element ={<EditArticles/>}/>
  <Route path='/password-reset-confirm/:uidb64/:token' element={<New_password/>}/> 
  <Route path="/upload" element={<Upload />} />
    </Routes> 
       </AuthProvider>  
    </Router>
      
    
  </div>
  
  )
 
}

export default App;

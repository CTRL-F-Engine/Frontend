import { createContext, useState, useContext, useEffect } from 'react';
import * as jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {decode} from '../utils/decode'

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children ,value}) => {
  
  const [authTokens, setAuthTokens] = useState(()=>{
    localStorage.getItem("authTokens")
      ?JSON.parse(localStorage.getItem("authTokens"))
      : null
  })
  const [user, setUser] = useState(()=>{
    localStorage.getItem("authTokens")
      ?JSON.parse(localStorage.getItem("authTokens"))
      : null

  })
  const [loading,setLoading] = useState(true)
  const isConnected = value?.isConnected || false;
  const setIsConnected = value?.setIsConnected || (() => {});
  const navigate = useNavigate();
  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();
      console.log(data);
      if(response.status===200){
        console.log("logged in")
        setAuthTokens(data)
        setUser(decode(data.access_token))
        setIsConnected(true)
        localStorage.setItem("authTokens",JSON.stringify(data))
        navigate('/')
      }else{
        console.log(response.status);
        console.log("there was an issue");
        alert("Something went wrong"+response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const registerUser =async(email,username,password) =>  {
    const response = await fetch("http://127.0.0.1:8000/register/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        email,username,password
      )
    }
    )
    if (response.status===201){
      console.log("registred successfully")
    }else{
      console.log(response.status);
      console.log("there was an issue");
      alert("Something went wrong"+response.status);
    }
  }
  const logoutUser = ()=>{
    setAuthTokens(null)
    setUser(null)
    setIsConnected(false)
    localStorage.removeItem("authTokens")
    navigate('/Login')

  }
  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
    isConnected,
    setIsConnected,
  }
  useEffect(()=>{
    if (authTokens){
      setUser(decode(authTokens.access_token))
    }
    setLoading(false)
  },[authTokens,loading])
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
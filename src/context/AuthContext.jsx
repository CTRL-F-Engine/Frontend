import { createContext, useState, useContext, useEffect } from 'react';
import * as jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {decode} from '../utils/decode'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [isConnected,setIsConnected]=useState()
  const navigate = useNavigate();
  const loginUser = async (email, password) => {
    const requestBody = {
      email: email,
      password: password
    };
    
    try {
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data)
      const User={
        "email":response.email
      }
      
      if(response.status===200){
        console.log("logged in")
        localStorage.setItem("User",JSON.stringify(User))
        localStorage.setItem("access",JSON.stringify(response.access_token))
        localStorage.setItem("refresh",JSON.stringify(response.refresh_token))
        setAuthTokens(data)
        setIsConnected(true)
        localStorage.setItem("authTokens",JSON.stringify(data))
        navigate('/')
      }else{
        toast.error("invalid credentials! Try again.")
        console.log(response.status);
        console.log("there was an issue");
        
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };


  const registerUser = async (email, username, password) => {
    const requestBody = {
      email: email,
      username: username,
      password: password
    };
  
    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
  
      if (response.status === 201) {
        console.log("Registered successfully");
        navigate('/Otp')
      } else {
        console.log(response.status);
        console.log("There was an issue");
        toast.error("invalid credentials! Try again.")
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error during registration");
    }
  };
  const logoutUser = ()=>{
    setAuthTokens(null)
    setUser(null)
    setIsConnected(false)
    localStorage.removeItem("authTokens")
    navigate('/Login')

  }
  const otpVerify = async (otp) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/verifyEmail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp
        }),
      });

      const data = await response.json();
      if(response.status===200){
        console.log("User verified successfuly")
        toast.success("Woohoo ! User verified successfully ! ");
        navigate('/Login')
      }else if (response.status===204){
        console.log(response.status);
        console.log("there was an issue");
        toast.warning("Code is invalid, user already verified")
        alert("Code is invalid, user already verified "+response.status);
      }else{
        toast.error("Incorrect passcode! Please try again.")
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };
  
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
    otpVerify,
  }
  useEffect(()=>{
    const storedTokens = localStorage.getItem("authTokens");
    if (storedTokens){
      setIsConnected(true);
      setAuthTokens(JSON.parse(storedTokens));
      setUser(decode(storedTokens.access_token))
    }
    setLoading(false)
  },[])
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
/* eslint-disable react/prop-types */
import { Appcontext2 } from '../App';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext'
import {decode} from '../utils/decode'
import useAxios from '../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';


export const LogOut=(props)=>
{
    const navigate = useNavigate();
    const axiosInstance=useAxios()
    const {isConnected,setIsConnected} = useContext(AuthContext)
    const {AuthTokens,setAuthTokens} = useContext(AuthContext)
    const {user,setUser} = useContext(AuthContext)
    const handleLogout=async()=>{
        setAuthTokens(null)
        setUser(null)
        setIsConnected(false)
        localStorage.removeItem("authTokens")
        navigate('/Login')
    }

 return (
    <button onClick={handleLogout}  className={`   w-full text-neutral-50
    box-border h-[38px]
    ${(props.mode=='light')?' bg-cyan-300' : 'bg-sky-950'}  text-[15px] font-bold  font-['TT Commons'] px-4 rounded-[5px] ` }>
Log Out
    </button>  
)
}
/* eslint-disable react/prop-types */
import { Appcontext2 } from '../App';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext'

export const LogOut=(props)=>
{
    const {isConnected,setIsConnected} = useContext(AuthContext)
const handleLogOut=()=>
{
    console.log(isConnected);
    setIsConnected(false);
}
 return (
    <button onClick={handleLogOut}  className={`   w-full text-neutral-50
    box-border h-[38px]
    ${(props.mode=='light')?' bg-cyan-300' : 'bg-sky-950'}  text-[15px] font-bold  font-['TT Commons'] px-4 rounded-[5px] ` }>
Log Out
    </button>  
)
}
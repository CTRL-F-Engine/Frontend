import { useState } from "react"
import { Forget_pop_up } from "../components/Forget_pop_up"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Forget =()=>
{
    const navigate = useNavigate();
    const [email,setEmail]=useState();
    
    const handleEmailChange=(val)=>
{
setEmail(val);
console.log(val); // the val contains the real otp
console.log(email)
   
}

const handleOnClick =async()=>{
    try {
        const response = await axios.post('http://127.0.0.1:8000/password-reset/', { email });
        if (response.status===200){
        console.log(response.data.message); // Display success message
        }
      } catch (error) {
        console.error('Error:', error.response.data);
      }
    
}
return (
    <div className="app2 flex justify-center w-full
    h-[100vh] items-center">

<Forget_pop_up handleChange={handleEmailChange}     title="Forgot Your Password ?"
body="No problem! To reset your password, please enter the email address associated with your account. We&lsquo;ll send you a link to reset your password." question="Remembered your password?"
act="Log In" placeholder="Email" content="send" onClick={handleOnClick}
input={true}
/>
    </div>
)
}



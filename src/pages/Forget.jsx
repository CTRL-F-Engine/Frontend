import { useState } from "react"
import { Forget_pop_up } from "../components/Forget_pop_up"
export const Forget =()=>
{
    const [email,setEmail]=useState();
    const handleEmailChange=(val)=>
{
setEmail(val);
console.log(val); // the val contains the real otp
console.log(email)
   
}

return (
    <div className="app2 flex justify-center w-full
    h-[100vh] items-center">

<Forget_pop_up handleChange={handleEmailChange}     title="Forgot Your Password ?"
body="No problem! To reset your password, please enter the email address associated with your account. We&lsquo;ll send you a link to reset your password." question="Remembered your password?"
act="Log In" placeholder="Email" content="send"
input={true}
/>
    </div>
)
}

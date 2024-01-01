/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Forget_pop_up } from "../components/Forget_pop_up"
export const Reset=()=>
{
    const [password, setPassword]=useState('');
    const handleChange = (data)=>
    {
console.log(data);
    }
    return (<div className="flex app2 justify-center w-full
    h-[100vh] items-center
    ">
<Forget_pop_up reset={true} handleChange={handleChange} type="password" placeholder="New password" content="Confirm" input={true} title="Write your new password  "/>
    </div>)
}
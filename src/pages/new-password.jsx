import { useState } from "react";
import axiosInstance from "../utils/AxiosInstance";
import { useNavigate, useParams } from 'react-router-dom';
import { Forget_pop_up } from "../components/Forget_pop_up"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const New_password = () => {
    const navigate = useNavigate();
    const { uidb64, token } = useParams();
    const [newPassword, setNewPassword] = useState('');

    const data = {
        'password': newPassword,
        'uidb64': uidb64,
        'token': token
    }
    const handleSetPassword=(value)=>
{

    setNewPassword(value);
     
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          console.log(data)
            const response = await fetch('http://127.0.0.1:8000/set-new-password/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                    
                    
                    navigate('/Login');
                    toast.success("Password changed successfully ! ")
                    
            } else {
                if (newPassword.length<= 5){
                    toast.error("Password must have at least 6 characters !")
                }
                const resulterror = await response.json();
                console.log(result)
                console.error('Error:', resulterror.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (<div className="flex app2 justify-center w-full
    h-[100vh] items-center
    ">
<Forget_pop_up reset={true} onClick={handleSubmit} handleChange={handleSetPassword} type="password" placeholder="New password" content="Confirm" input={true} title="Write your new password  "/>
    </div>)
};

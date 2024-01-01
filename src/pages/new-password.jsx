import { useState } from "react";
import axiosInstance from "../utils/AxiosInstance";
import { useNavigate, useParams } from 'react-router-dom';

export const New_password = () => {
    const navigate = useNavigate();
    const { uidb64, token } = useParams();
    const [newPassword, setNewPassword] = useState('');

    const data = {
        'password': newPassword,
        'uidb64': uidb64,
        'token': token
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
                if (result.status === 200) {
                    navigate('/Login');
                    alert(result.message);
                }
            } else {
                // Handle error cases
                const result = await response.json();
                console.log(result)
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Password:</label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

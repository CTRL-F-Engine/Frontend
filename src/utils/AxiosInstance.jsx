
import dayjs from 'dayjs';
import {decode} from './decode'
import axios from "axios";

const authTokens=localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):""
const token=authTokens.access_token

const baseUrl="http://127.0.0.1:8000/"
const axiosInstance=axios.create({
    baseURL:baseUrl,
    'Content-type':'application/json',
    headers:{Authorization: localStorage.getItem('access')? `Bearer ${token}`:null}

})
axiosInstance.interceptors.request.use(async req =>{
    if (token){
        req.headers.Authorization=`Bearer ${token}`
        const user=decode(token)
        const isExpired=dayjs.unix(user.exp).diff(dayjs())<1
        if (!isExpired){
            return req
        }else{
            const res = await axios.post(`${baseUrl}/token/refresh/`,{refresh:authTokens.refresh_token})
            if (res.status===200){
                localStorage.setItem('access',JSON.stringify(res.data.access))
            }
        }
        
    }return req
});

export default axiosInstance
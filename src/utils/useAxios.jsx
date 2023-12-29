import axios from "axios"
import * as jwt_decode from 'jwt-decode';
import dayjs from "dayjs"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import {decode} from '../utils/decode'

const baseUrl="http://127.0.0.1:8000"

const useAxios = () =>{
    const [authTokens,setUser,setAuthTokens]=useContext(AuthContext)
    const axiosInstance=axios.create({
        baseURL,
        headers:{Authorization: 'Bearer ${authTokens?.access_token}'}
    }).access

    axiosInstance.interceptors.request.use(async req =>{
        const user= decode(authTokens.access_token)
        const isExpired = dayjs.unix(user.exp).diff(dayjs())<1

        if (isExpired) return req

    
    localStorage.setItem("authToken",JSON.stringify(response.data))
    setAuthTokens(response.data)
    setUser(decode(response.data.access_token))

    req.headers.Authorization='Bearer ${response.data.access_token}'
    return req
})
    return axiosInstance
}

export default useAxios
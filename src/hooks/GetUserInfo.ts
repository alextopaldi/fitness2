import axios from "axios";
import { useState } from "react";
import { IUserInfo } from "../models/UserInfo";
import { useNavigate } from "react-router-dom";

export function useGetUserInfo() {

    const [userInfo, setUserInfo] = useState<IUserInfo>({
        name: '',
        surname: '',
        email: ''
    })
    const navigate = useNavigate()

    async function getUserInfo() {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/getuser', {
            headers: {
                'Authorization': `${token}`
            }
            })
            setUserInfo(response.data)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    return{ getUserInfo, userInfo }
}
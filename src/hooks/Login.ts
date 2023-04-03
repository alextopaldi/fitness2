import axios from 'axios';
import { ILoginUser } from '../models/UserAuth';
import { useNavigate } from 'react-router-dom';

interface useLoginProps {
    userData : ILoginUser
}

export function useLogin ( {userData} : useLoginProps) {

    const navigate = useNavigate()

    async function login() {
        try {
            const response = await axios.post('http://26.250.164.255:5000/login', userData)
            const { token } = response.data
            localStorage.setItem('token', token)
            navigate('/profile')
            return token
        } catch (error) {
            console.log(error)
        }
    }

    return {login}
}
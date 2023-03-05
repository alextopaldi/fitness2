import axios from 'axios';
import { ILoginUser } from '../models/UserAuth';

interface useLoginProps {
    userData : ILoginUser
}

export function useLogin ( {userData} : useLoginProps) {

    async function login() {
        try {
            const response = await axios.post('http://26.250.164.255:5000/login', userData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            return token;
        } catch (error) {
            console.log(error)
        }
    }

    return {login}
}
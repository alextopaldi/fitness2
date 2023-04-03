import axios from "axios"
import { useNavigate } from "react-router-dom"

export function useLogout() {

    const navigate = useNavigate()

    async function logout() {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://26.250.164.255:5000/logout', {
                headers : {
                    'Authorization': `${token}`
                }
            })
            localStorage.removeItem('token')
            navigate('/login')
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    return {logout}
}

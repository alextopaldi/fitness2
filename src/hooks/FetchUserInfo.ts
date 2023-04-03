import axios from "axios";
import { useAppDispatch } from "./Redux";
import { UserInfoSlice } from "../redux/reducers/UserInfoSlice";
import { useNavigate } from "react-router-dom";

export function useFetchUserInfo() {

    const dispatch = useAppDispatch()
    const {addInfo} = UserInfoSlice.actions
    const navigate = useNavigate()

    async function fetchUserInfo() {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/getinfo', {
            headers: {
                'Authorization': `${token}`
            }
            })
            dispatch(addInfo(response.data))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    return{ fetchUserInfo }
}
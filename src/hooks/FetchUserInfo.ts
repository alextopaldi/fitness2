import axios from "axios";
import { useAppDispatch } from "./Redux";
import { UserInfoSlice } from "../redux/reducers/UserInfoSlice";

export function useFetchUserInfo() {

    const dispatch = useAppDispatch()
    const {addInfo} = UserInfoSlice.actions

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
                window.location.href = '/login';
              }
            console.log(error)
        }
    }

    return{ fetchUserInfo }
}
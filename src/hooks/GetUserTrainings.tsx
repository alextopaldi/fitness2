import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IUserTraining } from "../models/UserTraining"
import { useAppDispatch } from "./Redux"
import { TrainingsSlice } from "../redux/reducers/TrainingsSlice"

export function useGetUserTrainings() {
    
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {addUserTrainings} = TrainingsSlice.actions

    async function getUserTrainings() {
        setLoader(true)
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/exercise_set', {
            headers: {
                'Authorization': `${token}`
            }
            })
            dispatch(addUserTrainings(response.data))
            setLoader(false)
        } catch (error) {
            setLoader(false)
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    return {loader, getUserTrainings}
}
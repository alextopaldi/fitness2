import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IExercise } from "../models/Exercise"

export function useGetExercise() {

    const [loading, setLoading] = useState(false)
    const [exercise, setExercise] = useState<IExercise>()
    const navigate = useNavigate()

    async function getExercises(id : string) {
        setLoading(true)
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/exercises?id='+id, {
            headers: {
                'Authorization': `${token}`
            }
            })
            setExercise(response.data.find((item : any ) => item.id == id))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    return{getExercises, loading, exercise}
}
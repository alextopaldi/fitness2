import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IExercise } from "../models/Exercise"
import { useAppDispatch } from "./Redux"
import { ExercisesSlice } from "../redux/reducers/ExercisesSlice"

export function useGetTraining() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [muscle, setMuscle] = useState('')
    const dispatch = useAppDispatch()
    const {addExercises} = ExercisesSlice.actions
    const [loading, setLoading] = useState(false)

    async function getExercises() {
        setLoading(true)
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/exercises?muscle_group='+group+'&name='+name)
            dispatch(addExercises(response.data))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            // if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
            //     navigate('/login')
            //   }
        }
    }

    return {getExercises, name, setName, group, setGroup, muscle, setMuscle, loading}
}
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "./Redux"
import { TrainingsSlice } from "../redux/reducers/TrainingsSlice"
import { IExercise } from "../models/Exercise"
import { ITraining } from "../models/Training"

export function useGetTrainings() {

    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {addTrainings} = TrainingsSlice.actions
    const [exercises, setExercises] = useState<IExercise[]>([])
    const [training, setTraining] = useState<ITraining>()

    async function getTrainings() {
        setLoader(true)
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/exercise_set')
            dispatch(addTrainings(response.data))
            setLoader(false)
        } catch (error) {
            setLoader(false)
            // if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
            //     navigate('/login')
            //   }
        }
    }

    async function getTrainingExercices(id : string) {
        setLoader(true)
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/exercise_set/'+id)
            setExercises(response.data.exercises)
            setTraining(response.data.exercise_set)
            setLoader(false)
        } catch (error) {
            setLoader(false)
            // if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
            //     navigate('/login')
            //   }
        }
    }

    return {getTrainings, loader, getTrainingExercices, exercises, training}
}
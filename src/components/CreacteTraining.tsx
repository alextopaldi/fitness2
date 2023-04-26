import { useState } from "react"
import { IUserTraining } from "../models/UserTraining"
import axios from "axios";
import { useAppDispatch } from "../hooks/Redux";
import { TrainingsSlice } from "../redux/reducers/TrainingsSlice";

interface CreateTrainingProps {
    onClose : () => void
}

export function CreateTraining({onClose} : CreateTrainingProps) {

    const dispatch = useAppDispatch()
    const {addUserTraining} = TrainingsSlice.actions

    const [training, setTraining] = useState<IUserTraining>({
        id : 0,
        name : '',
        description : '',
        exercises : []
    }) 

    async function saveTraining(event : React.FormEvent) {
        event.preventDefault()
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://26.250.164.255:5000/user_training', training, {
                headers : {
                    'Authorization': `${token}`
                }
            })
            dispatch(addUserTraining(response.data))
            onClose()
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                window.location.href = '/login';
              }
            console.log(error)
        }
    }

    return(
        <>
        <form className="create-training" onSubmit={saveTraining}>
            <input value={training.name} onChange={event => setTraining(prev => ({...prev, name : event.target.value}))} type="text" placeholder="Название..." name="" id="" />
            <input value={training.description} onChange={event => setTraining(prev => ({...prev, description : event.target.value}))} required type="text" placeholder="Описание..." name="" id="" />
            <button>Сохранить</button>
        </form>
        </>
    )
}
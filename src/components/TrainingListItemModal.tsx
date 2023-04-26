import { faPersonRunning, faTrash, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUserTraining } from "../models/UserTraining"
import { useAppDispatch } from "../hooks/Redux";
import { TrainingsSlice } from "../redux/reducers/TrainingsSlice";
import axios from "axios";

interface TrainingListItemProps {
    training : IUserTraining,
    exerciseId : number,
    onClose : () => void
}

export function TrainingListItemModal({training, exerciseId, onClose} : TrainingListItemProps) {

    const dispatch = useAppDispatch()
    const {deleteUserTraining} = TrainingsSlice.actions

    async function saveTraining(event : React.FormEvent) {
        event.preventDefault()
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://26.250.164.255:5000/user_training', {
                id : training.id,
                exercises : [exerciseId]
            }, {
                headers : {
                    'Authorization': `${token}`
                }
            })
            // dispatch(addUserTraining(response.data))
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
        <div onClick={saveTraining} className="eating-table__string training-table training-table-modal">
            <div className="string-preview">
                <FontAwesomeIcon className="eating-icon" icon={faPersonRunning}></FontAwesomeIcon>
                <h6>{training.name}</h6>
            </div>
        </div>
        </>
    )
}
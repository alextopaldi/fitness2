import { faPersonRunning, faTrash, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUserTraining } from "../models/UserTraining"
import { useAppDispatch } from "../hooks/Redux";
import { TrainingsSlice } from "../redux/reducers/TrainingsSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface TrainingListItemProps {
    training : IUserTraining
}

export function TrainingListItem({training} : TrainingListItemProps) {

    const dispatch = useAppDispatch()
    const {deleteUserTraining} = TrainingsSlice.actions
    const navigate = useNavigate()

    async function deleteTraining(event : React.FormEvent) {
        event.preventDefault()
        const token = localStorage.getItem('token');
        if (training.id) try {
            const response = await axios.delete('http://26.250.164.255:5000/delete_exercise_set?id='+training.id, {
                headers : {
                    'Authorization': `${token}`
                }
            })
            dispatch(deleteUserTraining(training.id))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                window.location.href = '/login';
              }
            console.log(error)
        }
    }

    return(
        <>
        <div className="eating-table__string training-table">
            <div onClick={() => navigate('/profile/training/'+training.id)} className="string-preview training-string-preview">
                <FontAwesomeIcon className="eating-icon" icon={faPersonRunning}></FontAwesomeIcon>
                <h6>{training.name}</h6>
            </div>
            <div className="delete-user-training">
                <FontAwesomeIcon onClick={deleteTraining} className="eating-icon trash-icon" icon={faTrash}></FontAwesomeIcon>
            </div>
            {/* <ul>{training.exercises?.map(item => <li>qwer</li>)}</ul>
            {training.exercises && <p>{training.exercises[0].name}</p>} */}
        </div>
        </>
    )
}
import { useNavigate } from "react-router-dom"
import { ITraining } from "../models/Training"

interface TrainingProps {
    training : ITraining
}

export function Training({training} : TrainingProps) {

    const navigate = useNavigate()

    return(
        <>
        <div onClick={() => navigate('/trainings/'+training.id)} className="training">
            <p>{training.name}</p>
            <div className="training-img-text">
                <img src={training.photo_url} alt="" />
                <textarea value={training.description} readOnly className="training-img-text__text">
                </textarea>
            </div>
        </div>
        </>
    )
}
import { useNavigate } from "react-router-dom"
import { IExercise } from "../models/Exercise"

interface ExersiceProps {
    exersice : IExercise
}

export function Exersice({exersice} : ExersiceProps) {

    const navigate = useNavigate()

    return(
        <>
        <div onClick={() => navigate('/training/'+exersice.id)} className="small-exersice">
            <img src={exersice.photo_url} alt="" />
            <p className="small-exersice__name">{exersice.name}</p>
            <p className="small-exersice__group">{exersice.muscle_group}</p>
        </div>
        </>
    )
}
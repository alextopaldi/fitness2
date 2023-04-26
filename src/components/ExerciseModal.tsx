import { IExercise } from "../models/Exercise"
import { BackArrow } from "./BackArrow"

interface ExerciseModalProps {
    exercise : IExercise
}

export function ExerciseModal({exercise} : ExerciseModalProps) {
    return(
        <>
        <div className="container">
            <div className="exercise-large exercise-modal">
                <div className="exercise-large__content">
                    <div className="exercise-large__img">
                        <img src={exercise.photo_url} alt="" />
                    </div>
                    <div className="exercise-large__text">
                        <p className="exercise-large__name">{exercise.name}</p>
                        <p>Группа мышц: <strong>{exercise.muscle_group}</strong></p>
                        <p>Задействует мышцы: <strong>{exercise.muscles.join(', ')}</strong></p>
                        {exercise.equipment && <p>Снаряжение: <strong>{exercise.equipment}</strong></p>}
                        <textarea readOnly value={exercise.description}></textarea>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
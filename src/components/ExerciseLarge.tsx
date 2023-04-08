import { IExercise } from "../models/Exercise"

interface ExerciseLargeProps {
    exercise : IExercise
}

export function ExerciseLarge({exercise} : ExerciseLargeProps) {
    return(
        <>
        <div className="container">
            <div className="exercise-large">
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
        </>
    )
}
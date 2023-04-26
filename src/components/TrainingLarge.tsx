import { IExercise } from "../models/Exercise";
import { ITraining } from "../models/Training";
import { BackArrow } from "./BackArrow";

interface TrainingLargeProps {
    training : ITraining | undefined,
    exercices : IExercise[],
    openExercise : (id : number) => void,
    backTo : string
}

export function TrainingLarge({training, exercices, openExercise, backTo} : TrainingLargeProps) {

    const img = require('../media/training.jpg')

    return(
        <>
        <div className="container">
            <div className="exercise-large">
                <BackArrow path={backTo}/>
                <div className="exercise-large__content">
                    <div className="exercise-large__img">
                        <img src={training && training.photo_url? training.photo_url : img} alt="" />
                    </div>
                    <div className="exercise-large__text">
                        <p className="exercise-large__name">{training?.name}</p>
                        <ul>
                            {exercices.map(item => <li key={item.id} onClick={() => openExercise(item.id)}>{item.name}</li>)}
                        </ul>
                        <textarea readOnly value={training?.description}></textarea>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
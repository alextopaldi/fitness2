import { IExercise } from "../models/Exercise"
import { BackArrow } from "./BackArrow"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from 'react-transition-group';
import { Modal } from "./Modal";
import { useState } from "react";
import { useGetUserTrainings } from "../hooks/GetUserTrainings";
import { useAppSelector } from "../hooks/Redux";
import { TrainingListItemModal } from "./TrainingListItemModal";
import { Loader } from "./Loader";
import axios from "axios";

interface ExerciseLargeProps {
    exercise : IExercise
}

export function ExerciseLarge({exercise} : ExerciseLargeProps) {

    const [trainingsVision, setTrainingsVision] = useState(false)
    const {getUserTrainings, loader} = useGetUserTrainings()
    const {userTainings} = useAppSelector(store => store.TrainingsSlice)

    async function clickHandler() {
        await getUserTrainings()
        setTrainingsVision(true)
    }

    return(
        <>
        {loader && <Loader/>}
        <div className="container">
            <div className="exercise-large">
                <BackArrow path="/training"/>
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
                        <button onClick={clickHandler} className="add-exercise__btn">
                            <FontAwesomeIcon className="small-exersice__plus-icon" icon={faPlus}/>
                            <p>Добавить в тренировку</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <CSSTransition in={trainingsVision} timeout={300} classNames = "alert" unmountOnExit>
            <Modal onClose={() => setTrainingsVision(false)}>
               {userTainings.map(item => <TrainingListItemModal onClose={() => setTrainingsVision(false)} key={item.id} exerciseId={exercise.id} training={item}/>)}
            </Modal>
        </CSSTransition>
        </>
    )
}

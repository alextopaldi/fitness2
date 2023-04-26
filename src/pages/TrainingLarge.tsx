import { useParams } from "react-router-dom";
import { TrainingLarge } from "../components/TrainingLarge";
import { useGetTrainings } from "../hooks/GetTrainings";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { ExerciseLarge } from "../components/ExerciseLarge";
import { useGetExercise } from "../hooks/GetExercise";
import { ExerciseModal } from "../components/ExerciseModal";
import { CSSTransition } from 'react-transition-group';

interface TrainingLargePageProps {
    route : string
}

export function TrainingLargePage({route} : TrainingLargePageProps) {

    const {id} = useParams()
    const {getTrainingExercices, loader, exercises, training} = useGetTrainings()
    const [exerciseVision, setExerciseVision] = useState(false)
    const {getExercises, loading, exercise} = useGetExercise()

    useEffect(() => {
        if (id) {
            getTrainingExercices(id)
        }
    },[])

    function getExercise(id : number) {
        setExerciseVision(true)
        getExercises(id.toString())
    }

    return(
        <>
        {loader && <Loader/>}
        {loading && <Loader/>}
        <TrainingLarge backTo={route} openExercise={(id) => getExercise(id)} training={training} exercices={exercises}/>
        <CSSTransition in={exerciseVision} timeout={300} classNames = "alert" unmountOnExit>
            <Modal modalClass={true} onClose={() => setExerciseVision(false)}>
                {exercise && <ExerciseModal exercise={exercise}/>}
            </Modal>
        </CSSTransition>
        </>
    )
}
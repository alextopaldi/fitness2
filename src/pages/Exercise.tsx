import { useParams } from "react-router-dom";
import { ExerciseLarge } from "../components/ExerciseLarge";
import { useEffect } from "react";
import { useGetExercise } from "../hooks/GetExercise";
import { Loader } from "../components/Loader";

export function ExercisePage() {

    const {id} = useParams()
    const {getExercises, loading, exercise} = useGetExercise()

    useEffect(() => {
        if (id) {
            getExercises(id)
        }
    },[])

    return(
        <>
        {loading && <Loader/>}
        {exercise && <ExerciseLarge exercise={exercise}/>}
        </>
    )
}
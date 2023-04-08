import { useEffect } from "react";
import { Profile } from "../components/Profile";
import { useGetTraining } from "../hooks/GetTraining";
import { Exersice } from "../components/Exercise";
import { ExSearchBar } from "../components/ExSearchBar";
import { useAppSelector } from "../hooks/Redux";
import ExercisesSlice from "../redux/reducers/ExercisesSlice";
import { Loader } from "../components/Loader";

export function TrainingPage() {

    const {getExercises, loading} = useGetTraining()

    const {exercises} = useAppSelector(state => state.ExercisesSlice)

    useEffect(() => {
        if (exercises.length == 0) {
            getExercises()
        }
    },[])

    return(
        <>
        {loading && <Loader/>}
        <div className="container">
            <ExSearchBar/>
            <div className="small-exersices">
                {exercises.map(item => <Exersice key={item.id} exersice={item}/>)}
            </div>
        </div>
        </>
    )
}
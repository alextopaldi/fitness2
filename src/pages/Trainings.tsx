import { useEffect } from "react";
import { Training } from "../components/Training";
import { ITraining } from "../models/Training";
import { useGetTrainings } from "../hooks/GetTrainings";
import { useAppSelector } from "../hooks/Redux";
import { Loader } from "../components/Loader";

export function TrainingsPage() {


    const tr : ITraining = {
        id : 1,
        name : 'Руки плечи',
        description : 'фышщвпр0фхыщштвпзфывьхзмщьфыщзшвтпфшыгивпшфывп',
        photo_url : require('../media/fitnessava.png')
    }

    const {getTrainings, loader} = useGetTrainings()
    const {trainings} = useAppSelector(state => state.TrainingsSlice)

    useEffect(() =>{
        getTrainings()
    }, [])

    return(
        <>
        {loader && <Loader/>}
        <div className="container">
            <div className="trainings-list">
                {trainings.map(item => <Training key={item.id} training={item}/>)}
            </div>
        </div>
        </>
    )
}
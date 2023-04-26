import { TrainingListItem } from "../components/TrainingListItem";
import { UserTraining } from "../components/UserTraining";
import { useAppSelector } from "../hooks/Redux";

export function UserTrainingsPage() {

    return(
        <>
        <div className="container">
            <UserTraining/>
        </div>
        </>
    )
}
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { CSSTransition } from 'react-transition-group';
import { CreateTraining } from "./CreacteTraining";
import { BackArrow } from "./BackArrow";
import { useGetUserTrainings } from "../hooks/GetUserTrainings";
import { Loader } from "./Loader";
import { useAppSelector } from "../hooks/Redux";
import { TrainingListItem } from "./TrainingListItem";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function UserTraining() {

    const [modalVision, setModalVision] = useState(false)
    const {getUserTrainings, loader} = useGetUserTrainings()
    const {userTainings} = useAppSelector(store => store.TrainingsSlice)

    useEffect(() => {
        getUserTrainings()
    }, [])

    return(
        <>
        {loader && <Loader/>}
        <div className="user-training">
            <BackArrow path="/profile"/>
            <button className="user-training__create" onClick={() => setModalVision(true)}>
                <FontAwesomeIcon className="plus-icon-small" icon={faPlus}/>
                <p>Создать тренировку</p>
            </button>
            <CSSTransition in={modalVision} timeout={300} classNames = "alert" unmountOnExit>
                <Modal onClose={() => setModalVision(false)}>
                    <CreateTraining onClose={() => setModalVision(false)}/>
                </Modal>
            </CSSTransition>
            <div className="user-training-items">
                {userTainings.map(item => <TrainingListItem key={item.id} training={item}/>)}
            </div>
        </div>
        </>
    )
}
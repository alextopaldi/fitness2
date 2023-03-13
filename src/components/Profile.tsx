import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useGetUserInfo } from "../hooks/GetUserInfo"
import { faWeightScale, faChevronRight, faDumbbell, faBurger, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal";
import { UserStats } from "./UserStats";
import { CSSTransition } from 'react-transition-group';

export function Profile() {

    const avatar = require('../media/fitnessava.png')
    const {getUserInfo, userInfo} = useGetUserInfo()
    const [modalVision, setModalVision] = useState(false)

    useEffect(() => {
        getUserInfo()
    }, [])

    return(
        <>
        <div className="profile">
            <div onClick={() => setModalVision(true)} className="profile-stats">
                <FontAwesomeIcon className="profile-stats__icon" icon={faHeart}/>
            </div>
            <div className="profile__intro">
                <div className="avatar-border">
                    <img src={avatar} alt="" />
                </div>
                <h6>{userInfo.name}</h6>
                <p>{userInfo.email}</p>
            </div>
            <div className="profile__items">
                <div className="profile__items-item">
                    <div className="profile__items-item-preview">
                        <FontAwesomeIcon className="profile__item-icon" icon={faWeightScale}/>
                        <p>Мой вес</p>
                    </div>
                    <FontAwesomeIcon className="profile__item-icon" icon={faChevronRight}/>
                </div>
                <div className="profile__items-item">
                    <div className="profile__items-item-preview">
                        <FontAwesomeIcon className="profile__item-icon" icon={faBurger}/>
                        <p>Моя еда</p>
                    </div>
                    <FontAwesomeIcon className="profile__item-icon" icon={faChevronRight}/>
                </div>
                <div className="profile__items-item">
                    <div className="profile__items-item-preview">
                        <FontAwesomeIcon className="profile__item-icon" icon={faDumbbell}/>
                        <p>Мои тренировки</p>
                    </div>
                    <FontAwesomeIcon className="profile__item-icon" icon={faChevronRight}/>
                </div>
            </div>
        </div>
        <CSSTransition in={modalVision} timeout={300} classNames = "alert" unmountOnExit>
            <Modal onClose={() => setModalVision(false)}>
                <UserStats/>
            </Modal>
        </CSSTransition>
        </>
    )
}
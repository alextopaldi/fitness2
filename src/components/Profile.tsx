import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useGetUserInfo } from "../hooks/GetUserInfo"
import { faWeightScale, faChevronRight, faDumbbell, faBurger, faHeart, faRightFromBracket, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "./Modal";
import { UserStats } from "./UserStats";
import { CSSTransition } from 'react-transition-group';
import { useLogout } from "../hooks/Logout";
import { useDeleteUser } from "../hooks/DeleteUser";
import { Loader } from "./Loader";

export function Profile() {

    const avatar = require('../media/fitnessava.png')
    const {getUserInfo, userInfo, loader} = useGetUserInfo()
    const [modalHeartVision, setModalHeartVision] = useState(false)
    const [modalLogoutVision, setModalLogoutVision] = useState(false)
    const [modalDeleteVision, setModalDeleteVision] = useState(false)
    const [settingsVision, setSettingsVision] = useState(false)
    const {logout} = useLogout()
    const {deleteUser} = useDeleteUser()

    useEffect(() => {
        getUserInfo()
    }, [])

    return(
        <>
        {loader && <Loader/>}
        <div className="profile">
            <div onClick={() => setModalHeartVision(true)} className="profile-stats">
                <FontAwesomeIcon className="profile-stats__icon" icon={faHeart}/>
            </div>
            <div className="logout">
                <div onClick={() => setSettingsVision(prev => !prev)} className="logout-field">
                    <div className="setting-balls"></div>
                </div>
                <CSSTransition in={settingsVision} timeout={300} classNames = "alert" unmountOnExit>
                    <div className="settings">
                        <div onClick={() => setModalLogoutVision(true)} className="settings__item">
                            <FontAwesomeIcon className="" icon={faRightFromBracket}/>
                            <p>Выйти</p>
                        </div>
                        <div onClick={() => setModalDeleteVision(true)} className="settings__item">
                            <FontAwesomeIcon className="" icon={faTrash}/>
                            <p>Удалить аккаунт</p>
                        </div>
                    </div>
                </CSSTransition>
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
        <CSSTransition in={modalHeartVision} timeout={300} classNames = "alert" unmountOnExit>
            <Modal onClose={() => setModalHeartVision(false)}>
                <UserStats/>
            </Modal>
        </CSSTransition>
        <CSSTransition in={modalLogoutVision} timeout={300} classNames = "alert" unmountOnExit>
            <Modal onClose={() => setModalLogoutVision(false)}>
                <div className="logout-menu">
                    <p className="logout-menu__text">Выйти?</p>
                    <div className="logout-menu__btns">
                        <button onClick={logout}>Да</button>
                        <button onClick={() => setModalLogoutVision(false)}>Нет</button>
                    </div>
                </div>
            </Modal>
        </CSSTransition>
        <CSSTransition in={modalDeleteVision} timeout={300} classNames = "alert" unmountOnExit>
            <Modal onClose={() => setModalDeleteVision(false)}>
                <div className="logout-menu">
                    <p className="logout-menu__text">Удалить аккаунт?</p>
                    <div className="logout-menu__btns">
                        <button onClick={deleteUser}>Да</button>
                        <button onClick={() => setModalDeleteVision(false)}>Нет</button>
                    </div>
                </div>
            </Modal>
        </CSSTransition>
        </>
    )
}
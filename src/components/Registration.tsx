import { useState } from "react"
import { Link } from "react-router-dom"
import { useRegistration } from "../hooks/Registration"
import { IRegistrationUser } from "../models/UserAuth"

export function Registration() {

    const video = require('../media/auth-bg.mp4')
    const [userData, setUserData] = useState<IRegistrationUser>(
        {
            name : '',
            surname : '',
            email: '',
            password: ''
        }
    )

    const {registration} = useRegistration({userData : userData})

    function submitHandler(event : React.FormEvent) {
        event.preventDefault()
        registration()
    }

    return(
        <div className="auth">
            <video className="modal-background" src={video} autoPlay loop muted></video>
            <form onSubmit={submitHandler} className="auth-form" action="">
                <input value={userData.name} onChange={(event)=> setUserData(prev => ({...prev, name : event.target.value}))} required type="text" placeholder="Имя"/>
                <input value={userData.surname} onChange={(event)=> setUserData(prev => ({...prev, surname : event.target.value}))} required type="text" placeholder="Фамилия"/>
                <input value={userData.email} onChange={(event)=> setUserData(prev => ({...prev, email : event.target.value}))} required type="email" placeholder="Email"/>
                <input value={userData.password} onChange={(event)=> setUserData(prev => ({...prev, password : event.target.value}))} required type="password" placeholder="Пароль"/>
                <button>Зарегистрироваться</button>
                <p>Уже есть аккунт? <Link className="auth-link" to='/login'>Войти</Link></p>
            </form>
        </div>
    )
}
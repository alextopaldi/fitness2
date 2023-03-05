import { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../hooks/Login"
import { ILoginUser } from "../models/UserAuth"

export function Login() {
    const video = require('../media/auth-bg.mp4')
    const [userData, setUserData] = useState<ILoginUser>(
        {
            email: '',
            password: ''
        }
    )

    const {login} = useLogin({userData : userData})

    function submitHandler(event : React.FormEvent) {
        event.preventDefault()
        login()
    }

    return(
        <div className="auth">
            <video className="modal-background" src={video} autoPlay loop muted></video>
            <form onSubmit={submitHandler} className="auth-form" action="">
                <input value={userData.email} onChange={(event) => setUserData(prev => ({...prev, email: event.target.value}))} required type="email" placeholder="Email"/>
                <input value={userData.password} onChange={(event) => setUserData(prev => ({...prev, password: event.target.value}))} required type="password" placeholder="Пароль"/>
                <button>Войти</button>
                <p>Еще нет аккаунта? <Link className="auth-link" to='/registration'>Зарегистрироваться</Link></p>
            </form>
        </div>
    )
}
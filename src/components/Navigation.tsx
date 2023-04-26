import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {

    const [burgerMenuVision, setBurgerMenuVision] = useState(false)
    const menuStyle = burgerMenuVision? 'burger-menu show' : 'burger-menu hide'

    const handleLinkClick = () => {
        setBurgerMenuVision(false)
      };
    
    useEffect(() => {
        const links = document.getElementsByClassName('link')
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', handleLinkClick)
        }
        return () => {
            for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener('click', handleLinkClick)
            }
        };
    }, []);

    return(
        <>
        <nav className="navigation">
            <div className="container">
                <div className="navigation-list">
                    <Link to='/' className="logo">Your fitness+</Link>
                    <span className="links">
                        <Link className="link" to='/training'>Упражнения</Link>
                        <Link className="link" to='/trainings'>Тренировки</Link>
                        <Link className="link" to='/calculator'>Калькулятор</Link>
                        <Link className="link" to='/foodsearch'>Дневной отчет</Link>
                        <Link className="link" to='/profile'>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </Link>
                    </span>
                    <div className="burger" onClick={() => setBurgerMenuVision(prev => !prev)}>
                        <FontAwesomeIcon className="burger-icon" icon={faBars}/>
                    </div>
                </div>
            </div>
        </nav>
        <div className={menuStyle}>
            <Link className="link" to='/training'>Упражнения</Link>
            <Link className="link" to='/trainings'>Тренировки</Link>
            <Link className="link" to='/calculator'>Калькулятор</Link>
            <Link className="link" to='/foodsearch'>Дневной отчет</Link>
            <Link className="link" to='/profile'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </Link>
        </div>
        </>
    )
}
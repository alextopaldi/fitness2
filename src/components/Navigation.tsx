import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Navbar() {
    return(
        <>
        <nav className="navigation">
            <div className="container">
                <div className="navigation-list">
                    <Link to='/' className="logo">Your fitness</Link>
                    <span className="links">
                        <Link className="link" to='/training'>Тренировки</Link>
                        <Link className="link" to='/calculator'>Калькулятор</Link>
                        <Link className="link" to='/foodsearch'>Дневной отчет</Link>
                        <Link className="link" to='/login'>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
        </>
    )
}
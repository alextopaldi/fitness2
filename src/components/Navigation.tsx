import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Navbar() {
    return(
        <>
        <nav className="navigation">
            <div className="container">
                <div className="navigation-list">
                    <div className="logo">Your fitness</div>
                    <span className="links">
                        <Link className="link" to='/'>Калькулятор</Link>
                        <Link className="link" to='/'>Дневной отчет</Link>
                        <Link className="link" to='/'>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
        </>
    )
}
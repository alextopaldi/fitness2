import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface BackArrowProps {
    path : string
}

export function BackArrow({path} : BackArrowProps) {

    const navigate = useNavigate()

    return(
        <>
        <div onClick={() => navigate(path)} className="back-arrow">
            <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
            <p>Назад</p>
        </div>
        </>
    )
}
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Loader() {
    return(
        <>
        <div className="loader-modal">
            <div className="loader">
                <p>Загрузка...</p>
                <FontAwesomeIcon className="circle" icon={faSpinner}/>
            </div>
        </div>
        </>
    )
}
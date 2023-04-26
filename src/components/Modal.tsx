import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
    children: React.ReactNode,
    onClose : () => void,
    modalClass? : boolean
}

export function Modal( {children, onClose, modalClass} : ModalProps ) {
    return(
        <>
        <div className="modal-background-main">
            <div className={modalClass? 'modal exercise-modal' : 'modal'}>
                <FontAwesomeIcon onClick={onClose} className="modal__icon" icon={faX}></FontAwesomeIcon>
                {children}
            </div>
        </div>
        </>
    )
}
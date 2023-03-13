import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ICalculator } from "../models/Calculator"
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../hooks/Redux";
import { useEffect, useState } from "react";
import { useFetchUserInfo } from "../hooks/FetchUserInfo";


export function UserStats() {

    const { info } = useAppSelector(state => state.UserInfoSlice)
    const {fetchUserInfo} = useFetchUserInfo()
    const [inputVision, setInputVision] = useState({
        weight : false,
        height : false,
        age : false,
        fat : false
    })

    useEffect(() => {
        fetchUserInfo()
    }, [])
    
    return(
        <>
        <div className="user-stats">
            <div className="user-stats__item">
                <p className="user-stats__item-preview">Вес:</p>
                {!inputVision.weight && <div className="user-stats__values">
                    <p className="user-stats__value">{info.userValues.weight}</p>
                    <FontAwesomeIcon onClick={() => setInputVision(prev =>({...prev, weight: true}))} className="user-stats__icon" icon={faPen}/>
                </div>}
                {inputVision.weight && <div className="user-stats__values">
                    <input autoFocus defaultValue={info.userValues.weight} type='number' className="user-stats__value"></input>
                    <FontAwesomeIcon onClick={() => setInputVision(prev =>({...prev, weight: false}))} className="user-stats__icon-check" icon={faCheck}/>
                </div>}
            </div>
            <div className="user-stats__item">
                <div>
                    <p>Рост:</p>
                    <p className="user-stats__value">{info.userValues.height}</p>
                </div>
                <FontAwesomeIcon icon={faPen}/>
            </div>
            <div className="user-stats__item">
                <div>
                    <p>Возраст:</p>
                    <p className="user-stats__value">{info.userValues.age}</p>
                </div>
                <FontAwesomeIcon icon={faPen}/>
            </div>
            <div className="user-stats__item">
                <div>
                    <p>Процент жира:</p>
                    <p className="user-stats__value">{info.userValues.fat}</p>
                </div>
                <FontAwesomeIcon icon={faPen}/>
            </div>
            <button>Сохранить</button>
        </div>
        </>
    )
}
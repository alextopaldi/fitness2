import { faSearch, faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetTraining } from "../hooks/GetTraining";
import { Loader } from "./Loader";

export function ExSearchBar() {

    const {name, setGroup, setName, getExercises, loading} = useGetTraining()

    return(
        <>
        {loading && <Loader/>}
        <div className="search-bar">
            <div className="search-bar__inp">
                <input value={name} onChange={event => setName(event.target.value)} placeholder="Название упражнения..." type="text" name="" id="" />
                <button onClick={getExercises}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <p>Найти</p>
                </button>
            </div>
            <div className="search-bar__sel">
                <p>Группа мыщц</p>
                <select onChange={event => setGroup(event.target.value)} name="" id="">
                    <option value="">Не выбрано</option>
                    <option value="Руки">Мышцы рук</option>
                    <option value="Ноги">Мышцы ног</option>
                    <option value="Плечи">Плечевые мышцы</option>
                    <option value="Грудь">Грудные мышцы</option>
                    <option value="Спина">Мышцы спины</option>
                </select>
            </div>
        </div>
        </>
    )
}
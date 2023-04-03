import { useCalculate } from "../hooks/Calculate"
import { useFetchUserInfo } from "../hooks/FetchUserInfo"
import { useGetUserInfo } from "../hooks/GetUserInfo"

export function Calculator() {

    const {SubmitHandler, setCalcValues, calcValues, res, resVision, fetchCalculate, saved} = useCalculate()
    const {fetchUserInfo} = useFetchUserInfo()
    const { getUserInfo } = useGetUserInfo()

    return(
    <>
    <form action="" className='calc' onSubmit={SubmitHandler}>
        <div className="calc__sex">
            <label htmlFor="sexMale" className='form-check-label inline-block'>
                <input required value={'male'} onChange={event => setCalcValues(prev =>  ({ ...prev, sex: event.target.value}))}
                className='form-check-input' type="radio" name="sex"  id="sexMale"></input>
                Мужской
            </label>
            <label htmlFor="sexFemale" className='form-check-label inline-block'>
                <input value={'female'} onChange={event => setCalcValues(prev =>  ({ ...prev, sex: event.target.value}))}
                className='form-check-input' type="radio" name="sex"  id="sexFemale"></input>
                Женский
            </label>
        </div>
        <label htmlFor="age">
            <p>Возраст:</p>
            <input className='inp-text' type="text" id='age' value={calcValues?.age} onChange={event => setCalcValues(prev =>  ({ ...prev, age: Number(event.target.value)}))}/>
        </label>
        <label htmlFor="height">
            <p>Рост:</p>
            <input required className='inp-text' type="text" id='height' value={calcValues?.height} onChange={event => setCalcValues(prev =>  ({ ...prev, height: Number(event.target.value)}))}/>
        </label>
        <label htmlFor="weight">
            <p>Текущий вес:</p>
            <input required className='inp-text' type="text" id='weight' value={calcValues?.weight} onChange={event => setCalcValues(prev =>  ({ ...prev, weight: Number(event.target.value)}))} />
        </label>
        <label htmlFor="fat">
            <p>Процент жира:</p>
            <input className='inp-text' type="text" id='fat' value={calcValues?.fat} onChange={event => setCalcValues(prev =>  ({ ...prev, fat: Number(event.target.value)}))} />
        </label>
        <label htmlFor="activity">
            <p>Уровень физических нагрузок:</p>
            <select onChange={event => setCalcValues(prev =>  ({ ...prev, activity: Number(event.target.value)}))} className='select-opt' name="activity" id="activity">
                <option value={1.2}>Минимум нагрузки</option>
                <option value={1.38}>Легкая нагрузка</option>
                <option value={1.46}>Умеренная нагрузка</option>
                <option value={1.55}>Интенсивная нагрузка</option>
                <option value={1.9}>Экстримальная нагрузка</option>
            </select>
        </label>
        <label htmlFor="wish">
            <p>Цель:</p>
            <select onChange={event => setCalcValues(prev =>  ({ ...prev, wish: Number(event.target.value)}))} className='select-opt' name="wish" id="wish">
                <option value={1.2}>Набор массы</option>
                <option value={0.85}>Похудение</option>
            </select>
        </label>
        <button>Рассчитать</button>
    </form>
    <div className={resVision? "main_calc_results main_calc_results-active" : "main_calc_results"}>
        <p>Для поддержания веса: <b>{res.middle}</b></p>
        <p>Формула Миффлина-Сан Жеора: <b>{res.miffin}</b></p>
        <p>Формула Харриса-Бенедикта: <b>{res.harris}</b></p>
        {saved? <p>Сохранено!</p> : <button onClick={fetchCalculate}>Сохранить</button>}
    </div>
    </>
    )
}
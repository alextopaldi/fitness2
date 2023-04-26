import { useEffect } from "react"
import { useAppSelector } from "../hooks/Redux"
import { ICalculatorResults } from "../models/Calculator"
import { useFetchProducts } from "../hooks/FetchProducts"
import { useFetchUserInfo } from "../hooks/FetchUserInfo"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Loader } from "./Loader"
import { BackArrow } from "./BackArrow"

interface UserFoodProps {
    calories : ICalculatorResults
}

export function UserFood() {

    const {fetchProducts, loader} = useFetchProducts()
    const {info} = useAppSelector(state => state.UserInfoSlice)
    const {fetchUserInfo} = useFetchUserInfo()

    async function userFoodFetch() {
        await fetchProducts()
        await fetchUserInfo()
    }

    useEffect(() => {
        userFoodFetch()
    }, [])

    const {products} = useAppSelector(state => state.UserProductSlice)

    function caloriesSum() {
        let sum = 0
        products.map(item => sum += item.calories)
        return sum
    }

    function percentage(calories : number) { 
        if(!calories) {
            return 0
        }
        return Math.round((caloriesSum() / calories) * 100)
    }

    function caloriesLeft(calories : number) {
        if(calories - caloriesSum() <= 0) {
            return 0
        }
        else return calories - caloriesSum()
    }

    return(
        <>
        {loader && <Loader/>}
        <div className="user-food">
            <BackArrow path="/profile"/>
            <div>
                <p className="user-food__preview">Потребление калорий</p>
            </div>
            <div className="user-food__calories today-calories">
                <p>Употреблено сегодня</p>
                <div className="calories-line"></div>
                <p>{caloriesSum()}</p>
            </div>
            <div className="diag-circles">
                <div className="diag-circle">
                    <div className="user-food__calories res-calories">
                        <p>Для поддержания веса </p>
                        <div className="calories-line"></div>
                        <p>{info.calcResults.middle}</p>
                    </div>
                    <CircularProgressbar value={percentage(info.calcResults.middle)} text={`${percentage(info.calcResults.middle)}%`} strokeWidth={5}
                        />
                    <div className="user-food__calories res-calories">
                        <p>Осталось</p>
                        <div className="calories-line"></div>
                        <p>{caloriesLeft(info.calcResults.middle)}</p>
                    </div>
                </div>
                <div className="diag-circle">
                    <div className="user-food__calories res-calories">
                        <p>Харрисона-Бенедикта </p>
                        <div className="calories-line"></div>
                        <p>{info.calcResults.harris}</p>
                    </div>
                    <CircularProgressbar value={percentage(info.calcResults.harris)} text={`${percentage(info.calcResults.harris)}%`} strokeWidth={5}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(255, 0, 0, ${percentage(info.calcResults.harris) / 100})`,
                            textColor: '#f00',
                            trailColor: '#ccc',
                            backgroundColor: '#3e98c7',
                    })}/>
                    <div className="user-food__calories res-calories">
                        <p>Осталось</p>
                        <div className="calories-line"></div>
                        <p>{caloriesLeft(info.calcResults.harris)}</p>
                    </div>
                </div>
                <div className="diag-circle">
                    <div className="user-food__calories res-calories">
                        <p>Миффлина-Сан Жеора </p>
                        <div className="calories-line"></div>
                        <p>{info.calcResults.miffin}</p>
                    </div>
                    <CircularProgressbar value={percentage(info.calcResults.miffin)} text={`${percentage(info.calcResults.miffin)}%`} strokeWidth={5}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(255, 0, 0, ${percentage(info.calcResults.miffin) / 100})`,
                            textColor: '#f00',
                            trailColor: '#ccc',
                            backgroundColor: '#3e98c7',
                    })}/>
                    <div className="user-food__calories res-calories">
                        <p>Осталось</p>
                        <div className="calories-line"></div>
                        <p>{caloriesLeft(info.calcResults.miffin)}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
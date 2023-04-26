import { useEffect } from "react";
import { useFetchUserInfo } from "../hooks/FetchUserInfo";
import { useAppSelector } from "../hooks/Redux";
import { BackArrow } from "./BackArrow";
import { WeightChart } from "./WeightChart";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function UserWeight() {

    const {info} = useAppSelector(state => state.UserInfoSlice)
    const {fetchUserInfo} = useFetchUserInfo()
    const navigate = useNavigate()

    async function getWeights() {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/weights', {
            headers: {
                'Authorization': `${token}`
            }
            })
            console.log(response.data)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    async function userFoodFetch() {
        await fetchUserInfo()
        await getWeights()
    }

    useEffect(() => {
        userFoodFetch()
    }, [])


    return(
        <>
        <div className="container">
            <div className="user-weight">
                <BackArrow path="/profile"/>
                <div className="user-weight__weight">
                    <div className="user-food__calories res-calories">
                        <p>Текущий вес</p>
                        <div className="calories-line"></div>
                        <p>{info.userValues.weight}</p>
                    </div>
                    <div className="wish-weights">
                        <div className="user-food__calories res-calories">
                            <p>Начальный вес</p>
                            <div className="calories-line"></div>
                            <p>55</p>
                        </div>
                        <div className="user-food__calories res-calories">
                            <p>Желанный вес</p>
                            <div className="calories-line"></div>
                        <p>{info.userValues.fat}</p>
                    </div>
                    </div>
                </div>
                <WeightChart start={55} current={65} point={70}/>
            </div>
        </div>
        </>
    )
}
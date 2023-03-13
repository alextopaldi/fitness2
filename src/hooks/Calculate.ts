import axios from "axios"
import { useState } from "react"
import { ICalculator, ICalculatorResults } from "../models/Calculator"

export function useCalculate() {
    const [calcValues, setCalcValues] = useState<ICalculator>({
        sex: 'male',
        age: 0,
        height: 0,
        weight: 0,
        fat: 0,
        activity: 1.2,
        wish: 1.2
      })
  
    const [res, setRes] = useState<ICalculatorResults>({
        middle: 0,
        miffin: 0,
        harris: 0
    })

    const [saved, setSaved] = useState(false)
    const [resVision, setResVision] = useState(false)

    async function fetchCalculate() {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://26.250.164.255:5000/addinfo', {calcValues, res}, {
                headers : {
                    'Authorization': `${token}`
                }
            })
            setSaved(true)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                window.location.href = '/login';
              }
            console.log(error)
        }
    }

    function SubmitHandler(event: React.FormEvent) {
        event.preventDefault()
        setResVision(true)
        setSaved(false)
        if (calcValues.sex == 'male') {
            let middle = Math.round((10*calcValues.weight + 6.25*calcValues.height - 5*calcValues.age + 5)*calcValues.activity)
            let miffin = Math.round((10*calcValues.weight + 6.25*calcValues.height - 5*calcValues.age + 5)*calcValues.activity*calcValues.wish)
            let harris = Math.round((13.397*calcValues.weight + 4.779*calcValues.height - 5.667*calcValues.age + 88.362)*calcValues.activity*calcValues.wish)
            setRes({
                middle: middle,
                miffin: miffin,
                harris: harris
            })
        }
        else {
            let middle = Math.round((10*calcValues.weight + 6.25*calcValues.height - 5*calcValues.age - 161)*calcValues.activity)
            let miffin = Math.round((10*calcValues.weight + 6.25*calcValues.height - 5*calcValues.age - 161)*calcValues.activity*calcValues.wish)
            let harris = Math.round((9.247*calcValues.weight + 3.098*calcValues.height - 4.33*calcValues.age + 447.593)*calcValues.activity*calcValues.wish)
            setRes({
                middle: middle,
                miffin: miffin,
                harris: harris
            })
        }
        
    }

    return{calcValues, setCalcValues, res, setRes, resVision, setResVision, SubmitHandler, fetchCalculate, saved}
}
import axios from "axios"
import { IUserProduct } from "../models/UserProduct"
import { UserProductSlice } from "../redux/reducers/UserProductSlice"

import { useAppDispatch } from "./Redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function useFetchProducts() {


    const dispatch = useAppDispatch()
    const {fetchProduct} = UserProductSlice.actions
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)

    
    async function fetchProducts() {
        setLoader(true)
        const token = localStorage.getItem('token')
        const currentDate = new Date().toISOString().slice(0, 10);
        try {
            const response = await axios.get('http://26.250.164.255:5000/getmeal?date='+currentDate, {
            headers: {
                'Authorization': `${token}`
            }
            })
            dispatch(fetchProduct(response.data.products))
            setLoader(false)
        } catch (error) {
            setLoader(false)
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                navigate('/login')
              }
        }
    }

    return {fetchProducts, loader}
}
import axios from "axios"
import { IUserProduct } from "../models/UserProduct"
import { UserProductSlice } from "../redux/reducers/UserProductSlice"
import { useAppDispatch } from "./Redux"

export function useFetchProducts() {


    const dispatch = useAppDispatch()
    const {fetchProduct} = UserProductSlice.actions

    
    async function fetchProducts() {
        const token = localStorage.getItem('token')
        const currentDate = new Date().toISOString().slice(0, 10);
        try {
            const response = await axios.get('http://26.250.164.255:5000/getmeal?date='+currentDate, {
            headers: {
                'Authorization': `${token}`
            }
            })
            dispatch(fetchProduct(response.data.products))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                window.location.href = '/login';
              }
            console.log(error)
        }
    }

    return {fetchProducts}
}
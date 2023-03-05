import axios from "axios"
import { IUserProduct } from "../models/UserProduct"
import { UserProductSlice } from "../redux/reducers/UserProductSlice"
import { useAppDispatch } from "./Redux"

export function useFetchProducts() {


    const dispatch = useAppDispatch()
    const {addProduct} = UserProductSlice.actions

    
    async function fetchProducts() {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get('http://26.250.164.255:5000/getmeal', {
            headers: {
                'Authorization': `${token}`
            }
            })
            console.log(response)
            response.data.products.map((product : IUserProduct) => dispatch(addProduct(product)))
        } catch (error) {
            console.log(error)
        }
    }

    return {fetchProducts}
}
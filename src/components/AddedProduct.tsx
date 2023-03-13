import { IUserProduct } from "../models/UserProduct";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../hooks/Redux";
import { UserProductSlice } from "../redux/reducers/UserProductSlice";
import axios from "axios";


interface AddedProductProps {
    product : IUserProduct
}

export function AddedProduct({product} : AddedProductProps) {

    const dispatch = useAppDispatch()
    const {deleteProduct} = UserProductSlice.actions

    async function deleteProductHadler() {
        dispatch(deleteProduct(product.id))
        const token = localStorage.getItem('token')
        try {
            await axios.delete('http://26.250.164.255:5000/product/'+product.id, {
            headers: {
                'Authorization': `${token}`
            }
            })
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 403) {
                window.location.href = '/login';
              }
            console.log(error)
        }
    }

    return(
        <div className="added-product">
            <p className="added-product__name">{product.name}</p>
            <div className="added-product__info">
                <p>8% РСК</p>
                <p>{product.calories} калорий</p>
                <FontAwesomeIcon onClick={deleteProductHadler} className="added-product__icon" icon={faX}></FontAwesomeIcon>
            </div>
        </div>
    )
}
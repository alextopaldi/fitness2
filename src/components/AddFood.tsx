import { useState } from "react"
import { useAppDispatch } from "../hooks/Redux"
import { IUserProduct } from "../models/UserProduct"
import { UserProductSlice } from "../redux/reducers/UserProductSlice"

interface AddFoodProps {
    eating : string
}

export function AddFood({eating} : AddFoodProps) {

    var uniqid = require('uniqid'); 
    const dispatch = useAppDispatch()
    const {addProduct} = UserProductSlice.actions
    const [product, setProduct] = useState<IUserProduct>({
        id: '',
        name: '',
        calories: 0,
        eating: eating
    })

    function SaveProduct(event : React.FormEvent) {
        event.preventDefault()
        dispatch(addProduct(product))
    }

    return (
        <>
        <form onSubmit={SaveProduct} className="food-add-form" action="">
            <input value={product?.name} onChange={event => setProduct(prev => ({...prev, name: event.target.value, id: uniqid()}))} placeholder="Название..." type="text" name="" id="" />
            <input value={product?.calories.toString()} onChange={event => setProduct(prev => ({...prev, calories: Number(event.target.value)}))} placeholder="Калории..." type="number" />
            <button>Сохранить</button>
        </form>
        </>
    )
}
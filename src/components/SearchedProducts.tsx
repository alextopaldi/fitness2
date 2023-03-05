import { useEffect, useState } from "react";
import { useFoodInfoSearch } from "../hooks/FoodInfoSearch";
import { useTranslate } from "../hooks/Translate";
import { IProductSearchResult } from "../models/ProductSearchResult";
import { faChevronDown, faChevronUp, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/Redux";
import { UserProductSlice } from "../redux/reducers/UserProductSlice";
import axios from "axios";
 
interface SearchedProductsProps {
    product : IProductSearchResult,
    eating : string
}

export function SearchedProducts({product, eating} : SearchedProductsProps) {

    const [grams, setGrams] = useState(100)
    const [infoVision, setInfoVision] = useState(false)
    const {productInfo, FetchProductInfo, CaloriesPerValue, loading} = useFoodInfoSearch({product: product, gramsValue: grams})
    const {Translate} = useTranslate({word : product.name, from : 'eng', to : 'ru'})
    var uniqid = require('uniqid'); 
    // const [r, st] = useState('')

    // async function qwer() {
    //     const res = await Translate()
    //     st(res)
    // }

    // useEffect(() => {
    //     qwer()
    // }, [])

    const chevronStyle = infoVision ? "searched-icon searched-icon-active" : "searched-icon"
    function ChevronHanler() {
        if (productInfo) {
            setInfoVision(prev => !prev)
        }
        else {
            FetchProductInfo()
            setInfoVision(prev => !prev)
        }
    }

    const dispatch = useAppDispatch()
    const {addProduct} = UserProductSlice.actions

    async function SaveProduct() {
        const product1 = {
            id: uniqid(),
            name: product.name,
            calories: Number(CaloriesPerValue()),
            eating : eating
        }
        dispatch(addProduct( {
            id: uniqid(),
            name: product.name,
            calories: Number(CaloriesPerValue()),
            eating : eating
        }))
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://26.250.164.255:5000/addmeal', product1, {
                headers : {
                    'Authorization': `${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div className="searched-product">
            <div className="searched-product__preview">
                <p>{product.name}</p>
                <FontAwesomeIcon className={chevronStyle} icon={faChevronDown} onClick={ChevronHanler}></FontAwesomeIcon>
            </div>
            {loading && <p>Loading...</p>}
            {infoVision && <div className="searched-product__info">
                <div className="info-gramms">
                    <input value={grams.toString()} onChange={(event) => setGrams(Number(event.target.value))} type="number" name="" id="" />
                    <p>грамм</p>
                </div>
                <p>{CaloriesPerValue()} калории</p>
                <FontAwesomeIcon onClick={SaveProduct} className="searched-icon tick-icon" icon={faCheck}></FontAwesomeIcon>
            </div>}
        </div>
    )
}
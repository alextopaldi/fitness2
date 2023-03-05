import axios from "axios"
import { useState } from "react"
import { IProductInfoSearchResult, IProductSearchResult } from "../models/ProductSearchResult"
import { useTranslate } from "./Translate"

interface useFoodInfoSearchProps {
    product: IProductSearchResult,
    gramsValue: number
}

export function useFoodInfoSearch({product, gramsValue} : useFoodInfoSearchProps) {

    const apiKey = 'ebc7bffae2434085b102d7c100a3a7c3'
    const [productInfo, setProductInfo] = useState<IProductInfoSearchResult>()
    const [loading, setLoading] = useState(false)
    

    async function FetchProductInfo() {
        setLoading(true)
        const response = await axios.get<IProductInfoSearchResult>('https://api.spoonacular.com/food/ingredients/'+product.id+'/information?amount=1&apiKey='+apiKey)
        setProductInfo(response.data)
        setLoading(false)
    }

    function CaloriesPerValue() {
        let calories = productInfo?.nutrition.nutrients.find(item => item.name=='Calories')?.amount
        let weight = productInfo?.nutrition.weightPerServing.amount
        if (calories && weight) {
            return Math.floor(calories/weight*gramsValue)
        }
        return 'error'
    }

    return {productInfo, loading, FetchProductInfo, CaloriesPerValue}
}
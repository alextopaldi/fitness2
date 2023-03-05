import axios from "axios"
import { useState } from "react"
import { IProductSearchResult } from "../models/ProductSearchResult"
import { useTranslate } from "./Translate"

interface useFoodSearchProps {
    searchValue: string,
}

export function useFoodSearch({searchValue} : useFoodSearchProps) {
    const apiKey = 'ebc7bffae2434085b102d7c100a3a7c3'

    const [products, setProducts] = useState<IProductSearchResult[]>([])
    const [loading, setLoading] = useState(false)

    const {Translate} = useTranslate({word : searchValue, from : 'ru', to : 'eng'})

    async function ProductSearch() {
        setLoading(true)
        try {
          // const translatedValue = await Translate()
          const response1 = await axios.get('https://api.spoonacular.com/food/ingredients/search?apiKey='+apiKey+'&query='+searchValue+'&number=10')
          setProducts(response1.data.results)
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
    }

    return {ProductSearch, products, loading}
}
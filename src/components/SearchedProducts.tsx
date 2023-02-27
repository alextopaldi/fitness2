import { useState } from "react";
import { useFoodInfoSearch } from "../hooks/FoodInfoSearch";
import { IProductSearchResult } from "../models/ProductSearchResult";
 
interface SearchedProductsProps {
    product : IProductSearchResult
}

export function SearchedProducts({product} : SearchedProductsProps) {

    const [grams, setGrams] = useState(100)
    const {productInfo, FetchProductInfo, CaloriesPerValue, loading} = useFoodInfoSearch({product: product, gramsValue: grams})

    return(
        <div>
            <p>{product.name}</p>
            <button onClick={FetchProductInfo}>Info</button>
            {loading && <p>Loading...</p>}
            {productInfo && <div>
                <input value={grams.toString()} onChange={(event) => setGrams(Number(event.target.value))} type="number" name="" id="" />
                <p>{CaloriesPerValue()}</p>
            </div>}
        </div>
    )
}
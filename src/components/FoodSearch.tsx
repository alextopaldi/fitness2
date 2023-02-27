import { useState } from "react"
import { useFoodSearch } from "../hooks/FoodSearch"
import { SearchedProducts } from "./SearchedProducts"

export function FoodSearch() {

    const [searchValue, setSearchValue] = useState('')
    const {ProductSearch, products, loading} = useFoodSearch({searchValue: searchValue})

    return(
        <>
        <div className="food-search">
            <div className="search-line">
                <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" name="" id="" />
                <button onClick={ProductSearch}>Найти</button>
            </div>
            {loading && <p>Loading...</p>}
            {products && products.map(product => <SearchedProducts product={product}/>)}
        </div>
        </>
    )
}
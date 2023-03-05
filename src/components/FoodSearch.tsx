import { useState } from "react"
import { useFoodSearch } from "../hooks/FoodSearch"
import { SearchedProducts } from "./SearchedProducts"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FoodSearchProps {
    eating : string
}

export function FoodSearch({eating} : FoodSearchProps) {

    const [searchValue, setSearchValue] = useState('')
    const {ProductSearch, products, loading} = useFoodSearch({searchValue: searchValue})

    

    return(
        <>
        {/* <button onClick={Translate}>Translate</button> */}
        <div className="food-search">
            <div className="search-line">
                <input placeholder="Название продукта..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" name="" id="" />
                <FontAwesomeIcon className="search-line__icon" icon={faSearch} onClick={ProductSearch}></FontAwesomeIcon>
            </div>
            {loading && <p>Loading...</p>}
            {products && products.map(product => <SearchedProducts eating={eating} key={product.id} product={product}/>)}
        </div>
        </>
    )
}
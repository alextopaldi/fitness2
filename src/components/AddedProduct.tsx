import { IUserProduct } from "../models/UserProduct";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AddedProductProps {
    product : IUserProduct
}

export function AddedProduct({product} : AddedProductProps) {
    return(
        <div className="added-product">
            <p className="added-product__name">{product.name}</p>
            <div className="added-product__info">
                <p>8% РСК</p>
                <p>{product.calories} калорий</p>
                <FontAwesomeIcon className="added-product__icon" icon={faX}></FontAwesomeIcon>
            </div>
        </div>
    )
}
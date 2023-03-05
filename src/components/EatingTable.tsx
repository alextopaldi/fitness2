import {  } from "@fortawesome/free-regular-svg-icons";
import { faUtensils, faPlus, faSearch, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FoodSearch } from "./FoodSearch";
import { Modal } from "./Modal";
import { CSSTransition } from 'react-transition-group';
import { useState } from "react";
import { AddFood } from "./AddFood";
import { useAppSelector } from "../hooks/Redux";
import { AddedProduct } from "./AddedProduct";

export function EatingTable() {

    const [searchVision, setSearchVision] = useState(false)
    const [addFoodVision, setAddFoodVision] = useState(false)
    const [eating, setEating] = useState('')

    const {products} = useAppSelector(state => state.UserProductSlice)

    function AddProductOpener(eating : string) {
        setEating(eating)
        setAddFoodVision(true)
    }

    function SearchProductOpener(eating : string) {
        setEating(eating)
        setSearchVision(true)
    }


    return(
        <>
        <div className="eating-table">
            <div className="eating-results">
                <div className="eating-results__item">
                    <p>8%</p>
                    <p>РСК</p>
                </div>
                <div className="eating-results__item">
                    <p>1337</p>
                    <p>Калорий</p>
                </div>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Завтрак</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>1337</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('breakfast')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('breakfast')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {products.filter(item => item.eating == 'breakfast').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon className="eating-icon chevron" icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Обед</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>1337</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('lanch')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('lanch')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {products.filter(item => item.eating == 'lanch').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon className="eating-icon chevron" icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Ужин</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>1337</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('dinner')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('dinner')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {products.filter(item => item.eating == 'dinner').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon className="eating-icon chevron" icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Перекус</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>1337</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('snack')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('snack')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {products.filter(item => item.eating == 'snack').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon className="eating-icon chevron" icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <CSSTransition in={searchVision} timeout={300} classNames = "alert" unmountOnExit>
                <Modal onClose={() => setSearchVision(false)}>
                    <FoodSearch eating={eating}/>
                </Modal>
            </CSSTransition>
            <CSSTransition in={addFoodVision} timeout={300} classNames = "alert" unmountOnExit>
                <Modal onClose={() => setAddFoodVision(false)}>
                    <AddFood eating={eating}/>
                </Modal>
            </CSSTransition>
        </div>
        </>
    )
}
import { faUtensils, faPlus, faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FoodSearch } from "./FoodSearch";
import { Modal } from "./Modal";
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from "react";
import { AddFood } from "./AddFood";
import { useAppDispatch, useAppSelector } from "../hooks/Redux";
import { AddedProduct } from "./AddedProduct";
import { UserProductSlice } from "../redux/reducers/UserProductSlice";
import { useFetchProducts } from "../hooks/FetchProducts";
import { Loader } from "./Loader";
import { useFetchUserInfo } from "../hooks/FetchUserInfo";

export function EatingTable() {

    const [searchVision, setSearchVision] = useState(false)
    const [addFoodVision, setAddFoodVision] = useState(false)
    const [eating, setEating] = useState('')
    const [productVision, setProductVision] = useState({
        breakfast : false,
        lanch : false, 
        dinner : false,
        snack : false
    })

    const {products} = useAppSelector(state => state.UserProductSlice)
    const {info} = useAppSelector(state => state.UserInfoSlice)

    const maxCalories = info.calcResults.harris
    
    function caloriesSum(eating : string) {
        let sum = 0
        if (eating) {
            products.filter(item => item.eating == eating).map(product => sum += product.calories)
            return sum
        }
        else {
            products.map(product => sum += product.calories)
            return sum
        }
    }

    function rskPercent() {
        return caloriesSum('')/maxCalories*100
    }

    const dispatch = useAppDispatch()
    const {addProduct, fetchProduct} = UserProductSlice.actions

    function AddProductOpener(eating : string) {
        setEating(eating)
        setAddFoodVision(true)
    }

    function SearchProductOpener(eating : string) {
        setEating(eating)
        setSearchVision(true)
    }

    const {fetchProducts, loader} = useFetchProducts()
    const {fetchUserInfo} = useFetchUserInfo()

    async function fetchEatingTable() {
        await fetchProducts()
        await fetchUserInfo()
    }

    useEffect( () => {
        fetchEatingTable()
    }, [])

    const chevronStyle = {
        breakfast : productVision.breakfast ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
        lanch : productVision.lanch ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
        dinner : productVision.dinner ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
        snack : productVision.snack ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
    }

    return(
        <>
        {loader && <Loader/>}
        <div className="eating-table">
            <div className="eating-results">
                <div className="eating-results__item">
                    <p>{Math.round(rskPercent())}%</p>
                    <p>РСК</p>
                </div>
                <div className="eating-results__item">
                    <p>{caloriesSum('')}</p>
                    <p>Калорий</p>
                </div>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon instr-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Завтрак</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('breakfast')}</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('breakfast')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('breakfast')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.breakfast && products.filter(item => item.eating == 'breakfast').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, breakfast : !prev.breakfast}))} className={chevronStyle.breakfast} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon instr-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Обед</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('lanch')}</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('lanch')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('lanch')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.lanch && products.filter(item => item.eating == 'lanch').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, lanch : !prev.lanch}))} className={chevronStyle.lanch} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon instr-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Ужин</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('dinner')}</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('dinner')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('dinner')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.dinner && products.filter(item => item.eating == 'dinner').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, dinner : !prev.dinner}))} className={chevronStyle.dinner} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon instr-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>Перекус</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('snack')}</p>
                        <p>Калорий</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('snack')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('snack')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.snack && products.filter(item => item.eating == 'snack').map(product => <AddedProduct key={product.id} product={product}/>)}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, snack : !prev.snack}))} className={chevronStyle.snack} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <CSSTransition in={searchVision} timeout={300} classNames = "alert" unmountOnExit>
                <Modal onClose={() => setSearchVision(false)}>
                    <FoodSearch onClose={() => setSearchVision(false)} eating={eating}/>
                </Modal>
            </CSSTransition>
            <CSSTransition in={addFoodVision} timeout={300} classNames = "alert" unmountOnExit>
                <Modal onClose={() => setAddFoodVision(false)}>
                    <AddFood onClose={() => setAddFoodVision(false)} eating={eating}/>
                </Modal>
            </CSSTransition>
        </div>
        </>
    )
}
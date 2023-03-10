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
    const maxCalories = 3000

    const {products} = useAppSelector(state => state.UserProductSlice)

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

    const {fetchProducts} = useFetchProducts()

    useEffect( () => {
        fetchProducts()
    }, [])

    const chevronStyle = {
        breakfast : productVision.breakfast ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
        lanch : productVision.lanch ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
        dinner : productVision.dinner ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
        snack : productVision.snack ? 'eating-icon chevron chevron-active' : 'eating-icon chevron',
    }

    // const parentRef = useRef<HTMLDivElement>(null);
    // const childRef = useRef<HTMLDivElement>(null);
    // const [parentHeight, setParentHeight] = useState<string | null>(null);
    // const [childheight, SetChildheight] = useState<string | null>(null);

    // useEffect(() => {
    //     if (productVision && parentRef.current) {
    //       setParentHeight(`${parentRef.current.offsetHeight}px`);
    //     } else {
    //       setParentHeight(null);
    //     }
    //   }, [productVision]);

    return(
        <>
        <div className="eating-table">
            <div className="eating-results">
                <div className="eating-results__item">
                    <p>8%</p>
                    <p>??????</p>
                </div>
                <div className="eating-results__item">
                    <p>{caloriesSum('')}</p>
                    <p>??????????????</p>
                </div>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>??????????????</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('breakfast')}</p>
                        <p>??????????????</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('breakfast')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('breakfast')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.breakfast && products.filter(item => item.eating == 'breakfast').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, breakfast : !prev.breakfast}))} className={chevronStyle.breakfast} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>????????</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('lanch')}</p>
                        <p>??????????????</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('lanch')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('lanch')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.lanch && products.filter(item => item.eating == 'lanch').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, lanch : !prev.lanch}))} className={chevronStyle.lanch} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>????????</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('dinner')}</p>
                        <p>??????????????</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('dinner')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('dinner')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.dinner && products.filter(item => item.eating == 'dinner').map(product => <AddedProduct key={product.id} product={product}/> )}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, dinner : !prev.dinner}))} className={chevronStyle.dinner} icon={faChevronDown}></FontAwesomeIcon>
            </div>
            <div className="eating-table__string">
                <div className="string-preview">
                    <FontAwesomeIcon className="eating-icon" icon={faUtensils}></FontAwesomeIcon>
                    <h6>??????????????</h6>
                </div>
                <div className="string-results">
                    <div className="string-results__item">
                        <p>{caloriesSum('snack')}</p>
                        <p>??????????????</p>
                    </div>
                    <FontAwesomeIcon onClick={() => AddProductOpener('snack')} className="eating-icon plus-icon" icon={faPlus}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => SearchProductOpener('snack')} className="eating-icon search-icon" icon={faSearch}></FontAwesomeIcon>
                </div>
                {productVision.snack && products.filter(item => item.eating == 'snack').map(product => <AddedProduct key={product.id} product={product}/>)}
                <FontAwesomeIcon onClick={() => setProductVision(prev => ({...prev, snack : !prev.snack}))} className={chevronStyle.snack} icon={faChevronDown}></FontAwesomeIcon>
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
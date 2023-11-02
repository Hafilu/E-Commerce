import { combineReducers } from "redux";
import  { prodctReducers, selectedProdctReducer } from "./productReducers";


const rootReducers= combineReducers({
    allProducts:prodctReducers,
    product:selectedProdctReducer
    
})

export default rootReducers
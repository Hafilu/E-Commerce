
 
import {ActionTypes} from "../constants/Action-type"
import FakeStoreApi from "../../api/FakeStoreApi"
 


export const fetchProducts = ()=> async(dispatch)=> {
    const response = await FakeStoreApi.get("/products")
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
    console.log(response);
}

// export const setProducts = (products)=>{
//     return{
//         type:ActionTypes.SET_PRODUCTS,
//         payload:products
//     }
// }
export const selectedProduct = (product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct = ( )=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
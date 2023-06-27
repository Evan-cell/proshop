import {combineReducers,applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer,productDetailsReducer} from './reducers/ProductReducers';
import { cartReducer } from './reducers/CartReducers';
import {userLoginReducer,userRegisterReducer,userDetailsReducer} from './reducers/Userreducers'


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null       
const initialState = {
    cart: { cartItems : cartItemsFromStorage },
    userLogin: { userInfo : userInfoFromStorage}
}

const middlware = [thunk]

const store = configureStore({reducer}, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store

// , initialState, composeWithDevTools(applyMiddleware(...middlware))
import {combineReducers,applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer,productDetailsReducer} from './reducers/ProductReducers';
import { CartReducer } from './reducers/CartReducers';
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cart: { cartItems : cartItemsFromStorage }
}

const middlware = [thunk]

const store = configureStore({reducer}, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store

// , initialState, composeWithDevTools(applyMiddleware(...middlware))
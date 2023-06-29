import {combineReducers,applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer,productDetailsReducer} from './reducers/ProductReducers';
import { cartReducer } from './reducers/CartReducers';
import {userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer} from './reducers/Userreducers'


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
})
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null  
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
        JSON.parse(localStorage.getItem('shippingAddress')) : {}         
        
const initialState = {
    cart: { cartItems : cartItemsFromStorage, 
    shippingAddress: shippingAddressFromStorage
    },
    userLogin: { userInfo : userInfoFromStorage},

}

const middlware = [thunk]

const store = configureStore({reducer}, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store

// , initialState, composeWithDevTools(applyMiddleware(...middlware))
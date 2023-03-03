import {combineReducers,applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extentions'

const reducer = combineReducers({})

const initialState = {}

const middlware = [thunk]

const store = configureStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store
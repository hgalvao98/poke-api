import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState } from '../browser-storage'
import rootReducer from './reducers'

const initalState = {

}

const middleware = [thunk]

const store = configureStore({ reducer: rootReducer, initalState, devTools: composeWithDevTools(applyMiddleware(...middleware)), preloadedState: loadState() })

export default store;
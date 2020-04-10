import {combineReducers} from 'redux';
import counterReducer from './counter.js'
import isLoggedReducer from './isLogged'

const allReducers = combineReducers({
    counter : counterReducer,
    islogged : isLoggedReducer 
})

export default allReducers; 
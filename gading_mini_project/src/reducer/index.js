import { combineReducers } from 'redux'

import userReducer from './userReducer'
import counterReducer from './counterReducer'

const allReducers =  combineReducers({
    user: userReducer,
    counterReducer: counterReducer
})

export default allReducers
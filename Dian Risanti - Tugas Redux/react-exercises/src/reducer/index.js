import {combineReducers} from 'redux'
import userReducer from './userReducer'
import counterReducer from './counterReducer'

// untuk combine semua reducer
const allReducers = combineReducers({
    user: userReducer,
    counts: counterReducer
})

export default allReducers
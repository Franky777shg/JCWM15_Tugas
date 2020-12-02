import {combineReducers} from 'redux'
import loginReducer from './login_reducer'

let allReducers = combineReducers({
    login: loginReducer
})
export default allReducers
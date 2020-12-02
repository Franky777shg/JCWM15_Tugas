
import {combineReducers} from "redux"

import userReducer from "./userReducer"
import counterReducer from "./counter"

const allReducers=combineReducers(
    {
        user:userReducer,
        counter:counterReducer
    }
)


export default allReducers
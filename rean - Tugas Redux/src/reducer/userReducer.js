const INITIAL_STATE = {
    username: '',
    password: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOG_IN' :
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
            }
        case 'LOG_OUT' :
            return INITIAL_STATE
        default :
            return state
    }
}

export default userReducer
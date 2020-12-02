const INITIAL_STATE = {
    username: '',
    password: '',
    email: ''
}

const loginReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case 'LOG_IN' :
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
            }
            case 'LOG_OUT' :
                return INITIAL_STATE
            default :
                return state
    }
}
export default  loginReducer
const INITIAL_STATE = 0

const counterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TAMBAH" :
            return state + 1
        
        case "KURANG" :
            return state - 1

        default :
            return state
    }
}

export default counterReducer
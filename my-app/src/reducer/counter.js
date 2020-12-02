const INITIAL_STATE={
    count:0
}

const counterReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "tambah":
            return{
                ...state,
                count:state.count+1
            }
        case "kurang":
            return {
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}


export default counterReducer
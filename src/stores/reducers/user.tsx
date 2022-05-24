
const user = (state = {}, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                userInfo:action.userInfo,
                loginTrue:true
            }
        case "LOGOUT":
            return {
                ...state,
                userInfo:{},
                loginTrue:false
            }
        default: 
            return state
    }
}

export default user
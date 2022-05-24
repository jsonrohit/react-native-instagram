export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}


export const login = (userObj) => {
    return {
        type: "LOGIN",
        userInfo:userObj
    }
}


export const logout = () => {
    return {
        type: "LOGOUT"
    }
}
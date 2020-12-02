// NOTE TYPE === CASE yg ada di reducer
// data => berasal dr hasil transfer data component
// payload => namanya bisa apa aja sebenernya tp udh seperti kesepakatan
// payload akan dipake di reducer
export const login = (data) => {
    return {
        type: "LOG_IN",
        payload: data
    }
}

export const logout = () => {
    return {
        type: "LOG_OUT"
    }
}
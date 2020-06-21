const LoginReducer = (state = {}, actions) => {
    switch(actions.type){
        case 'LOGIN':
            return actions.payload
        default:
            return state
    }
}

export default LoginReducer



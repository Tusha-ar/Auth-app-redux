const auth = (state = false, actions)=>{
    switch(actions.type){
        case 'AUTH':
            return true
        default: 
            return state
    }
}

export default auth
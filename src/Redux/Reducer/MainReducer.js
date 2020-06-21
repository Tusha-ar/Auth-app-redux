import { combineReducers } from 'redux'
import auth from './auth'
import  LoginReducer  from './LoginReducer'

const MainReducer = combineReducers({
    LoginReducer,
    auth
})


export default MainReducer
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import login from '../Redux/Actions/login';

const Login = () =>{
    const inputStyle = {
        backgroundColor: 'transparent',
        border: '2px solid white',
        padding: '5px 10px',
        color: 'white',
        outline: 'none',
    }
    const[details, setDetails] = useState({})
    const dispatch = useDispatch()
    const loginHandler = ()=>{
        dispatch(login(details))
    }

    const changeHandler = (e) =>{
        switch(e){
            case 'email':
                setDetails({
                    email: e.target.value
                })
                break;
            case 'password':
                setDetails({
                    password: e.target.value
                })
                break;
            default: 
                return 0
        }
    }
    return(
        <div style={{
            height: '99vh',
            width: '100%',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                <h2 style={{color: 'white', textTransform: 'uppercase', display:'flex', 
                    justifyContent: 'center'}}>Login</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '25%'
            }}>
            <input type='Email' style={inputStyle} placeholder='Email' name='email' onChange={changeHandler}/>
            <input type='Password' style={inputStyle} placeholder='Password' name='password' onChange={changeHandler}/>
            <button style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                padding: '10px 30px',
                color: 'white',
                fontWeight: 'bolder',
                marginLeft: '10px',
                outline: 'none'
            }} onClick={loginHandler}>Sign In</button>
            </div>
        </div>
    )
}


export default Login
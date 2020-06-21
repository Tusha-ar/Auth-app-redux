import React from 'react';

const SignUp = () =>{
    const inputStyle = {
        backgroundColor: 'transparent',
        border: '2px solid white',
        padding: '5px 10px',
        color: 'white',
        outline: 'none',
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
                    justifyContent: 'center'}}>SignUp</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '25%'
            }}>
            <input type='Email' style={inputStyle} placeholder='Email'/>
            <input type='Password' style={inputStyle} placeholder='Password'/>
            <button style={{
                backgroundColor: 'transparent',
                border: '2px solid white',
                padding: '10px 30px',
                color: 'white',
                fontWeight: 'bolder',
                marginLeft: '10px',
                outline: 'none'
            }}>Sign In</button>
            </div>
        </div>
    )
}


export default SignUp
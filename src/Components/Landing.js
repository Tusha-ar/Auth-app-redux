import React from 'react';
import { Link } from 'react-router-dom';


class Landing extends React.Component {
    btnStyle = {backgroundColor: 'transparent',
    border: '2px solid white',
    padding: '10px 30px',
    color: 'white',
    fontWeight: 'bolder',
    marginLeft: '10px',
    outline: 'none'}

    render(){
        return(
            <div style={{backgroundColor: 'black', height: '99vh', width: '100%', marginTop: '0px'}}>
                <h1 style={{color: 'white', textTransform: 'uppercase', padding: '0', margin: '0', display:'flex', 
            justifyContent: 'center'}}>Just an Authuntication app</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90%'
            }}>
                <Link to='/login'><button style={this.btnStyle}>Sign In</button></Link>
                <button style={this.btnStyle}>Sign Up</button>
                <button style={this.btnStyle}>Dashboard</button>
            </div>
            </div>
        )
    }
}


export default Landing
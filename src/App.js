import React from 'react';
import Landing from './Components/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Signup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Landing}/>
        <Route path='/login' component={Login}/>
        <Route path='/signUp' component={SignUp}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

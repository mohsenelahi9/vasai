import React, { Component } from 'react';
import './app.css';
import profile from './img/images (1).png';


function App (){
    return(
 <div className="main">
    <div className="sub">
         <div>
             <div className="img">
                 <img src={profile} alt='profile'/>
                 
                 
            </div>
            <div>
                <h1>Login Page</h1>
            </div>
            <div>
                <input type='text' placeholder='Username' className='name'/>
            </div>
            <div className='sec-input'>
                <input type='password' placeholder='Password' className='name'/>
            </div>
            <div className='btn'>
            <button>Login</button>
            </div>

            <p className='extra'>
                <a href='#'> forgot password    </a> <br/> <a href='#'>    sign up </a>
            </p>
        </div>
    </div>
 </div>
    );
}
export default App  ;
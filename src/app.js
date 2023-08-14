import React, { Component } from 'react';
import './app.css';
import bgi from './img/desktop.jpg';

function App (){
    return(
 <div  className="main">
<div className='text'>
<span>hello</span>
</div>
    
    <div className="sub">
        
         <div>
            
             <div className="img">
             
            </div>
            <div>
                <h1>Hi ,wellcome to <span className='vis'>VIS</span><span className='ai'>AI</span></h1>
                <p>Let's get strat login to your account</p>
            </div>
            <div>
                <input type='text' placeholder='Username' className='name'/>
            </div>
            <div className='sec-input'>
                <input type='password' placeholder='Password' className='name'/>
            </div>
            

            <p className='extra'>
                <a > forgot password    </a> 
            </p>

            <div className='btn'>
            <button className='login' >Log in</button>
            
            <button  className='google'>  login with Google </button>
            </div>
<br/><br/><br/><br/><br/>
            <p className='extra'>
                I don't have an account <br/>
                 <a  href='#'> create account </a>
            </p>
        </div>
        
    </div>
    
 </div>

    );
}
export default App  ;
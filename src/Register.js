
import './Register.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Register() {
  
    const [showSolution, setShowSolution] = useState(false);
  
    const handleShowSolution = () => {
      setShowSolution(true);
    };
  return (
    <div class='animation-login'>
    <h2 class="tnd-vanakam1">TN Dynamo</h2>
    <h3 class="tnd-vanakam2">Welcomes you!</h3>
    <img  class="register-bg-image"src="data:image/jpeg;base64,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"></img>
     <h1 class="register-head">Register</h1>
        <form class="form-division">
            <label htmlFor='name'></label>
            <input className='Rinput-field' id="name" type="text" placeholder="Name"></input>
            <br></br>
            <br></br>
            <label htmlFor='name'></label>
            <input className='Rinput-field-email' id="name" type="email"  placeholder="Email"></input>
            <br></br>
            <br></br>
            <label htmlFor='name'></label>
            <input className='Rinput-field-password' id="name" type='password' placeholder="password"></input>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/thank" style={{ textDecoration: 'none' }}>

            <button type='submit' class="Rsubmit-button">Register</button>
            </Link>
            <div class="divi-r">
            <button type='button' class="Rreset-button">Reset</button>
            </div>
            <br></br>
            <br></br>
            <p>Already registered?</p>
            <Link to="/login"n>Login</Link>
            
           
        </form>

        
    </div>
  );
}

export default Register;

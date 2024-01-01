import { Link } from 'react-router-dom';
import './Login.css';
export default function Login(){
    return(
        <> 
        <img  class="t-im1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOCo6OVQHkckVQNSweKFDEQkUQ_J3Bfk4mQ&usqp=CAU"></img>
        <img  class="t-im2"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_Dnqf3eSxTvFAaLKXwHTbWNV5NoPEo-Lbg&usqp=CAU"></img>
        <img  class="t-im3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7OwlF3eB6X1wMENDzKPgfMX0QCm2N7DHtw&usqp=CAU"></img>

        <img  class="t-im4"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW13yNhOfKIOa5EvG2o9xdV6hu2NAS2SNyMQ&usqp=CAU"></img>

        <img  class="t-im5"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorgS3e4avHoyvI_V99YVciv_XE31vT7qVyA&usqp=CAU"></img>

             <h1 class="login-head">Login</h1>
             <form class="form-division-login">
           
            <br></br>
            <label htmlFor='name'></label>
            <input className='Linput-field-email' id="name" type="email"  placeholder="Email"></input>
            <br></br>
            <br></br>
            <label htmlFor='name'></label>
            <input className='Linput-field-password' id="name" type='password' placeholder="password"></input>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/dashboard">
<div class="submit-division-login">
            <button type='submit' class="Lsubmit-button">Login</button>
            </div>
            </Link>
            <div class="reset-division-login">

            <button type='button' class="Lreset-button">Reset</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <p>Dont have an account ?</p>
            <Link to="/register">
            <a href=''>Register</a>
            </Link>
        </form>
        </>
    );
}
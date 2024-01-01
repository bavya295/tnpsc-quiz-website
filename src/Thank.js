import "./Thank.css";
import { Link } from 'react-router-dom';

export default function Thank(){
    return(
        <>
        <div class="registration-window">
  <div class="message">
    <h2>Thank you for registering! You have sucessfully taken first step of your acheivement</h2>
    <Link to="/login" style={{ textDecoration: 'none' }}>

    <button class="login-thank">Login</button>
    </Link>
  </div>
</div>
        </>
    )
}
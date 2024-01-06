import'./Track.css';
import { Link } from 'react-router-dom';

export default function Track(){
    return (
      <div class='animation-login'>
    
     <header>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to="/dashboard"style={{ textDecoration: 'none' }}>
    <a class="navbar-brand" href="#">TN Dynamo</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <a class="nav-link active" aria-current="page" href="#">About us</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/dashboard"style={{ textDecoration: 'none' }}>
          <a class="nav-link" href="#">Dashboard</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/track" style={{ textDecoration: 'none' }}>
          <a class="nav-link" href="#">Tracking status</a>
          </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User experience
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/doubt" style={{ textDecoration: 'none' }}>
            <li><a class="dropdown-item" href="#">Doubt</a></li>
            </Link>
            <Link to="/feedback" style={{ textDecoration: 'none' }}>
            <li><a class="dropdown-item" href="#">Feedback</a></li>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
 <li><a class="dropdown-item" href="#">contact us</a></li>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>

            <li><a class="dropdown-item" href="#">Logout</a></li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<h1 class="track-head">Your Performance are Tracked!</h1>
<div class="status-div">
<ul>
    <li>
      <div class="track-display">
        <h3>Group 1 Examination</h3>
        <p><b>Started</b> on 05-JAN-2023</p>
        <p><b>Completed</b> 28 out of 1000</p>

        </div>
        <br></br>
        </li>
        <li>
      <div class="track-display">
        <h3>Group 1 Examination</h3>
        <p><b>Started</b> on 05-JAN-2023</p>
        <p><b>Completed</b> 28 out of 1000</p>

        </div>
        <br></br>
        </li>
        <li>
      <div class="track-display">
        <h3>Group 1 Examination</h3>
        <p><b>Started</b> on 05-JAN-2023</p>
        <p><b>Completed</b> 28 out of 1000</p>

        </div>
        <br></br>
        </li>
        <li>
      <div class="track-display">
        <h3>Group 1 Examination</h3>
        <p><b>Started</b> on 05-JAN-2023</p>
        <p><b>Completed</b> 28 out of 1000</p>

        </div>
        <br></br>
        </li>
</ul>
</div>
<footer>
  <div class="footer-content">
    <p>&copy; 2023 TN Dynamo. All Rights Reserved.:</p>
    <div class="social-icons">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-whatsapp"></i></a>

    </div>
  </div>
</footer>



    </div>
    );
}
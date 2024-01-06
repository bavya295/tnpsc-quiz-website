import './About.css';
import { Link } from 'react-router-dom';

export default function About(){
    return(
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
<img class="about-img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbfjg9Nc4i7fKXGo8VLyMo51Dn1eQDEiyHg&usqp=CAU"></img>
<img class="about-img1" src="data:image/jpeg;base64,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"></img>
<h1 class="about-us">About us!</h1>
<div class="about-description">
    <p>TN Dynamo is an educational website, offering free practice quizes for the TNPSC and other government of Tamilnadu examination. We are the aspiring students who are searched for the quiz website like this and finally created the correct website for the use of public at free cost
    </p>
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
</div>);
}
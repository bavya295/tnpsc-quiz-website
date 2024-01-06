import'./Dashboard.css';
import { Link } from 'react-router-dom';
import group1 from "./Images/Group 1.png";
import group2 from "./Images/Group 1 (1).png";
import group3 from "./Images/Group 1 (2).png";
import group4 from "./Images/Group 1 (3).png";
import cese from "./Images/Group 1 (4).png";
import assistant from "./Images/Group 1 (5).png";

export default function Dashboard(){
    return(
        <div class="animation-login">
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


<div className='profile-section'>
  <img class="profile-image"src="data:image/png;base64,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"></img>
    <h1 class="profile-detail-profile">Profile</h1>
    <br></br>
    <br></br>
    <h3 class="profile-detail"><u>Bavya R
    </u></h3>
    <br></br>
    <h3 class="profile-detail"><u>bavya295@gmail.com
    </u> </h3>
    <br>
    </br>
    <div class="notification">
  <h4>Notifications</h4>
  <p class="notification-display">Group 1- result announced</p>
  <p class="notification-display">Group 4- registration starts on december</p>
  <p class="notification-display">Check the seating availblity</p>
  <p class="notification-display">Group 3- result announced</p>

  <p class="notification-display">Group 2- result announced</p>


</div>
</div>

<div class="course-display">
   <h1 Class="explore-heading"><b>Explore Courses</b></h1>
   
   <div class="main-card-container">
   <div class="card-container">
   <Link to="/subfiles"style={{ textDecoration: 'none' }}>
   <div class="card" id="one" value="" data-level="intermediate" data-duration="1-3 months">
          <img src={group1}></img>
      </div>
</Link>
<Link to="/subfiles"style={{ textDecoration: 'none' }}>

      <div class="card" id="one" value="" data-level="intermediate" data-duration="1-3 months">
      <img src={group2}></img>
      </div>
</Link>
<Link to="/subfiles"style={{ textDecoration: 'none' }}>

      <div class="card" id="one" value="" data-level="intermediate" data-duration="1-3 months">
      <img src={group3}></img>
      </div>
</Link>
<Link to="/subfiles"style={{ textDecoration: 'none' }}>

      <div class="card" id="one" value="" data-level="intermediate" data-duration="1-3 months">
      <img src={group4}></img>
      </div>
</Link>
<Link to="/subfiles"style={{ textDecoration: 'none' }}>

      <div class="card" id="one" value="" data-level="intermediate" data-duration="1-3 months">
      <img src={cese}></img>
      </div>
</Link>
<Link to="/subfiles"style={{ textDecoration: 'none' }}>

      <div class="card" id="one" value="" data-level="intermediate" data-duration="1-3 months">
      <img src={assistant}></img>
      </div>
</Link>
     

</div>
</div>
   
</div>


<div class="Dashboard-pdf">
  <h1 style={{ color: "black", backgroundColor: "white",position:"relative",top:"-50px",fontWeight:"bold" }}>Download question paper PDF</h1>
  <div class="courses-grid">
    <div class="course-item">
    <div class="Group1">
                <h4>Group 1</h4>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2022
</a>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2023
</a>
</div>
    </div>
    <div class="course-item">
    <div class="Group1">
                <h4>Group 2</h4>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2022
</a>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2023
</a>
</div>
    </div>
    <div class="course-item">
    <div class="Group1">
                <h4>Group 3</h4>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2022
</a>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2023
</a>
</div>
    </div>
    <div class="course-item">
    <div class="Group1">
                <h4>Group 4</h4>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2022
</a>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2023
</a>
</div>
    </div>
    <div class="course-item">
    <div class="Group1">
                <h4>CESE</h4>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2022
</a>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2023
</a>
</div>
    </div>
    <div class="course-item">
    <div class="Group1">
                <h4>Asst.Engineer</h4>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2022
</a>
<a href="your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
  <i class="fas fa-file-pdf"></i> qp-2023
</a>
</div>
    </div>
  </div>
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
    )
}
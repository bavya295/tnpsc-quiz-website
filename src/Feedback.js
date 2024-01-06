import "./Feedback.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Feedback(){
  const date = new Date();
        const [feedback, setFeedback] = useState('');
        const [showModal, setShowModal] = useState(false);
      
        const handleInputChange = (event) => {
          setFeedback(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // You can add logic here to handle form submission to a backend
      
          // For demonstration purposes, just displaying the modal
          setShowModal(true);
        };
      
        const closeModal = () => {
          setShowModal(false);
        };
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
<h1 class="feedback-heading">Your feedback matters our growth !</h1>
<div className="post-feedback">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feedbackText">Write your feedback:</label><br />
        <textarea
          id="feedbackText"
          name="feedbackText"
          rows="4"
          cols="50"
          value={feedback}
          onChange={handleInputChange}
        ></textarea><br />
        <input type="submit" value="Submit" />
      </form>
    
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Thank you for your feedback! We appreciate it.</p>
            <p>submited on {date.toDateString()}</p>
          </div>
        </div>
      )}
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
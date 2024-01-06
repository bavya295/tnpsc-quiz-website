import'./Questions.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Questions(){
  const [question, setQuestion] = useState('What is the capital of France?');
  const [options, setOptions] = useState(['Paris', 'Berlin', 'London', 'Rome']);
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [solution, setSolution] = useState('Paris');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  let originalBackgroundColor; // Store the original background color

  const handleSubmit = () => {
    const quizContainer = document.querySelector('.quiz-container');
    
    
      originalBackgroundColor = quizContainer.style.backgroundColor; // Store the original color if not stored yet
    
  
    if (selectedOption === solution) {
      quizContainer.style.backgroundColor = '#1A5D1A'; // Change background color to green for correct answer
      console.log('Correct Answer!');
    } else {
      quizContainer.style.backgroundColor = '#952323'; // Change background color to red for incorrect answer
      console.log('Incorrect Answer!');
    }
  };
  
  const handleNextQuestion = () => {
    const quizContainer = document.querySelector('.quiz-container');
    if (!originalBackgroundColor) {
      quizContainer.style.backgroundColor = originalBackgroundColor; 
    }
  
  
    setQuestion('What is the largest mammal?');
    setOptions(['Elephant', 'Whale', 'Giraffe', 'Rhinoceros']);
    setSolution('Whale');
    setSelectedOption('');
  };
  
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return(
       
            <>
               
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
        <h1 class="test-chosen-heading">Group 1 Questions</h1>
        <h4 class="sub-folder" id="sub-folder">General Studies</h4>
        <div className="quiz-container">
       
      <div className="question">{question}</div>
      <div className="options">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button  class="q-button"onClick={handleShowModal}>Solution</button>
      <button class="q-button" onClick={handleSubmit}>Submit</button>
      <button class="q-button" onClick={handleNextQuestion}>Next</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h3>Solution:</h3>
            <p>{solution}</p>
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
        </>
        );
   
}
import "./Doubt.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export default function Doubt(){
  const [doubts, setDoubts] = useState([]);
  const [showRepliesFor, setShowRepliesFor] = useState(null);

  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    const newDoubt = {
      id: Date.now(),
      text: e.target.doubtText.value,
      replies: [],
    };
    setDoubts([...doubts, newDoubt]);
    e.target.reset();
  };

  const handleReply = (id) => {
    const replyText = prompt('Enter your reply:');
    if (replyText) {
      const updatedDoubts = doubts.map((doubt) => {
        if (doubt.id === id) {
          return { ...doubt, replies: [...doubt.replies, replyText] };
        }
        return doubt;
      });
      setDoubts(updatedDoubts);
    }
  };

  const handleShowAnswers = (id) => {
    setShowRepliesFor(id);
  };

  const handleCloseReplies = () => {
    setShowRepliesFor(null);
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
<div className="doubt-component">
      <div className="post-doubt">
        <form onSubmit={handleDoubtSubmit}>
          <label htmlFor="doubtText" className="heading-wd">Write your doubt:</label>
          <br />
          <textarea id="doubtText" name="doubtText" rows="4" cols="50" required></textarea>
          <br />
          <input class="submit-input"type="submit" value="Submit" />
        </form>
      </div>

      <div className="doubt-division">
        {doubts.map((doubt) => (
          <div className="doubt-subdiv" key={doubt.id}>
            <p>{doubt.text}</p>
            <button onClick={() => handleReply(doubt.id)}>Reply</button>
            <button onClick={() => handleShowAnswers(doubt.id)}>Show Answers</button>

            {showRepliesFor === doubt.id && (
              <div className="replies">
                <button onClick={handleCloseReplies} class="answer-close">Close</button>
                {doubt.replies.map((reply, index) => (
                  <p key={index}>{reply}</p>
                ))}
              </div>
            )}
          </div>
        ))}
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
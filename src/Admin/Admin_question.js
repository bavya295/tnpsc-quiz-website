import React, { useState } from 'react';
import "./Admin_question.css";

const AdminPagequestion = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(''); // New state for description
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    setImage(uploadedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = { question, options, correctAnswer, image, description }; // Include description in the new question object
    setSubmittedQuestions([...submittedQuestions, newQuestion]);
    // Reset state after submission
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    setImage(null);
    setDescription('');
  };

  return (
    <div class="adminquestion">
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Question:
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
          </label>
          <br />
          {options.map((option, index) => (
            <div key={index}>
              Option {index + 1}:
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <br />
          <label>
            Correct Answer:
            <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
  
  <textarea
  class="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    rows={4} 
    cols={50} 
    placeholder="Enter Explanation..."
  />
</label>
          <br />
          <p>or</p>
          <label>
            Upload Image:
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>

      <h2>Submitted Questions:</h2>
      <div class="disp-question">
        {/* Display submitted questions */}
        {submittedQuestions.map((q, index) => (
          <div key={index}>
            <h3>
              <b>
                <u>Question</u>
              </b>{' '}
              {index + 1}:
            </h3>
            <p class="question-display"> {q.question}</p>
            <ul class="option display">
              {q.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
            <p class="correct-answer">Correct Answer: {q.correctAnswer}</p>
            <p class="description">Description: {q.description}</p>
            {q.image && (
              <img
                src={URL.createObjectURL(q.image)}
                alt={`Image for Question ${index + 1}`}
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            )}
          </div>
        ))}
        <br></br>
      </div>
    </div>
  );
};

export default AdminPagequestion;

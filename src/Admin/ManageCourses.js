import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./ManageCourses.css";
const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  const addCourse = () => {
    if (courseName.trim() !== '') {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Define an alphabet
      const newId = alphabet[courses.length]; // Get a letter from the alphabet based on courses' length
      const newCourse = { id: newId, name: courseName };
      setCourses([...courses, newCourse]);
      setCourseName('');
      console.log(newId)
    }
  };
  

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the next page (Subdomain page)
    navigate('/adminsubdomain'); // Replace '/subdomain-page' with your desired path
  };
 
  const moveToNextStep = (id) => {
    // Handle navigation or any other action when moving to the next step
    console.log(`Moving to next step for course ID: ${id}`);
  };

  return (
    <div class="added-course">
      <h2>Add Course</h2>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Enter Course Name"
      />
      <button class="course-add"onClick={addCourse}>Add Course</button>

      <div>
        <h2>Added Courses:</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              {course.name} - {course.id}
           <br></br>
              <button class="course-del" onClick={() => deleteCourse(course.id)}>Delete</button>
              <button  class="course-next"onClick={handleNext}>Next</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddCourse;

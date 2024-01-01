import "./ManageCourses.css";
import React, { useState } from 'react';
export default function ManageCourses(){

    

    return(
        <>
        <div className="add-courses">
            <button type="button" className="toggle-btn-add">
                Add Course
            </button>
            
                <div className="course-section">
                    <h2>Add Course</h2>
                    <form  className="form">
                        <label htmlFor="courseName">Enter Name:</label>
                        <input id="courseName" type="text" name="courseName" className="input-field" />

                        <label htmlFor="courseID">Enter ID:</label>
                        <input id="courseID" type="text" name="courseID" className="input-field" />

                        <label htmlFor="courseDesc">Enter Description:</label>
                        <input id="courseDesc" type="text" name="courseDesc" className="input-field" />

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

                
          
        </div>


        <div className="delete-courses">
            <button type="button" className="toggle-btn-delete">
                Delete Course
            </button>
            
                <div className="delete-section">
                    <h2>Delete Course</h2>
                    <form className="form">
                        <label htmlFor="courseID">Enter ID to Delete:</label>
                        <input id="courseID" type="text" name="courseID" className="input-field" />

                        <button type="submit" className="submit-btn">Delete</button>
                    </form>
                </div>
            
        </div>
        <div class="manage-course">
            <h1>Manage Course</h1>
            <button class="course-add">add</button>
            <form className="form">
                        <label htmlFor="questionID">Enter Domain id</label>
                        <input id="questionID" type="text" name="courseID" className="input-field" />
                        <label htmlFor="questionOP1">Enter Questions</label>
                        <input id="questionOP1" type="text" name="courseID" className="input-field" />
                        <label htmlFor="questionOP2">Option 1</label>
                        <input id="questionOP2" type="text" name="courseID" className="input-field" />
                        <label htmlFor="questionOP3">Option 2</label>
                        <input id="questionOP3" type="text" name="courseID" className="input-field" />
                        <label htmlFor="questionOP4">Option 3</label>
                        <input id="questionOP4" type="text" name="courseID" className="input-field" />
                        <label htmlFor="correct-answer">Option 4</label>
                        <input id="correct-answer" type="text" name="courseID" className="input-field" />
                        <textarea id="explanation" name="message" rows="4" cols="50" placeholder="enter description"></textarea>
                        <p>or</p>
                        <label htmlFor="imageInput">Choose an image:</label>
            <input
                id="imageInput"
                type="file"
                accept="image/*"
               
            />
                        <button type="submit" className="submit-btn">Add Question</button>
                    </form>
                    <div class="manage-question-delete">
                    <form className="form">
                    <button class="course-add">Delete Question</button>
                    <label htmlFor="questionID-delete">Enter Questions id</label>
                        <input id="questionID-delete" type="text" name="courseID" className="input-field" />
                        <button type="submit" className="submit-btn">Delete</button>
                    </form>
                    
                    </div>
                    <br>
                    </br>
                    <div class="manage-question-modify">
                    <form className="form">
                    <button class="course-add">Update Question</button>
                    <label htmlFor="questionID-modify">Enter Questions id</label>
                        <input id="questionID-modify" type="text" name="courseID" className="input-field" />
                        <button type="submit" className="submit-btn">Update</button>
                    </form>
                   
                    </div>
                    <br></br>
                    <div class="manage-question-show">
                    <form className="form">
                    <button class="course-add">Show Question</button>
                    <label htmlFor="questionID-show">Enter Questions id</label>
                        <input id="questionID-show" type="text" name="courseID" className="input-field" />
                        <button type="submit" className="submit-btn">Show</button>
                    </form>
                    
                    </div>
                    
        </div>
        </>
    )
}
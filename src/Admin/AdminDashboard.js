import "./AdminDashboard.css";
import { Link } from 'react-router-dom';

export default function AdminDashboard(){
    return(
        <>
        <h1 class="welcome"><i>Welcome Bavya!</i></h1>
       <div class="side-layout">
    <h1>Bavya R</h1>
    <p>Administrator</p>
    <Link to="/admindashboard">
    <a href="#" class="active">Dashboard</a>
    </Link>
    <Link to="/managecourses">
    <a href="#">Manage Courses</a>
    </Link>
    <Link to="/managequriesandfeedback">
    <a href="#">Manage Queries</a>
    </Link>
    <Link to="/managequriesandfeedback">
    <a href="#">Manage Feedback</a>
    </Link>
</div>

<div class="count">
    <div class="Register-count">
<h1>Register count <h3><u>34</u></h3>
</h1>
     </div>
<di clas="user-count"></di>
<h1>Login count<h3><u>78</u></h3>
</h1>

</div>
<div class="Manage-pdf">
    <h1>Manage PDF</h1>
    <form>
        <label for="pdf-domain">Enter Course:</label>
        <input id="pdf-domain" type="text" name="course" class="input-field"></input>

        <label for="pdf-name">Enter Name:</label>
        <input id="pdf-name" type="text" name="name" class="input-field"></input>

        <label for="pdf-upload">Upload PDF:</label>
        <div class="file-upload">
            <input id="pdf-upload" type="file" accept=".pdf" name="pdfFile" class="input-file"></input>
            <label for="pdf-upload" class="file-label">Choose File</label>
        </div>

        <input type="submit" value="Submit" class="submit-btn"></input>

        
        <div class="pdf-list">
            <br></br>
            <h3>Uploaded PDFs:</h3>
            <ul>
                <li>
                    <span>filename.pdf</span>
                    <button class="delete-btn">Delete</button>
                </li>
               
            </ul>
        </div>
    </form>
</div>


        </>
    )
}
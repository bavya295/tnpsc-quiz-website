import "./AdminDashboard.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function AdminDashboard(){
    const [pdf, setPdf] = useState([
        { id: "G1", name: "group1-Social_science.pdf" },
        { id: "G2", name: "group1-Current_affairs.pdf" },
        { id: "G3", name: "group1-general_studies.pdf" }
      ]);
      
      const handlePdfSubmit = (event) => {
        alert("PDF added sucessfully!");
        event.preventDefault(); // Prevent default form submission behavior
    
        const course = event.target.elements.course.value; // Get course value
        const name = event.target.elements.name.value; // Get name value
    
        if (course && name) {
          const newPdf = { id: `G${pdf.length + 1}`, name: `${course}-${name}.pdf` };
          console.log(newPdf.id);
          setPdf([...pdf, newPdf]); // Add the new PDF to the PDF list
        }
    
        // Clear the form fields
        event.target.elements.course.value = '';
        event.target.elements.name.value = '';
      };
    
    const handlePdfDelete = (id) => {
        setPdf(pdf.filter((item) => item.id !== id));
      };
      
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
    <Link to="/managefeedback">
    <a href="#">Manage Feedback</a>
    </Link>
    <Link to="/">
   <button class="admin-logout">Logout</button>
    </Link>
</div>
<div class="pdf">
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
    <form onSubmit={handlePdfSubmit}>
        <label for="pdf-domain">Enter Course:</label>
        <input id="pdf-domain" type="text" name="course" class="input-field"></input>

        <label for="pdf-name">Enter Name:</label>
        <input id="pdf-name" type="text" name="name" class="input-field"></input>

        <label for="pdf-upload">Upload PDF:</label>
        <div class="file-upload">
            <input id="pdf-upload" type="file" accept=".pdf" name="pdfFile" class="input-file"></input>
            <label for="pdf-upload" class="file-label">Choose File</label>
        </div>

        <input type="submit" value="Submit" class="submit-btn" ></input>

        </form>
        <div class="pdf-list">
            <br></br>
            <h3>Uploaded PDFs:</h3>
            <ul>
  {pdf.map(pdf => (
    <li key={pdf.id}>
      <span>{pdf.name}</span>
      <button className="delete-btn" onClick={() => handlePdfDelete(pdf.id)}>Delete</button>
      <br></br>
      <br></br>
    </li>
  ))}
</ul>

        </div>
    
</div>
</div>

        </>
    )
}
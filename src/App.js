import './App.css';
import {Route,Routes} from 'react-router-dom';
import Homepage from './Homepaage';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Subfiles from './Subfiles';
import Questions from './Questions';
import Track from './Track';
import About from './About'
import Info from './Info';
import Doubt from './Doubt';
import Feedback from './Feedback';
import Thank from './Thank';
import AdminDashboard from './Admin/AdminDashboard';
import ManageCourses from './Admin/ManageCourses';
import ManageQuriesandFeedback from './Admin/ManageQuriesandFeedback';
function App() {
  return(
    <>
  
    
      <Routes>
        
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/track" element={<Track />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/subfiles" element={<Subfiles />} />
          <Route path="/contact" element={<Info />} />
          <Route path="/doubt" element={<Doubt />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thank" element={<Thank />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/managecourses" element={<ManageCourses />} />
          <Route path="/managequriesandfeedback" element={<ManageQuriesandFeedback />} />


          {/* Define other routes here */}
        
      </Routes>
   
  
    </>
);
}

export default App;

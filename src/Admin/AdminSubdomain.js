import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminSubdomain.css";
function AddSubdomain() {
  
  const [subdomainName, setSubdomainName] = useState('');
  const [subdomains, setSubdomains] = useState([]);

  const addSubdomain = () => {
    if (subdomainName.trim() !== '') {
      const newSubdomain = { id: subdomains.length + 1, name: subdomainName };
      setSubdomains([...subdomains, newSubdomain]);
      setSubdomainName('');
    }
  };

  const navigate = useNavigate();

  const handleAddQuestion = () => {
    // Navigate to the next page (Subdomain page)
    navigate('/adminpagequestion'); // Replace '/subdomain-page' with your desired path
  };

  return (
    <div class="subdomain">
      {/* Add Subdomain */}
      <h2>Add Subdomain</h2>
      <input
        type="text"
        value={subdomainName}
        onChange={(e) => setSubdomainName(e.target.value)}
        placeholder="Enter Subdomain Name"
      />
      <button onClick={addSubdomain}>Add Subdomain</button>
      <br></br>
      {/* Display Subdomains */}
      
      <h3>Subdomains:</h3>
      <ul>
        <br></br>
        {subdomains.map((subdomain) => (
          <li key={subdomain.id}>
            {subdomain.name} - {subdomain.id}
            <br></br>
            <button onClick={() => handleAddQuestion(subdomain.id)}>Add Question</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddSubdomain;

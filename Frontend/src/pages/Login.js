import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for API calls

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password
    };

    try {
      // Perform the login API call
      const response = await axios.post('http://localhost:8081/user/verify', loginData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Assuming a successful login (response status 200)
      if (response.status === 200) {
        console.log('Login successful:', response.data);

        // Redirect the user to the dashboard or desired page
        navigate('/dashboard'); // Change '/dashboard' to the route you want to navigate to
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="center-container">
      <div className="center-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3003/signup', {
        email,
        username,
        password,
      });

      setSuccess(response.data.message);
      setEmail('');
      setUsername('');
      setPassword('');
      setError(null);

      // Redirect to home page
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      setSuccess(null);
    }
  };

  const formStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '15px',
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Signup</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputStyle}>
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={inputStyle}>
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            id="username"
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={inputStyle}>
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      {success && <p className="mt-3 text-success">{success}</p>}
      {error && <p className="mt-3 text-danger">{error}</p>}
    </div>
  );
};

export default Signup;

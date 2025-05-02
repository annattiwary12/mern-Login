import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Registrationpage = () => {
  const [registerData, setRegisterData] = useState({
    username: '',
    password: ''
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', registerData);
      if (response.status === 201 || response.status === 200) {
        alert('Registered successfully!');
      }
    } catch (err) {
      console.error(err);
      alert('Registration failed.');
    }

    setRegisterData({ username: '', password: '' });
  };

  return (
    <div>
      <h1>Registration Page</h1> 
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerData.username}
            onChange={handleRegisterChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Registrationpage;

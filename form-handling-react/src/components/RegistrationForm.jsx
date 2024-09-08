import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation or API call here
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username input */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username} // Controlled input
          onChange={(e) => setUsername(e.target.value)} // Update state
          required
        />
      </div>

      {/* Email input */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
          required
        />
      </div>

      {/* Password input */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
          required
        />
      </div>

      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

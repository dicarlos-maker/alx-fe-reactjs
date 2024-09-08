import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors before validation
    const newErrors = {};

    // Basic validation checks
    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    // Set errors if there are any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, form can be submitted
      console.log('Form submitted:', { username, email, password });
      // Optionally, reset form fields and errors after successful submission
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
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
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
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
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
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
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

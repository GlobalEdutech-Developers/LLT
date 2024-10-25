import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure the CSS path is correct

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state to toggle password visibility

  // Validate form inputs
  const validate = () => {
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          // Simulate storing a token (e.g., JWT) or user session
          localStorage.setItem('token', 'dummy-token');
          navigate('/home'); // Redirect to home page after successful login
        } else {
          const data = await response.text(); // Read response as text
          setErrorMessage(data || 'Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred. Please try again.');
      }
    } else {
      setErrorMessage('Please correct the errors above');
    }
  };

  // Handle navigation to the registration page
  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <img src="src/assets/firstpagejpg/Asset 1@4x.png" alt="Educational Graphic" className="graphic" />
      </div>
      <div className="right-side">
        <div className="login-container">
          <div className="logo-section">
            <img src="src/assets/firstpagejpg/Asset 10@4x.png" alt="Logo" className="logo" />
          </div>
          <div className="form-section">
            <h2>Your Login Credentials</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-container">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' type
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <span
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </span>
                </div>
                {formErrors.password && <p className="error">{formErrors.password}</p>}
              </div>

              <button type="submit">Login</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <div className="signup-text">
              Don't have an Account?{' '}
              <span onClick={handleRegisterRedirect} style={{ color: '#007bff', cursor: 'pointer' }}>
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

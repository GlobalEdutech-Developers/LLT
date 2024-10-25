import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Ensure the CSS path is correct
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Validate form inputs
  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password.trim()) errors.password = 'Password is required';
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          setErrorMessage('');
          navigate('/'); // Redirect to login page after successful registration
        } else {
          setErrorMessage(result.message);
        }
      } catch (error) {
        setErrorMessage('Failed to register');
      }
    } else {
      setErrorMessage('Please correct the errors above');
    }
  };

  // Handle navigation to the login page
  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className="left-side">
        <img src="src/assets/firstpagejpg/Asset 1@4x.png" alt="Educational Graphic" className="graphic" />
      </div>
      <div className="right-side">
        <div className="register-container">
          {/* Uncomment the logo section if needed */}
          <div className="logo-section">
            <img src="src/assets/NEOD-LOGO-2.gif" alt="Logo" className="logo" />
          </div>
          <div className="form-section">
            <h2>Create Your Account</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                />
                {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                />
                {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>

              <div className="form-group password-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle password visibility
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    autoComplete="new-password"
                  />
                  <span onClick={togglePasswordVisibility} className="password-toggle-icon">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {formErrors.password && <p className="error">{formErrors.password}</p>}
              </div>

              <div className="form-group confirmpassword-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="confirmpassword-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'} // Toggle confirm password visibility
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    autoComplete="new-confirmPassword"
                  />
                  <span onClick={toggleConfirmPasswordVisibility} className="confirmpassword-toggle-icon">
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
              </div>

              <button type="submit">Sign Up</button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <div className="login-text">
              Already have an Account?{' '}
              <span onClick={handleLoginRedirect} style={{ color: '#007bff', cursor: 'pointer' }}>
                Log In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

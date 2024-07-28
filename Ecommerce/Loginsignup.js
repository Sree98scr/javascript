



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Loginsignup.css';

const Loginsignup = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp and Login
  const navigate = useNavigate(); // For navigation

  // Dummy user data storage (replace with actual API calls in production)
  const [userData, setUserData] = useState({
    email: 'test@example.com',
    password: 'password123',
    username: 'testuser'
  });

  // Handle sign-up form submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Check if user already exists (dummy check here)
    if (email === userData.email) {
      alert('An account with this email already exists. Please login.');
      return;
    }

    // Simulate API call for user registration
    console.log('Sign-Up Details:', { username, email, password });

    // Store user data (simulate registration)
    setUserData({ email, password, username });

    // Store user data in localStorage (simulate registration)
    localStorage.setItem('user', JSON.stringify({ email, password, username }));

    // Show alert and redirect to login page
    alert('Registration successful! Please log in.');
    setIsSignUp(false); // Switch to login form
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Verify user credentials (dummy verification here)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && email === storedUser.email && password === storedUser.password) {
      // On successful login, redirect to cart page
      navigate('/cart');
    } else {
      // Show alert if login fails
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={isSignUp ? handleSignUpSubmit : handleLoginSubmit}>
          <div className="loginsignup-fields">
            {isSignUp && (
              <input
                type="text"
                name="username"
                placeholder='Your Name'
                required={isSignUp}
              />
            )}
            <input
              type="email"
              name="email"
              placeholder='Email Address'
              required
            />
            <input
              type="password"
              name="password"
              placeholder='Password'
              required
            />
          </div>
          <button type="submit">{isSignUp ? 'Continue' : 'Login'}</button>
        </form>
        <p className="loginsignup-toggle">
          {isSignUp ? (
            <>Already have an account? <span onClick={() => setIsSignUp(false)}>Login here</span></>
          ) : (
            <>Don't have an account? <span onClick={() => setIsSignUp(true)}>Sign up here</span></>
          )}
        </p>
        {isSignUp && (
          <div className="loginsignup-agree">
            <input type="checkbox" name='agree' id='agree' />
            <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy.</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loginsignup;

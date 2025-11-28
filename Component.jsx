import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, isAuthenticated }) => {
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }

  const handleLoginClick = () => {
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Student Login Portal</h2>
      <p>Enter your credentials to access the dashboard.</p>
      {/* Simple button to simulate successful login */}
      <button onClick={handleLoginClick}>Log In</button>
    </div>
  );
};

export default Login;
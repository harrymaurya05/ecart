import React, { useState } from 'react';
import  './../assets/css/HomePage.css'
import Login from './Login';
import Signup from './Signup';


const HomePage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      {showLogin ? <Login /> : <Signup />}
      <p>
        {showLogin ? "Don't have an account? " : 'Already have an account? '}
        <span onClick={toggleForm}>{showLogin ? 'Signup here' : 'Login here'}</span>
      </p>
    </div>
  );
};

export default HomePage;

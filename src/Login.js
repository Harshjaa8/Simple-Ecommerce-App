import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate user login
    setUser({ name: 'Harsh' });
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login as Harsh</button>
    </div>
  );
}

export default Login;

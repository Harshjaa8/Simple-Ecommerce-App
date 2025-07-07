import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ProtectedRoute from './ProtectedRoute';
import ProductCard from './ProductCard';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';

function MainAppRoutes() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/checkout" style={{ marginRight: '10px' }}>Checkout</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <MainAppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

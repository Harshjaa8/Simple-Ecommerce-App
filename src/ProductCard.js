import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ProductCard({ name, price }) {
  const [liked, setLiked] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleLike = () => setLiked(!liked);

  return (
    <div
      className={`card ${theme}`}
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
      }}
    >
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={toggleLike}>
        {liked ? 'Liked ❤️' : 'Like 🤍'}
      </button>
    </div>
  );
}

export default ProductCard;

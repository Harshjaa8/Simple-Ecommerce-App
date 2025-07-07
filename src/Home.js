import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'iPhone 15', price: 79999 },
    { id: 2, name: 'MacBook Air', price: 109999 },
    { id: 3, name: 'AirPods Pro', price: 24999 },
    { id: 4, name: 'Apple Watch', price: 34999 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <SearchBar onSearch={setSearchTerm} />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default Home;

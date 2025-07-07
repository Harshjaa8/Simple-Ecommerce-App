import React from 'react';
import ProductCard from './ProductCard';

function ParentComponent() {
  return (
    <div>
      <ProductCard name="Smartphone" price={19999} />
    </div>
  );
}

export default ParentComponent;
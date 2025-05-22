import React from 'react';

export function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}
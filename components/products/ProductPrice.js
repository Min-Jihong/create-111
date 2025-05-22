import React from 'react';

export function ProductPrice({ originalPrice, discountedPrice }) {
  return (
    <div>
      {discountedPrice && (
        <span>{discountedPrice}원 (할인)</span>
      )}
      <span>{originalPrice}원</span>
    </div>
  );
}
import React from 'react';

export function StockStatus({ inStock }) {
  return <div>{inStock ? 'In Stock' : 'Out of Stock'}</div>;
}
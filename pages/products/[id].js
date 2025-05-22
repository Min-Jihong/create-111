import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { ProductPrice } from '@/components/products/ProductPrice';
import { ProductOptionSelector } from '@/components/products/ProductOptionSelector';
import { QuantitySelector } from '@/components/products/QuantitySelector';
import { AddToCartButton } from '@/components/products/AddToCartButton';
import { StockStatus } from '@/components/products/StockStatus';
import { ProductDescription } from '@/components/products/ProductDescription';
import { ProductReviews } from '@/components/products/ProductReviews';
import { RelatedProducts } from '@/components/products/RelatedProducts';

export default function ProductPage({ product }) {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto mt-10">
      <ProductImageGallery images={product.images} />
      <ProductPrice originalPrice={product.originalPrice} discountedPrice={product.discountedPrice} />
      <ProductOptionSelector options={product.options} onChange={setSelectedOptions} selectedOptions={selectedOptions} />
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton />
      <StockStatus inStock={product.inStock} />
      <ProductDescription description={product.description} />
      <ProductReviews reviews={product.reviews} />
      <RelatedProducts relatedProducts={product.relatedProducts} />
    </div>
  );
}
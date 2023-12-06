import React, { useEffect, useState } from 'react';
import Product from './Product';
import './ProductCard.css';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({
    image: '',
    title: '',
    price: '',
    reviewCount: '',
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct({
          image: json.image,
          title: json.title,
          price: json.price + ' $',
          reviewCount: `${json.rating.count} 리뷰`,
        });
      });
  }, [productId]);

  return (
    <div className="product-card">
      <Product {...product} />
    </div>
  );
};

export default ProductCard;

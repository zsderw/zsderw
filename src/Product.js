import React from 'react';

const Product = ({ image, title, price, reviewCount }) => {
  return (
    <div className="product">
      <img className="product-image" src={image} alt="Product" />
      <div className="product-details">
        <span className="product-name">{title}</span>
        <p className="product-price">{price}</p>
        <p className="product-review">{reviewCount}</p>
      </div>
    </div>
  );
};

export default Product;

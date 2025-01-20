import React, { useState, useEffect } from 'react';
import '../styles/Product.css';
import products from '../components/products';


const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);

  useEffect(() => {
    setSelectedColor(selectedProduct.colors[0]);
  }, [selectedProduct]);

  return (
    <div className="product" id="product">
      <img src={selectedColor.img} alt="shoe image" className="productImage" />
      <div className="productDetails">
        <h1 className="productTitle">{selectedProduct.title}</h1>
        <h2 className="productPrice">${selectedProduct.price}</h2>
        <p className="productDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, nam eos veritatis eum ipsam voluptatem porro earum.</p>
        <div className="colors">
          {selectedProduct.colors.map((color, index) => (
            <div
              key={index}
              className="colorOption"
              style={{ backgroundColor: color.code }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
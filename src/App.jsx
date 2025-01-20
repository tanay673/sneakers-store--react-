import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Product from './components/Product';
import Features from './components/Features';
import Footer from './components/Footer';
import Payment from './components/Payment';
import Gallery from './components/Gallery';
import products from './components/products';
import './App.css';
import NewSeason from './components/NewSeason';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);
  const [showPayment, setShowPayment] = useState(false);

  const handleMenuItemClick = (index) => {
    setSelectedProduct(products[index]);
    setSelectedColor(products[index].colors[0]);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (sizeIndex) => {
    // Handle size selection logic here
  };

  const handleProductButtonClick = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  return (
    <div className="App">
      <Navbar onMenuItemClick={handleMenuItemClick} />
      <Slider selectedProduct={selectedProduct} />
      {/* <Product
        selectedProduct={selectedProduct}
        selectedColor={selectedColor}
        onColorClick={handleColorClick}
        onSizeClick={handleSizeClick}
        onProductButtonClick={handleProductButtonClick}
      /> */}
      <Gallery />
      <NewSeason/>
      <Features />
      <Footer />
      {showPayment && <Payment onClose={handleClosePayment} />}
    </div>
  );
};

export default App;
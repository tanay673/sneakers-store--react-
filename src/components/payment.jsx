import React from 'react';
import '../styles/Payment.css';
import visa from '../assets/visa.png';
import master from '../assets/master.png';

const Payment = ({ onClose }) => {
  return (
    <div className="payment">
      <h1 className="payTitle">Personal Information</h1>
      <label>Name and Surname</label>
      <input type="text" className="payInput" placeholder="eg. Tanay Kshirsagar" />
      <label>Phone Number</label>
      <input type="text" className="payInput" placeholder="+1 42311 41234" />
      <label>Address</label>
      <input type="text" className="payInput" placeholder="eg. Bloom appartments" />
      <h1 className="payTitle">Card Information</h1>
      <div className="cardIcons">
        <img src={visa} alt="Visa" className="cardIcon" />
        <img src={master} alt="MasterCard" className="cardIcon" />
      </div>
      <input type="password" className="payInput" placeholder="Card Number" />
      <div className="cardInfo">
        <input type="text" className="payInput sm" placeholder="mm" />
        <input type="text" className="payInput sm" placeholder="yyyy" />
        <input type="text" className="payInput sm" placeholder="cvv" />
      </div>
      <button className="payButton">Checkout</button>
      <span className="close" onClick={onClose}>X</span>
    </div>
  );
};

export default Payment;
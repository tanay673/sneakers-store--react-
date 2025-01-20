import React from 'react';
import '../styles/Features.css';
import shipping from '../assets/shipping.png';
import returnImg from '../assets/return.png';
import gift from '../assets/gift.png';
import contact from '../assets/contact.png';

const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <img src={shipping} alt="shipping image" className="featureImage" />
        <span className="featureTitle">FREE SHIPPING</span>
        <span className="featureDiscription">Free worldwide shipping on all orders</span>
      </div>
      <div className="feature">
        <img src={returnImg} alt="return image" className="featureImage" />
        <span className="featureTitle">FREE SHIPPING</span>
        <span className="featureDiscription">No question return and easy refund in 14 days.</span>
      </div>
      <div className="feature">
        <img src={gift} alt="gift image" className="featureImage" />
        <span className="featureTitle">FREE SHIPPING</span>
        <span className="featureDiscription">Buy gift cards and use coupon codes easily.</span>
      </div>
      <div className="feature">
        <img src={contact} alt="contact image" className="featureImage" />
        <span className="featureTitle">FREE SHIPPING</span>
        <span className="featureDiscription">Keep in touch via email and support system.</span>
      </div>
    </div>
  );
};

export default Features;
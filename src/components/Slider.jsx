import React from 'react';
import '../styles/Slider.css';
import air from '../assets/air.png';
import jordan from '../assets/jordan.png';
import blazer from '../assets/blazer.png';
import crater from '../assets/crater.png';
import hippie from '../assets/hippie.png';

const Slider = () => {
  return (
    <div className="slider">
      <div className="sliderWrapper">
        <div className="sliderItem">
          <img src={air} alt="air shoe image" className="sliderImage" />
          <div className="sliderBg"></div>
          <h1 className="sliderTitle">AIR FORCE <br /> NEW <br />SEASON</h1>
          <h2 className="sliderPrice">$199</h2>
          <a href="#product">
            <button className="buyButton">BUY NOW</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={jordan} alt="air shoe image" className="sliderImage" />
          <div className="sliderBg"></div>
          <h1 className="sliderTitle">AIR JORDAN <br /> NEW <br />SEASON</h1>
          <h2 className="sliderPrice">$149</h2>
          <a href="#product">
            <button className="buyButton">BUY NOW</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={blazer} alt="air shoe image" className="sliderImage" />
          <div className="sliderBg"></div>
          <h1 className="sliderTitle">BLAZER <br /> NEW <br />SEASON</h1>
          <h2 className="sliderPrice">$159</h2>
          <a href="#product">
            <button className="buyButton">BUY NOW</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={crater} alt="air shoe image" className="sliderImage" />
          <div className="sliderBg"></div>
          <h1 className="sliderTitle">CARTER <br /> NEW <br />SEASON</h1>
          <h2 className="sliderPrice">$179</h2>
          <a href="#product">
            <button className="buyButton">BUY NOW</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={hippie} alt="air shoe image" className="sliderImage" />
          <div className="sliderBg"></div>
          <h1 className="sliderTitle">HIPPIE <br /> NEW <br />SEASON</h1>
          <h2 className="sliderPrice">$139</h2>
          <a href="#product">
            <button className="buyButton">BUY NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
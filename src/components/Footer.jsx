import React from 'react';
import '../styles/Footer.css';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';

const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer>
      <div className="footerLeft">
        <div className="footerMenu">
          <div className="footerMenuTitle">About Us</div>
          <ul className="fMenuList">
            <li className="fMenuItems">Company</li>
            <li className="fMenuItems">Contact</li>
            <li className="fMenuItems">Careers</li>
            <li className="fMenuItems">Affiliates</li>
            <li className="fMenuItems">Stores</li>
          </ul>
        </div>
        <div className="footerMenu">
          <div className="footerMenuTitle">Useful Links</div>
          <ul className="fMenuList">
            <li className="fMenuItems">Support</li>
            <li className="fMenuItems">Refund</li>
            <li className="fMenuItems">FAQ</li>
            <li className="fMenuItems">Feedback</li>
            <li className="fMenuItems">Stories</li>
          </ul>
        </div>
        <div className="footerMenu">
          <div className="footerMenuTitle">Products</div>
          <ul className="fMenuList">
            <li className="fMenuItems">Air Force</li>
            <li className="fMenuItems">Air Jordans</li>
            <li className="fMenuItems">Blazers</li>
            <li className="fMenuItems">Carter</li>
            <li className="fMenuItems">Hippie</li>
          </ul>
        </div>
      </div>
      <div className="footerRight">
        <div className="footerRightMenu">
          <h1 className="footerMenuTitle">Subscribe to our newsletter</h1>
          <div className="fMail">
            <input type="text" placeholder="your@email.com" className="fInput" />
            <button className="fButton">Join!</button>
          </div>
        </div>
        <div className="footerRightMenu">
          <h1 className="footerMenuTitle">Follow Us</h1>
          <div className="fIcons">
            <img src={facebook} alt="Facebook" className="fIcon" />
            <img src={twitter} alt="Twitter" className="fIcon" />
            <img src={instagram} alt="Instagram" className="fIcon" />
            <img src={whatsapp} alt="WhatsApp" className="fIcon" />
          </div>
        </div>
        <div className="footerRightMenu">
          <span className="copyright">@Tanay. All rights reserved. <span id="year">{currentYear}</span>.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import amazonLogo from '../../assets/Amazon-Logo-768x432.png';

const AmazonNavbar = () => {
  return (
    <header>
      {/* Top Navbar */}
      <div className="top-navbar d-flex justify-content-between align-items-center px-3 py-2">
        <div className="d-flex align-items-center gap-3">
          <img
            src={amazonLogo}
            alt="Amazon"
            className="amazon-logo"
          />
          <div className="location d-flex align-items-start text-white">
            <FaMapMarkerAlt className="me-1 mt-1" />
            <div style={{ lineHeight: '1' }}>
              <small>Delivering to Surat 394210</small>
              <div><strong>Update location</strong></div>
            </div>
          </div>
        </div>

        <div className="search-bar d-flex align-items-center">
     <select className="form-select category-select">
     <option>All</option>
    </select>

      <button className="btn search-icon-btn">
      <FaSearch size={18} />
     </button>
      </div>

        <div className="d-flex align-items-center text-white gap-3">
          <div className="lang d-flex align-items-center">
            <img src="https://flagcdn.com/in.svg" alt="India Flag" className="flag-icon me-1" />
            <span>EN</span>
          </div>
          <div className="account">
            <small>Hello, sign in</small>
            <div><strong>Account & Lists ▾</strong></div>
          </div>
          <div className="returns">
            <small>Returns</small>
            <div><strong>& Orders</strong></div>
          </div>
          <div className="cart d-flex align-items-center">
            <FaShoppingCart size={20} className="me-1" />
            <strong>Cart</strong>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bottom-navbar text-white px-3 py-2">
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <FaBars />
            <span>All</span>
          </div>
          <span>Amazon miniTV</span>
          <span>Sell</span>
          <span>Best Sellers</span>
          <span>Today's Deals</span>
          <span>Mobiles</span>
          <span>Customer Service</span>
          <span>Prime ▾</span>
          <span>Electronics</span>
          <span>Fashion</span>
          <span>New Releases</span>
          <span>Home & Kitchen</span>
          <span>Amazon Pay</span>
        </div>
      </div>
    </header>
  );
};

export default AmazonNavbar;

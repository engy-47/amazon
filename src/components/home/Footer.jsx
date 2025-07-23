import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import amazonLogo from '../../assets/Amazon-Logo-768x432.png';

const AmazonFooter = () => {
  return (
    <footer className="footer-section mt-5">
      <div className="text-center py-3 back-to-top">
        <a href="#">Back to Top</a>
      </div>

      <div className="footer-links text-light py-5">
        <div className="container">
          <div className="row text-start">
            <div className="col-6 col-md-3">
              <h6>Get to know Us</h6>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">Amazon Science</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6>Connect with Us</h6>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6>Make Money with Us</h6>
              <ul>
                <li><a href="#">Sell on Amazon</a></li>
                <li><a href="#">Sell under Amazon Accelerator</a></li>
                <li><a href="#">Protect and Build Your Brand</a></li>
                <li><a href="#">Amazon Global Selling</a></li>
                <li><a href="#">Supply to Amazon</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Fulfilment by Amazon</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Amazon Pay on Merchants</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6>Let Us Help You</h6>
              <ul>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Center</a></li>
                <li><a href="#">Recalls and Product Safety Alerts</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Amazon App Download</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <img
          src={amazonLogo}
          alt="Amazon"
          className="amazon-logo-footer"
        />
        <div className="language-selector d-inline-block mx-3">
          🌐 English
        </div>
        <div className="country-selector d-inline-block">
          🇮🇳 India
        </div>
      </div>

      <div className="footer-extras py-3">
        <div className="container">
          <div className="row text-start">
            <div className="col-6 col-md-3">
              <p><strong>AbeBooks</strong><br />Books, art<br />& collectibles</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>Amazon Web Services</strong><br />Scalable Cloud<br />Computing Services</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>Audible</strong><br />Download<br />Audio Books</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>IMDb</strong><br />Movies, TV<br />& Celebrities</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>Shopbop</strong><br />Designer<br />Fashion Brands</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>Amazon Business</strong><br />Everything For<br />Your Business</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>Prime Now</strong><br />2-Hour Delivery<br />on Everyday Items</p>
            </div>
            <div className="col-6 col-md-3">
              <p><strong>Amazon Prime Music</strong><br />100 million songs, ad-free<br />Over 15 million podcast episodes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center text-muted">
        <small>
          Conditions of Use & Sale &nbsp; | &nbsp; Privacy Notice &nbsp; | &nbsp; Interest-Based Ads<br />
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </small>
      </div>
    </footer>
  );
};

export default AmazonFooter;

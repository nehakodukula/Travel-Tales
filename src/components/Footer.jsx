import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div id="contact" className="f1">
          <span>Contact US</span>
          <ol>
            <li>Customer Support</li>
            <li>Service Gurantee</li>
            <li>More Service nfo</li>
          </ol>
        </div>
        <div id="About" className="f1">
          <span>About</span>
          <ol>
            <li>About TravelTales.com</li>
            <li>News</li>
            <li>Careers</li>
            <li>Terms & Condition</li>
            <li>Privacy and Cookies</li>
            <li>About Travel.com Group</li>
          </ol>
        </div>
        <div id="Other" className="f1">
          <span>Other Services</span>
          <ol>
            <li>Investor Relations</li>
            <li>TravelTales.com Rewards</li>
            <li>Affiliate Program</li>
            <li>List your property</li>
            <li>All Hostels</li>
            <li>Become a supplier</li>
            <li>Security</li>
          </ol>
        </div>
        <div id="Payment" className="f1">
          <span>Payment Methods</span>
          <div className="payimg">
            <img src="assets/payment/images.png" alt="PayPal"></img>
            <img
              src="assets/payment/images (1).png"
              alt="AmericanExpress"
            ></img>
            <img src="assets/payment/download.png" alt="MasterCard"></img>
            <img src="assets/payment/discover.png" alt="Discover"></img>
          </div>
          <span>Our Partners</span>
          <div className="partners">
            <img src="assets/payment/download (1).png" alt="Google"></img>
            <img src="assets/payment/download (2).png" alt="Makemytrip"></img>
            <img
              src="assets/payment/Airbnb_Logo_Bélo.svg.png"
              alt="Airbnb"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

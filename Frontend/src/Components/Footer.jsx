// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-start md:text-center lg:text-left">
        {/* Shop Go Trolly */}
        <div>
          <h3 className="font-bold mb-3">SHOP GO TROLLY</h3>
          <ul className="space-y-1">
            <li>CHARGERS</li>
            <li>WIRE</li>
            <li>CABLES</li>
            <li>ACCESSORIES</li>
            <li>PARTS</li>
            <li>TERMS OF SERVICE</li>
            <li>REFUND POLICY</li>
          </ul>
        </div>

        {/* Check This Out */}
        <div>
          <h3 className="font-bold mb-3">CHECK THIS OUT</h3>
          <ul className="space-y-1">
            <li>CUSTOMER PICS</li>
            <li>REVIEWS</li>
            <li>TESTIMONIALS</li>
            <li>PARTNERSHIPS</li>
            <li>ABOUT US</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold mb-3">CUSTOMER SERVICE</h3>
          <ul className="space-y-1">
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>WARRANTY</li>
            <li>SHIPPING</li>
            <li>RETURNS & EXCHANGES</li>
            <li>FAQ'S</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-3">CONTACT US</h3>
          <p className="whitespace-nowrap">CALL 000-987-433-668</p>
          <p className="break-all mt-1">EMAIL: GOTROLLY@GMAIL.COM</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-xs text-center lg:text-left px-4">
        ALL RIGHTS RESERVED | 2023
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 pt-24 mt-96">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Section 1: About */}
          <div>
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p className="text-sm">
              We are committed to providing high-quality courses to help you
              join software development Indurtry.
            </p>
          </div>
          {/* Section 2: Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Section 3: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="text-sm">Email: sanjayprasad7293@gmail.com</p>
            <p className="text-sm">Phone: +918825302750</p>
            <p className="text-sm">
              Address: 12B Main Street, Madurdaha, Kolkata 700100
            </p>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center text-sm">
          © {new Date().getFullYear()} JavaDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

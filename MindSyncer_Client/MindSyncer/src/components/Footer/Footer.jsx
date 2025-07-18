import React from 'react';
import { useState } from 'react';
import ContactUsPopup from '../pages/ContactUsPopup';
import logo from '../../assets/logo.png'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate();

  return (
    <footer className="bg-white border-t py-10 px-6 sm:px-12 lg:px-20 text-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <div className="text-xl font-bold flex justify-center items-center gap-2 text-gray-900">
            <div className="mt-5 rounded-xl text-xl font-bold">
                <img
                  src={logo}
                  alt="MindSyncer Logo"
                  className="w-20 h-20 rounded-full mx-auto mb-4 cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => navigate("/")}
                />
            </div>
            MindSyncer
          </div>
        </div>

        {/* Right: Quick Links + Stay Connected */}
        <div className="flex flex-col sm:flex-row gap-12 text-sm">
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1 text-gray-900">Quick Links</h3>
            {/* <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul> */}
             <button 
              onClick={() => setPopupOpen(true)}
              className="bg-white text-black rounded-xl text-xs"
            >
              Contact US
            </button>
            <ContactUsPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
            <button
              onClick={() => navigate('/AboutUs')}  
            >
              About Us
            </button>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Stay Connected</h3>
            <div className="flex gap-4 text-xl justify-center text-gray-600">
              <FaFacebookF className="hover:text-[#0F172A] cursor-pointer" />
              <FaInstagram className="hover:text-[#0F172A] cursor-pointer" />
              <a
                href="https://www.linkedin.com/in/mindsyncer-m2k-02b957375/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:text-[#0F172A] cursor-pointer" />
              </a>
              <a
                href="https://x.com/MindSyncer_m2k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-[#0F172A] cursor-pointer" />
              </a>
              <FaYoutube className="hover:text-[#0F172A] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-3">
        <p>© 2025 MindSyncer. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>

  );
}

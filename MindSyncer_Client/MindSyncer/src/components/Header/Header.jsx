import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // For hamburger and close icons
import ContactUsPopup from "../pages/ContactUsPopup";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm rounded-b-3xl">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-[#0F172A] text-white p-2 rounded-xl text-xl font-bold">
            {"</>"}
          </div>
          <span className="text-lg font-semibold text-gray-900">MindSyncer</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4 bg-gray-100 rounded-full px-2 py-1">
          {["/", "/StarProfiles", "/Pricing"].map((path, idx) => {
            const labels = ["Home", "Star Profiles", "Pricing"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full font-medium shadow-sm ${
                    isActive ? 'bg-gray-200 text-black ' : 'bg-white text-gray-900'
                  }`
                }
              >
                {labels[idx]}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/SignUp"
            className={({ isActive }) =>
              `bg-[#0F172A] px-5 text-white py-2 rounded-xl font-medium ${
                isActive ? 'underline' : ''
              }`
            }
          >
            Register/Login
          </NavLink>
          <button 
            onClick={() => setPopupOpen(true)}
            className="bg-white text-black rounded-xl font-medium"
          >
            Contact US
          </button>
          <ContactUsPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex flex-col bg-gray-100 rounded-xl p-3 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-medium shadow-sm ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-white text-gray-900'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/StarProfiles"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-medium shadow-sm ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-white text-gray-900'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Star Profiles
            </NavLink>
            <NavLink
              to="/Pricing"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-medium shadow-sm ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-white text-gray-900'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </NavLink>
  
            <NavLink
              to="/SignUp"
              className={({ isActive }) =>
                `bg-[#0F172A] px-4 py-2 rounded-xl font-medium ${
                  isActive ? 'text-green-500' : 'text-white'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Register/SignIn
            </NavLink>
            <button 
              onClick={() => setPopupOpen(true)}
              className="bg-[#0F172A] px-4 py-2 rounded-xl font-medium text-white">
              Contact US
            </button>
            <ContactUsPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

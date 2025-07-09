import React from "react";
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm rounded-b-3xl">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <div className="bg-[#0F172A] text-white p-2 rounded-xl text-xl font-bold">
              {"</>"}
            </div>
            <span className="text-lg font-semibold text-gray-900">MindSyncer</span>
          </div>
          <nav className="flex space-x-4 bg-gray-100 rounded-full px-2 py-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-medium shadow-sm ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-white text-gray-900'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/StarPortfolios"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-medium shadow-sm ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-white text-gray-900'
                }`
              }
            >
              Star Portfolios
            </NavLink>
            <NavLink
              to="/Pricing"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-medium shadow-sm ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-white text-gray-900'
                }`
              }
            >
              Pricing
            </NavLink>
          </nav>
        </div>

        {/* Right Side: Language and Login */}
        <div className="flex items-center space-x-4">
            <NavLink
              to="/SignIn"
              className={({ isActive }) =>
                `bg-[#0F172A]  px-5 py-2 rounded-xl font-medium ${
                  isActive ? 'text-green-500' : 'text-white'
                }`
              }
            >
              SignIn
            </NavLink>
            <NavLink
              to="/SignUp"
              className={({ isActive }) =>
                `bg-[#0F172A]  px-5 py-2 rounded-xl font-medium ${
                  isActive ? 'text-green-500' : 'text-white'
                }`
              }
            >
              Register/SignUp
            </NavLink>
        </div>
      </div>
    </header>
  );
}

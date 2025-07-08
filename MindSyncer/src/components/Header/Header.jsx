import React from "react";

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
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium shadow-sm">
              Home
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full font-medium">
              Star portfolios
            </button>
            <button className="text-gray-600 px-4 py-2 rounded-full font-medium">
              Pricing
            </button>
          </nav>
        </div>

        {/* Right Side: Language and Login */}
        <div className="flex items-center space-x-4">
            <button className="bg-[#0F172A] text-white px-5 py-2 rounded-xl font-medium">
                SignIn
            </button>
            <button className="bg-[#0F172A] text-white px-5 py-2 rounded-xl font-medium">
                Register/SignUp
            </button>
        </div>
      </div>
    </header>
  );
}

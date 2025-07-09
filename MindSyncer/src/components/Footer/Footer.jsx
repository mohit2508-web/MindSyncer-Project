import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 px-6 sm:px-12 lg:px-20 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Subscribe */}
        <div>
          <div className="text-xl font-bold flex items-center gap-2 text-gray-900">
            <div className="bg-[#0F172A] text-white p-2 rounded-xl">{'</>'}</div>
            MindSyncer
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Subscribe to our newsletter for the latest updates on features and releases.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email here"
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-gray-900">
              Join
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            By subscribing, you consent to our Privacy Policy and agree to receive updates.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Connect With Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Events</li>
            <li>Careers</li>
            <li>Partnerships</li>
            <li>Testimonials</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">Stay Connected</h3>
          <div className="flex gap-4 text-xl text-gray-600">
            <FaFacebookF className="hover:text-[#0F172A] cursor-pointer" />
            <FaInstagram className="hover:text-[#0F172A] cursor-pointer" />
            <FaTwitter className="hover:text-[#0F172A] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#0F172A] cursor-pointer" />
            <FaYoutube className="hover:text-[#0F172A] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-3">
        <p>© 2025 MindSyncer. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

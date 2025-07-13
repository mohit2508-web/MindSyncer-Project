import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ContactUsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-xl"
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-xl hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUsPopup;

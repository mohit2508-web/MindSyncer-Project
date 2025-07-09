// frontendJob.jsx
import React from 'react';

export default function Footer(){
  return (
      <div className="bg-white rounded-3xl shadow-md p-8 w-full ">
        <div className="flex justify-between items-start mb-8">
          <div>
            <ul className="space-y-2 text-sm font-medium text-gray-800">
              <li>Home</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-800 mb-2">Telegram</p>
            <img
              src="/path-to-your-qr-code.png"
              alt="Telegram QR"
              className="w-16 h-16"
            />
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 text-center mb-8">
          Demo Text
        </h1>

        <div className="flex justify-between text-sm text-gray-700">
          <p>
            <a href="#" className="underline text-blue-600">
              Tirikchilik
            </a>{' '}
            orqali bizni qo‘llab-quvvatlang
          </p>
          <p>
            Biz bilan bog‘lanmoqchimisiz?{' '}
            <a href="#" className="underline text-blue-600">
              Telegram
            </a>
          </p>
        </div>
      </div>
  );
};

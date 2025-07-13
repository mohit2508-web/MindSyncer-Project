import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 sm:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-900">
          About Us
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-[#0F172A]">MindSyncer</span>, 
          We connects developers by providing a collaborative platform where they can discuss ideas, track project progress, and communicate effectively.
           We make teamwork easy and help turn great ideas into reality.
        </p>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Founder 1 */}
          <div className="bg-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
            <img
              src="https://i.pravatar.cc/150?img=31"
              alt="Founder 1"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Mohit Jadon</h2>
            <p className="text-sm text-gray-600 mb-3">Backend & API Developer</p>
            <p className="text-sm text-gray-700">
              I handle the logic behind the scenes — databases, APIs, and functionality. Together, we make ideas a working reality.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="bg-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
            <img
              src="https://i.pravatar.cc/150?img=33"
              alt="Founder 2"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900 mb-1">KK</h2>
            <p className="text-sm text-gray-600 mb-3">rontend Developer & Designer</p>
            <p className="text-sm text-gray-700">
               I focus on crafting beautiful UIs, functionality, respnosiveness and smooth user experiences. My role at MindSyncer involves bringing our vision to life in the browser.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Mission</h3>
          <p className="text-md text-gray-700 max-w-3xl mx-auto">
            We aim to empower developers, businesses, and creators by building tools, apps, and platforms that are intuitive, efficient, and future-ready.
          </p>
        </div>
      </div>
    </div>
  );
}

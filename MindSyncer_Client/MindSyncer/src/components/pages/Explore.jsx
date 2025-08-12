import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Explore() {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/users`)
      .then(res => setProfiles(res.data))
      .catch(err => console.error("Failed to fetch profiles:", err));
  }, [apiUrl]);

  const filteredProfiles = profiles.filter(profile => {
    const query = searchQuery.toLowerCase();
    return (
      profile.fullName.toLowerCase().includes(query) ||
      profile.role.toLowerCase().includes(query) ||
      profile.skills.some(skill => skill.toLowerCase().includes(query))
    );
  });

  return (
    <div className="max-w-10xl mx-auto mt-6 mb-8 px-4">
      {/* Header section */}
      <section>
        <div className="max-w-4xl mx-auto text-center py-16">
          <h2 className="text-xl font-semibold mb-6">🔥 Explore by Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Frontend', 'Backend', 'AI/ML', 'UI/UX', 'DevOps', 'Open Source'].map(skill => (
              <span
                key={skill}
                onClick={() => setSearchQuery(skill)}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-800 text-sm cursor-pointer transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Search bar */}
          <div className="max-w-3xl mx-auto mb-3 mt-3">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white focus-within:ring-2 focus-within:ring-blue-200 transition">
              <svg
                className="h-5 w-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, skills, or role..."
                className="w-full bg-transparent outline-none placeholder-gray-500 text-sm"
              />
              <button
                className="bg-[#0F172A] text-white text-sm px-4 py-1.5 rounded-full hover:bg-[#1E293B] transition ml-2"
                onClick={(e) => e.preventDefault()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Developers section */}
      <div className="min-h-screen px-6 py-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Developers</h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {filteredProfiles.length === 0 ? (
           <p className="text-center text-gray-500 flex items-center justify-center gap-2">
           
            🚀 <span className="font-semibold text-blue-500 ">Great minds</span> are coming your way…
            <span className="italic text-purple-500"> Please wait!</span>
          </p>

          ) : (
            filteredProfiles.map(profile => (
              <div
                key={profile._id}
                className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg border border-gray-200 p-6 gap-6"
              >
                <img
                  src={profile.profileImage || `https://i.pravatar.cc/150?u=${profile._id}`}
                  alt={profile.fullName}
                  className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">{profile.fullName}</h3>
                  <p className="text-sm text-gray-500">{profile.role}</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    {profile.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    className="px-5 py-2 bg-black text-white rounded-full hover:bg-black-700 transition"
                    onClick={() => {
                      navigate(`/profile/${profile._id}`)
                      // console.log(`${profile.socials}`)
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

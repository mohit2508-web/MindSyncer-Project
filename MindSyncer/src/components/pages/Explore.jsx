import React from 'react';

const dummyProfiles = [
  {
    id: 1,
    name: 'Aditi Sharma',
    role: 'Frontend Developer',
    skills: ['React', 'Tailwind', 'Figma'],
    location: 'Remote',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Rahul Jain',
    role: 'Full Stack Engineer',
    skills: ['Node.js', 'MongoDB', 'Express'],
    location: 'India',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
  // Add more fake profiles or fetch from backend later
];

export default function Explore() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Explore Developers</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyProfiles.map(profile => (
          <div key={profile.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="text-gray-600">{profile.role}</p>
            <p className="text-sm text-gray-500 mt-1">{profile.location}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {profile.skills.map(skill => (
                <span
                  key={skill}
                  className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="mt-4 w-full bg-[#0F172A] text-white py-2 rounded-lg hover:bg-[#1e293b]">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

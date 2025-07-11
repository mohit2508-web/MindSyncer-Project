import React from 'react';

const featuredProfiles = [
  {
    id: 1,
    name: 'Aditi Sharma',
    role: 'Frontend Dev',
    location: 'Remote',
    bio: 'Passionate about building UI systems and smooth user experiences.',
    skills: ['React', 'Tailwind', 'Figma'],
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Rahul Jain',
    role: 'Full Stack',
    location: 'India',
    bio: 'MERN stack expert focused on scalable backend and clean frontend.',
    skills: ['Node.js', 'MongoDB', 'GraphQL'],
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 3,
    name: 'Sneha Kapoor',
    role: 'Backend Dev',
    location: 'Bangalore',
    bio: 'Loves building fast and reliable APIs with Django and PostgreSQL.',
    skills: ['Django', 'PostgreSQL', 'Redis'],
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

const trendingProjects = [
  {
    title: 'MindSyncer Clone',
    author: 'Karan Mehta',
    tags: ['React', 'MongoDB'],
  },
  {
    title: 'AI Pairing Tool',
    author: 'Aditi Sharma',
    tags: ['Python', 'NLP'],
  },
];

export default function Explore() {
  return (
    <div className="max-w-10xl mx-auto mt-6 mb-8 px-4">
      {/* Developer Section */}
      <section>
        <div className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-xl font-semibold mb-6">🔥 Explore by Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Frontend', 'Backend', 'AI/ML', 'UI/UX', 'DevOps', 'Open Source'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-800 text-sm cursor-pointer"
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
                placeholder="Search by name, skills, or role..."
                className="w-full bg-transparent outline-none placeholder-gray-500 text-sm"
              />
              <button className="bg-[#0F172A] text-white text-sm px-4 py-1.5 rounded-full hover:bg-[#1E293B] transition ml-2">
                Search
              </button>
            </div>
          </div>

        </div>


        <div className="min-h-screen px-6 py-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Developers</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {featuredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg border border-gray-200 p-6 gap-6"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.role} • {profile.location}</p>
                  <p className="mt-3 text-gray-700 text-sm">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="px-5 py-2 bg-[#0F172A] text-white rounded-full hover:bg-[#1E293B] transition">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Projects */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">🚀 Trending Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {trendingProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-xl p-6 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-2">by {project.author}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black rounded-2xl text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to be featured?</h2>
        <p className="text-gray-300 mb-6">Build your profile and start connecting with the best.</p>
        <button className="px-6 py-3 bg-white text-[#0F172A] font-medium rounded-full hover:bg-gray-100 transition">
          Join Now
        </button>
      </section>
    </div>
  );
}

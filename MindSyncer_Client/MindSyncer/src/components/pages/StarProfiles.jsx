import { useEffect, useState } from "react";
import { FiEye, FiThumbsUp } from "react-icons/fi";

export default function StarProfiles() {
  const [starUsers, setStarUsers] = useState([]);
  const [exploreUsers, setExploreUsers] = useState([]);

  useEffect(() => {
    // Simulated API data
    setStarUsers([
      {
        id: 1,
        name: "Aarav Sharma",
        role: "Full Stack Developer",
        avatar: "https://i.pravatar.cc/150?img=1",
        views: 4321,
        likes: 892,
      },
      {
        id: 2,
        name: "Neha Verma",
        role: "UI/UX Designer",
        avatar: "https://i.pravatar.cc/150?img=2",
        views: 3789,
        likes: 745,
      },
      {
        id: 3,
        name: "Rohan Patel",
        role: "ML Engineer",
        avatar: "https://i.pravatar.cc/150?img=3",
        views: 3012,
        likes: 689,
      },
    ]);

    setExploreUsers([
      {
        id: 4,
        name: "Ishita Rao",
        role: "Frontend Developer",
        avatar: "https://i.pravatar.cc/150?img=4",
        views: 1800,
        likes: 400,
      },
      {
        id: 5,
        name: "Karan Mehta",
        role: "Data Analyst",
        avatar: "https://i.pravatar.cc/150?img=5",
        views: 2200,
        likes: 320,
      },
      {
        id: 6,
        name: "Sara Khan",
        role: "Cybersecurity Enthusiast",
        avatar: "https://i.pravatar.cc/150?img=6",
        views: 2100,
        likes: 290,
      },
    ]);
  }, []);

  const ProfileCard = ({ user }) => (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
      />
      <h3 className="text-xl font-semibold mt-4">{user.name}</h3>
      <p className="text-sm text-gray-300">{user.role}</p>
      <div className="flex gap-4 mt-4 text-sm">
        <span className="flex items-center gap-1">
          <FiEye className="text-yellow-400" />
          {user.views}
        </span>
        <span className="flex items-center gap-1">
          <FiThumbsUp className="text-pink-400" />
          {user.likes}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-black text-white p-6">
      {/* Star Profiles Section */}
      <h2 className="text-3xl font-bold text-center mb-10">🌟 Star Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {starUsers.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>

      {/* Explore More Section */}
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">🔍 Explore Candidates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {exploreUsers.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", formData);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");
      navigate("/partners");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-neutral-gray to-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-neutral-900 to-neutral-700 text-white p-10 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-2">Welcome to MindSyncer</h2>
          <p className="text-sm mb-6 text-center">
            Find your ideal teammates for projects, hackathons & learning.
          </p>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
            alt="Study"
            className="w-64 h-auto object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>

        {/* Right Side (Glassmorphic Form) */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-10 space-y-6 
            bg-white/10 backdrop-blur-lg border border-white/20 
            rounded-r-2xl shadow-lg text-white"
        >
          <h2 className="text-2xl font-bold text-center text-white drop-shadow">
            Sign in to continue
          </h2>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-white/70" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
               className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <FiLock className="absolute left-3 top-3 text-white/70" />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-3 bg-gray-600 pl-12 border-gray-500 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white/20 text-white font-semibold py-3 rounded-lg transition hover:bg-white/30 hover:text-black"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

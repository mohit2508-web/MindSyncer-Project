import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/auth/login", formData);
      const { token, user } = res.data;

      // Store user and token
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");
      navigate("/partners"); // or dashboard
    } catch (err) {
      alert(err.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className=" md:block md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-700 text-white  items-center justify-center p-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-lg">Log in to connect with your study partners.</p>
            <img
              src="https://storyset.com/illustration/secure-login/amico"
              alt="Login"
              className="mt-6 w-72"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-blue-600">
            Login to StudySyncer
          </h2>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

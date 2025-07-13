import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    role: "",
    skills: "",
  });

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;

    if (!user || !user.id) {
      alert("Invalid session. Please login again.");
      navigate("/login");
      return;
    }

    setUserId(user.id);

    axios
      .get(`${apiUrl}/${user.id}`)
      .then((res) => {
        setFormData({
          fullName: res.data.fullName || "",
          emailAddress: res.data.emailAddress || "",
          role: res.data.role || "",
          skills: Array.isArray(res.data.skills) ? res.data.skills.join(", ") : "",
        });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        alert("Error fetching user details. Please try again.");
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      fullName: formData.fullName,
      emailAddress: formData.emailAddress,
      role: formData.role,
      skills: formData.skills.split(",").map((s) => s.trim()).filter(Boolean),
    };

    try {
      const res = await axios.put(`${apiUrl}/${userId}`, updatedData);

      if (res.data && res.data.user) {
        // 🟢 Update localStorage
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // 🟢 Show alert
        alert(res.data.message || "Profile updated successfully!");

        // 🟢 Update formData
        setFormData({
          fullName: res.data.user.fullName,
          emailAddress: res.data.user.emailAddress,
          role: res.data.user.role,
          skills: Array.isArray(res.data.user.skills) ? res.data.user.skills.join(", ") : "",
        });
      } else {
        alert("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Error updating:", err.response ? err.response.data : err);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma separated)"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

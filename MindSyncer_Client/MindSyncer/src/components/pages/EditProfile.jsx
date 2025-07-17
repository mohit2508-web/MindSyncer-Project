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
    profileImage: "",
    journey: "",
    education: "",
    achievements: "",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    website: "",
  });

  const userStr = localStorage.getItem("user");

  useEffect(() => {
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
        const data = res.data;
        setFormData({
          fullName: data.fullName || "",
          emailAddress: data.emailAddress || "",
          role: data.role || "",
          skills: Array.isArray(data.skills) ? data.skills.join(", ") : "",
          profileImage: data.profileImage || "",
          journey: data.journey || "",
          education: Array.isArray(data.education) ? data.education.join(", ") : "",
          achievements: Array.isArray(data.achievements) ? data.achievements.join(", ") : "",
          github: data.socials?.github || "",
          linkedin: data.socials?.linkedin || "",
          twitter: data.socials?.twitter || "",
          instagram: data.socials?.instagram || "",
          website: data.socials?.website || "",
        });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        alert("Error fetching user details. Please try again.");
      });
  }, [apiUrl, navigate, userStr]);

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
      profileImage: formData.profileImage,
      journey: formData.journey,
      education: formData.education.split(",").map((e) => e.trim()).filter(Boolean),
      achievements: formData.achievements.split(",").map((a) => a.trim()).filter(Boolean),
      socials: {
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        instagram: formData.instagram,
        website: formData.website,
      },
    };

    try {
      const res = await axios.put(`${apiUrl}/${userId}`, updatedData);

      if (res.data && res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert(res.data.message || "Profile updated successfully!");
        navigate('/login');
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
        {[
          { label: "Full Name", name: "fullName" },
          { label: "Email Address", name: "emailAddress", type: "email" },
          { label: "Role", name: "role" },
          { label: "Skills (comma separated)", name: "skills" },
          { label: "Profile Image URL", name: "profileImage" },
          { label: "Journey", name: "journey" },
          { label: "Education (comma separated)", name: "education" },
          { label: "Achievements (comma separated)", name: "achievements" },
          { label: "GitHub URL", name: "github" },
          { label: "LinkedIn URL", name: "linkedin" },
          { label: "Twitter URL", name: "twitter" },
          { label: "Instagram URL", name: "instagram" },
          { label: "Website URL", name: "website" },
        ].map(({ label, name, type = "text" }) => (
          <input
            key={name}
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={label}
            className="w-full p-2 border rounded"
          />
        ))}

        {/* <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => {
            localStorage.removeItem("user");
            // navigate('/login')
          }}
        >
          Save Changes
        </button> */}
        {/* <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => {
            localStorage.removeItem("user");
            setShowPopup(true)
          }}>Save changes</button>
        <LoginAgainPopup isOpen={showPopup} onClose={() => setShowPopup(false)} /> */}
      </form>
    </div>
  );
}

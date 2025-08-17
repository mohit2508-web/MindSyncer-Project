import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Typed from "typed.js";
import Marquee from "react-fast-marquee";

const HeroPage = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  // 👇 Fake real-time stats
  const [developersCount, setDevelopersCount] = useState(2000);
  const [projectsCount, setProjectsCount] = useState(1000);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["coder", "designer", "innovator", "investor"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typedInstance.current.destroy();
  }, []);

  useEffect(() => {
    const devInterval = setInterval(() => {
      setDevelopersCount((prev) => prev + Math.floor(Math.random() * 3)); // +0 to 2
    }, 1200);

    const projInterval = setInterval(() => {
      setProjectsCount((prev) => prev + Math.floor(Math.random() * 2)); // +0 to 1
    }, 1600);

    return () => {
      clearInterval(devInterval);
      clearInterval(projInterval);
    };
  }, []);

  return (
    <main>
      <section className="w-full bg-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Find your perfect{" "}
            <span
              ref={typedRef}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600"
            ></span>{" "}
            in seconds
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Collaborate with developers, designers, and professionals to bring
            your next big idea to life. MindSyncer helps you build meaningful
            connections and successful projects.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <Link to="/SignUp">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
                Join Now
              </button>
            </Link>
            <NavLink to="/Explore">
              <button className="bg-white text-black border border-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
                View Profiles
              </button>
            </NavLink>
          </div>

          <Marquee speed={50} gradient={false} pauseOnHover>
            <div className="flex gap-3 text-sm text-gray-700">
              {[
                "React", "Python", "Node.js", "AI/ML", "Web3", "UI/UX",
                "TypeScript", "Figma", "MongoDB", "Docker", "TailwindCSS", "Kubernetes"
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-4 py-1 rounded-full shadow-sm mx-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How MindSyncer Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Create Your Profile",
              desc: "Highlight your skills, experiences, and goals. Let others know what you’re building or seeking."
            },
            {
              title: "Find Your Match",
              desc: "Use smart filters to discover ideal teammates, collaborators, or co-founders."
            },
            {
              title: "Collaborate & Build",
              desc: "Connect, chat, share tasks, and build products together — all in one place."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-100 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Growing Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-gray-700">
          <div>
            <h3 className="text-4xl font-bold text-black">
              {developersCount.toLocaleString()}+
            </h3>
            <p className="mt-2">Developers Joined</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">
              {projectsCount.toLocaleString()}+
            </h3>
            <p className="mt-2">Projects Launched</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">500+</h3>
            <p className="mt-2">Teams Formed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black">40+</h3>
            <p className="mt-2">Countries Reached</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Featured Professionals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["John", "Ayesha", "Takeshi"].map((name, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md"
            >
              <div className="w-20 h-20 mx-auto bg-black text-white flex items-center justify-center rounded-full text-xl font-bold mb-4">
                {name[0]}
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
              <p className="text-gray-600 mt-2">
                “Looking to join a startup team building cool stuff in Web3.”
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-white text-center rounded-3xl px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to build your dream team?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Join a fast-growing community of developers, designers, and creators
          today. Your next teammate is waiting.
        </p>
        <Link to="/SignUp">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
            Get Started Free
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HeroPage;
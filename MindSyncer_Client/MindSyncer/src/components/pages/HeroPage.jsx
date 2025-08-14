/*import React, { useEffect, useRef, useState } from "react";
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

*/
import React, { useEffect, useRef, useState } from "react";

const HeroPage = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  // 👇 Fake real-time stats
  const [developersCount, setDevelopersCount] = useState(2000);
  const [projectsCount, setProjectsCount] = useState(1000);
  
  // 🇮🇳 Independence Day feature
  const [showIndependenceDay, setShowIndependenceDay] = useState(true); // Set to true for demo

  useEffect(() => {
    // Mock Typed.js functionality since we don't have access to the library
    if (typedRef.current) {
      const strings = ["coder", "designer", "innovator", "investor"];
      let currentIndex = 0;
      let currentText = "";
      let isDeleting = false;

      const type = () => {
        const current = strings[currentIndex % strings.length];
        
        if (isDeleting) {
          currentText = current.substring(0, currentText.length - 1);
        } else {
          currentText = current.substring(0, currentText.length + 1);
        }

        typedRef.current.textContent = currentText;

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentText === current) {
          typeSpeed = 1000; // Pause at end
          isDeleting = true;
        } else if (isDeleting && currentText === '') {
          isDeleting = false;
          currentIndex++;
          typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
      };

      type();
    }
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
      {/* 🇮🇳 Independence Day Header Bar */}
      {showIndependenceDay && (
        <div className="relative w-full bg-gradient-to-r from-orange-500 via-white to-green-600 py-4 px-6 overflow-hidden">
          {/* Floating mini flowers */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-lg opacity-30"
                style={{
                  left: `${5 + i * 8}%`,
                  animation: `float ${2 + Math.random()}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                🌸
              </div>
            ))}
          </div>
          
          <div className="relative z-10 flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-7 rounded shadow-sm overflow-hidden border border-gray-300">
                <div className="h-1/3 bg-orange-500"></div>
                <div className="h-1/3 bg-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-spin"></div>
                </div>
                <div className="h-1/3 bg-green-600"></div>
              </div>
              <span className="text-xl font-bold text-gray-800">
                🇮🇳 स्वतंत्रता दिवस मुबारक! Happy Independence Day!
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-700 font-medium">
              <span>Building Digital India</span>
              <span className="animate-bounce">🎆</span>
            </div>
          </div>
        </div>
      )}

      <section className={`w-full ${showIndependenceDay ? 'bg-gradient-to-br from-orange-50 via-white to-green-50' : 'bg-white'} py-20 px-6 md:px-20 text-center relative overflow-hidden`}>
        
        {/* Independence Day Background Elements */}
        {showIndependenceDay && (
          <>
            {/* Subtle tricolor background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-orange-200"></div>
              <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gray-100"></div>
              <div className="absolute top-2/3 left-0 w-full h-1/3 bg-green-200"></div>
            </div>
            
            {/* Floating flowers around the content */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => {
                const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🏵️'];
                return (
                  <div
                    key={i}
                    className="absolute text-2xl opacity-15"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `gentleFloat ${4 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  >
                    {flowers[Math.floor(Math.random() * flowers.length)]}
                  </div>
                );
              })}
            </div>

            {/* Tricolor particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full opacity-20 ${
                    i % 3 === 0 ? 'bg-orange-400' : i % 3 === 1 ? 'bg-gray-400' : 'bg-green-400'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `sparkle ${2 + Math.random() * 2}s linear infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </>
        )}

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Special Independence Day greeting */}
          {showIndependenceDay && (
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 via-white to-green-100 px-4 py-2 rounded-full border border-orange-200 shadow-sm">
                <div className="w-4 h-3 rounded overflow-hidden">
                  <div className="h-1/3 bg-orange-500"></div>
                  <div className="h-1/3 bg-white"></div>
                  <div className="h-1/3 bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-700 font-medium">Celebrating 78 Years of Freedom</span>
                <span className="animate-pulse">✨</span>
              </div>
            </div>
          )}

          <h1 className={`text-4xl md:text-4xl font-semibold ${showIndependenceDay ? 'bg-gradient-to-r from-orange-600 via-gray-900 to-green-600 bg-clip-text text-transparent' : 'text-gray-900'} mb-6 leading-tight`}>
            Find your perfect{" "}
            <span
              ref={typedRef}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600"
            ></span>{" "}
            in seconds
          </h1>

          <p className={`text-lg md:text-xl ${showIndependenceDay ? 'text-gray-700' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
            {showIndependenceDay ? 
              "Collaborate with India's talented developers, designers, and professionals to bring your next big idea to life. MindSyncer helps you build meaningful connections and successful projects across Bharat. 🇮🇳" :
              "Collaborate with developers, designers, and professionals to bring your next big idea to life. MindSyncer helps you build meaningful connections and successful projects."
            }
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <button className={`${showIndependenceDay ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' : 'bg-black hover:bg-gray-800'} text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105`}>
              {showIndependenceDay ? '🇮🇳 Join Now' : 'Join Now'}
            </button>
            <button className={`bg-white ${showIndependenceDay ? 'text-green-700 border-green-600 hover:bg-green-50' : 'text-black border-black hover:bg-gray-100'} border px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105`}>
              View Profiles
            </button>
          </div>

          {/* Enhanced marquee with Independence Day colors */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-3 text-sm text-gray-700">
              {[
                "React", "Python", "Node.js", "AI/ML", "Web3", "UI/UX",
                "TypeScript", "Figma", "MongoDB", "Docker", "TailwindCSS", "Kubernetes",
                "React", "Python", "Node.js", "AI/ML", "Web3", "UI/UX",
                "TypeScript", "Figma", "MongoDB", "Docker", "TailwindCSS", "Kubernetes"
              ].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className={`${
                    showIndependenceDay ? 
                      i % 3 === 0 ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                      i % 3 === 1 ? 'bg-gray-100 text-gray-700 border border-gray-200' :
                      'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-gray-100'
                  } px-4 py-1 rounded-full shadow-sm mx-2 whitespace-nowrap hover:shadow-md transition-shadow`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${showIndependenceDay ? 'bg-gradient-to-r from-orange-50 via-gray-50 to-green-50' : 'bg-gray-50'} px-6 md:px-20 text-center relative`}>
        {showIndependenceDay && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-10">
            🏛️
          </div>
        )}
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How MindSyncer Works
        </h2>
        
        {showIndependenceDay && (
          <p className="text-orange-600 font-medium mb-8">Building connections across Bharat 🇮🇳</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Create Your Profile",
              desc: showIndependenceDay ? 
                "Showcase your skills and vision. Join thousands of Indian innovators making their mark in tech." :
                "Highlight your skills, experiences, and goals. Let others know what you're building or seeking.",
              icon: "👨‍💻"
            },
            {
              title: "Find Your Match", 
              desc: showIndependenceDay ?
                "Connect with talented creators from every corner of India. Unity in diversity, innovation in collaboration." :
                "Use smart filters to discover ideal teammates, collaborators, or co-founders.",
              icon: "🤝"
            },
            {
              title: "Collaborate & Build",
              desc: showIndependenceDay ?
                "Build the next unicorn, solve real problems, and create impact that matters for India and the world." :
                "Connect, chat, share tasks, and build products together — all in one place.",
              icon: "🚀"
            }
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                showIndependenceDay ? 'border-l-4 ' + (i % 3 === 0 ? 'border-orange-500' : i % 3 === 1 ? 'border-gray-400' : 'border-green-500') : ''
              }`}
            >
              {showIndependenceDay && (
                <div className="text-3xl mb-4">{card.icon}</div>
              )}
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`py-20 ${showIndependenceDay ? 'bg-gradient-to-br from-white via-orange-50 to-green-50' : 'bg-gray-100'} px-6 md:px-20 text-center relative`}>
        {showIndependenceDay && (
          <>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-orange-300 rounded-full opacity-10"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${20 + Math.sin(i) * 30}%`,
                    animation: `pulse ${2 + i * 0.3}s infinite`
                  }}
                />
              ))}
            </div>
          </>
        )}
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Growing Community
        </h2>
        
        {showIndependenceDay && (
          <p className="text-lg text-gray-600 mb-12">
            <span className="text-orange-600 font-semibold">United</span> by passion, 
            <span className="text-gray-800 font-semibold"> driven</span> by innovation, 
            <span className="text-green-600 font-semibold"> powered</span> by collaboration 🇮🇳
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-gray-700">
          <div className={showIndependenceDay ? 'bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6' : ''}>
            <h3 className={`text-4xl font-bold ${showIndependenceDay ? 'text-orange-600' : 'text-black'}`}>
              {developersCount.toLocaleString()}+
            </h3>
            <p className="mt-2 font-medium">Developers Joined</p>
            {showIndependenceDay && <div className="mt-2 text-sm text-orange-500">🇮🇳 Proudly Indian</div>}
          </div>
          <div className={showIndependenceDay ? 'bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6' : ''}>
            <h3 className={`text-4xl font-bold ${showIndependenceDay ? 'text-gray-700' : 'text-black'}`}>
              {projectsCount.toLocaleString()}+
            </h3>
            <p className="mt-2 font-medium">Projects Launched</p>
          </div>
          <div className={showIndependenceDay ? 'bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6' : ''}>
            <h3 className={`text-4xl font-bold ${showIndependenceDay ? 'text-green-600' : 'text-black'}`}>500+</h3>
            <p className="mt-2 font-medium">Teams Formed</p>
          </div>
          <div className={showIndependenceDay ? 'bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6' : ''}>
            <h3 className={`text-4xl font-bold ${showIndependenceDay ? 'text-blue-600' : 'text-black'}`}>40+</h3>
            <p className="mt-2 font-medium">Countries Reached</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Professionals
        </h2>
        
        {showIndependenceDay && (
          <p className="text-gray-600 mb-12">Meet the innovators shaping India's digital future</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {(showIndependenceDay ? 
            [
              { name: "Arjun", role: "Full Stack Developer", location: "Bangalore", quote: "Building the next generation of Indian startups with cutting-edge technology." },
              { name: "Priya", role: "UI/UX Designer", location: "Mumbai", quote: "Designing beautiful experiences that connect millions across India." },
              { name: "Rahul", role: "AI Engineer", location: "Hyderabad", quote: "Leveraging AI to solve India's most challenging problems." }
            ] :
            [
              { name: "John", role: "Full Stack Developer", location: "", quote: "Looking to join a startup team building cool stuff in Web3." },
              { name: "Ayesha", role: "Full Stack Developer", location: "", quote: "Looking to join a startup team building cool stuff in Web3." },
              { name: "Takeshi", role: "Full Stack Developer", location: "", quote: "Looking to join a startup team building cool stuff in Web3." }
            ]
          ).map((person, i) => (
            <div
              key={i}
              className={`bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                showIndependenceDay ? 'border-t-4 ' + (i % 3 === 0 ? 'border-orange-500' : i % 3 === 1 ? 'border-gray-400' : 'border-green-500') : ''
              }`}
            >
              <div className={`w-20 h-20 mx-auto ${
                showIndependenceDay ? 
                  i % 3 === 0 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                  i % 3 === 1 ? 'bg-gradient-to-br from-gray-500 to-gray-600' :
                  'bg-gradient-to-br from-green-500 to-green-600'
                : 'bg-black'
              } text-white flex items-center justify-center rounded-full text-xl font-bold mb-4 shadow-lg`}>
                {person.name[0]}
              </div>
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-500 text-sm">{person.role}</p>
              {showIndependenceDay && person.location && (
                <p className="text-xs text-orange-600 font-medium mt-1">📍 {person.location}</p>
              )}
              <p className="text-gray-600 mt-2 text-sm">
                "{person.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={`py-20 ${
        showIndependenceDay ? 
          'bg-gradient-to-r from-orange-600 via-gray-800 to-green-600' : 
          'bg-black'
        } text-white text-center rounded-3xl px-6 md:px-20 relative overflow-hidden`}>
        
        {showIndependenceDay && (
          <>
            <div className="absolute inset-0 bg-black/20"></div>
            {/* Subtle floating elements */}
            <div className="absolute top-4 right-4 text-2xl opacity-30 animate-bounce">🎆</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-30 animate-pulse">✨</div>
          </>
        )}
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {showIndependenceDay ? 
              "Ready to build India's digital future?" :
              "Ready to build your dream team?"
            }
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            {showIndependenceDay ?
              "Join a vibrant community of Indian developers, designers, and entrepreneurs. Together, we're building solutions that matter for India and the world. 🇮🇳" :
              "Join a fast-growing community of developers, designers, and creators today. Your next teammate is waiting."
            }
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            {showIndependenceDay ? "Join the Revolution 🚀" : "Get Started Free"}
          </button>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.3; transform: scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default HeroPage;
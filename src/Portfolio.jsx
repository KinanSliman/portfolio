import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Zap,
  Rocket,
  Sparkles,
  Brain,
  Coffee,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("intro");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "kinan@portfolio:~$ npm run build-future";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Blockchain Payment System",
      subtitle: "https://www.youtube.com/watch?v=8FD0U1Xxr-c",
      emoji: "⛓️",
      description:
        "Master thesis, a Custom blockchain with cryptocurrency, wallet, and miner logic. Implemented SHA-256, ECC, and ECDSA for bulletproof security. Achieved ~30-second decentralized transactions.",
      tech: ["Node.js", "PHP", "Web Sockets", "MySQL"],
      gradient: "gradient-yellow-orange",
      stat: "30s",
      statLabel: "Transaction Time",
    },
    {
      title: "Live Wildfire Tracker",
      subtitle: "https://live-fire-tracker.onrender.com/",
      emoji: "🔥",
      description:
        "Global wildfire tracking platform using NASA's FIRMS API. Interactive 2D/3D map layers with MapLibreGL JS. Redux Toolkit powering real-time updates.",
      tech: ["React", "Redux Toolkit", "NASA API", "MapLibreGL"],
      gradient: "gradient-red-pink",
      stat: "Global",
      statLabel: "Coverage",
    },
    {
      title: "Vintage Clothing eCommerce",
      subtitle: "https://vintageclothing.onrender.com/",
      emoji: "👔",
      description:
        "Feature-rich SPA with smart filtering and persistent cart. Massive performance optimization. Secure REST APIs with full CRUD.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      gradient: "gradient-green-teal",
      stat: "Fast",
      statLabel: "Load Time",
    },
    {
      title: "Real Estate Portal",
      subtitle: "https://realestate-3kxu.onrender.com/",
      emoji: "🏠",
      description:
        "Dynamic property management platform with advanced search and filters. Responsive UI with structured backend logic.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "gradient-blue-purple",
      stat: "CRUD",
      statLabel: "Operations",
    },
  ];

  const skills = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Node.js", level: 92, icon: "🟢" },
    { name: "MongoDB", level: 88, icon: "🍃" },
    { name: "Redux", level: 90, icon: "🔄" },
    { name: "Express", level: 89, icon: "🚂" },
    { name: "JavaScript", level: 96, icon: "💛" },
    { name: "Web Sockets", level: 85, icon: "🔌" },
    { name: "REST APIs", level: 93, icon: "🌐" },
  ];

  return (
    <div className="portfolio-container">
      {/* Animated Background Grid */}
      <div className="animated-bg">
        <div
          className="gradient-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), transparent 50%)`,
          }}
        />
        <div className="grid-overlay" />
      </div>

      {/* Floating Orbs */}
      <div className="floating-orb orb-purple" />
      <div className="floating-orb orb-pink" />
      <div className="floating-orb orb-cyan" />

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            {/* Terminal Window */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot dot-red" />
                  <div className="terminal-dot dot-yellow" />
                  <div className="terminal-dot dot-green" />
                </div>
                <span className="terminal-title">kinan-sliman</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-text">
                  {terminalText}
                  <span
                    className="terminal-cursor"
                    style={{ opacity: showCursor ? 1 : 0 }}
                  >
                    ▊
                  </span>
                </div>
                <div className="terminal-subtext">
                  Building innovative solutions...
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="name-title">
              <h1 className="name-gradient">KINAN SLIMAN</h1>
              <h2 className="subtitle">
                Full Stack <span className="highlight-purple">Architect</span>
              </h2>
              <p className="description">
                Building the future with{" "}
                <span className="highlight-purple">MERN</span> stack,
                <span className="highlight-pink"> real-time systems</span> and
                <span className="highlight-cyan"> more</span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
              <div className="stat-card stat-card-pink">
                <div className="stat-number stat-number-pink">Master's</div>
                <div className="stat-label">Web Technologies</div>
              </div>
              <div className="stat-card stat-card-purple">
                <div className="stat-number stat-number-purple">ICT</div>
                <div className="stat-label">Engineer</div>
              </div>
              <div className="stat-card stat-card-cyan">
                <div className="stat-number stat-number-cyan">MERN</div>
                <div className="stat-label">Full Stack Developer</div>
              </div>
              <div className="stat-card stat-card-green">
                <div className="stat-number stat-number-green">Freelance</div>
                <div className="stat-label">Web Developer</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">
              <span className="title-gradient title-gradient-purple-pink">
                WHO AM I?
              </span>
            </h2>

            <div className="card-grid">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Brain style={{ color: "#c084fc" }} size={32} />
                  <h3 className="text-2xl font-bold">The Mind</h3>
                </div>
                <p className="card-description">
                  Detail-oriented Full Stack Developer with a Master's in Web
                  Technologies, specializing in the MERN stack. I architect
                  scalable applications, real-time data systems, and
                  user-focused interfaces.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="additional-tech-tag">Problem Solver</span>
                  <span className="additional-tech-tag">Optimizer</span>
                  <span className="additional-tech-tag">Innovator</span>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket style={{ color: "#ec4899" }} size={32} />
                  <h3 className="text-2xl font-bold">The Journey</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Zap
                      style={{
                        color: "#eab308",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                      size={20}
                    />
                    <p className="card-description">
                      Built full-stack applications with real-time data
                      visualizations and eCommerce platforms
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap
                      style={{
                        color: "#eab308",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                      size={20}
                    />
                    <p className="card-description">
                      Delivered end-to-end solutions: frontend, backend, and API
                      integration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap
                      style={{
                        color: "#eab308",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                      }}
                      size={20}
                    />
                    <p className="card-description">
                      Freelancing since 2020, crafting scalable software
                      solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">
              <span className="title-gradient title-gradient-cyan-purple">
                FEATURED WORK
              </span>
            </h2>

            <div className="card-grid">
              {projects.map((project, idx) => (
                <div key={idx} className="card">
                  <div className="card-emoji">{project.emoji}</div>

                  <div className="mb-4">
                    <h3 className="card-title">{project.title}</h3>
                    <a
                      className="card-subtitle"
                      href={project.subtitle}
                      target="_blank"
                    >
                      {project.subtitle}
                    </a>
                  </div>

                  <p className="card-description">{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`stat-box ${project.gradient}`}>
                    <div className="stat-number-large">{project.stat}</div>
                    <div className="stat-label-small">{project.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">
              <span className="title-gradient title-gradient-green-cyan">
                TECH ARSENAL
              </span>
            </h2>

            <div className="skills-grid-compact">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-card-compact">
                  <div className="skill-icon-compact">{skill.icon}</div>
                  <span className="skill-name-compact">{skill.name}</span>
                </div>
              ))}

              {/* More Tech Skills */}
              {[
                { name: "HTML5", icon: "🌐" },
                { name: "CSS3", icon: "🎨" },
                { name: "SASS/SCSS", icon: "💅" },
                { name: "JWT", icon: "🔐" },
                { name: "Git", icon: "📚" },
                { name: "GitHub", icon: "🐙" },
                { name: "Webpack", icon: "📦" },
                { name: "MySQL", icon: "🗄️" },
                { name: "PHP", icon: "🐘" },
                { name: "Responsive Design", icon: "📱" },
              ].map((tech, i) => (
                <div key={`more-tech-${i}`} className="skill-card-compact">
                  <div className="skill-icon-compact">{tech.icon}</div>
                  <span className="skill-name-compact">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">
              <span className="title-gradient title-gradient-yellow-orange">
                EDUCATION
              </span>
            </h2>

            <div className="education-grid">
              <div className="education-card education-card-purple">
                <div className="education-header">
                  <Sparkles style={{ color: "#c084fc" }} size={24} />
                  <h3 className="education-title">
                    Master's in Web Technologies
                  </h3>
                </div>
                <p className="education-institution">
                  Syrian Virtual University
                </p>
                <p className="education-period education-period-purple">
                  2020–2024
                </p>
              </div>

              <div className="education-card education-card-cyan">
                <div className="education-header">
                  <Coffee style={{ color: "#22d3ee" }} size={24} />
                  <h3 className="education-title">Bachelor's in ICT</h3>
                </div>
                <p className="education-institution">Tartous University</p>
                <p className="education-period education-period-cyan">
                  2013–2020
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="contact-container">
            <h2 className="contact-title">
              <span className="title-gradient title-gradient-pink-purple">
                LET'S BUILD SOMETHING
              </span>
            </h2>
            <p className="contact-subtitle">
              Got an idea? Let's turn it into reality 🚀
            </p>

            <div className="social-links">
              <a
                href="https://github.com/KinanSliman"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={32} className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/kinan-sliman"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={32} className="social-icon" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            © 2025 Kinan Sliman — Coded with{" "}
            <span style={{ color: "#ec4899" }}>♥</span> and{" "}
            <span style={{ color: "#eab308" }}>☕</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

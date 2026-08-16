import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Zap,
  Rocket,
  Sparkles,
  Brain,
  Coffee,
  Briefcase,
  Globe,
} from "lucide-react";

export default function Portfolio() {
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
      title: "Virtual Store",
      subtitle: "https://virtual-store-vert.vercel.app",
      emoji: "🕹️",
      description:
        "A first-person 3D browser storefront built with React Three Fiber and procedural geometry — drag-to-look camera, collision detection, and mobile touch controls. Every catalogue row supplies its own artwork, price, and spatial position, so the shop is database-driven with no hardcoded 3D geometry. Solved WebGL's Latin-only font limitation with canvas-rasterised textures to render correctly shaped, right-to-left Arabic text in 3D space, and a transactional checkout that snapshots unit prices to preserve historical order integrity.",
      tech: [
        "Next.js 16",
        "TypeScript",
        "React Three Fiber",
        "PostgreSQL (Neon)",
        "Drizzle ORM",
        "Tailwind CSS",
        "Recharts",
        "Vitest",
      ],
      gradient: "gradient-blue-purple",
      stat: "Arabic in 3D",
      statLabel: "RTL Text Rendering in WebGL",
    },
    {
      title: "Markdly",
      subtitle: "https://markdly.vercel.app",
      emoji: "📝",
      description:
        "A SaaS I built, launched, and operate: it syncs Google Docs to GitHub as Markdown via automated pull requests, with dual OAuth (Google + GitHub), token refresh, and a six-stage conversion pipeline running in production today. One converter covers both the Google Docs API and .docx uploads, and SHA-256 change detection cut unnecessary API calls by roughly 70%. Hardened for real traffic with token-bucket rate limiting, exponential-backoff retries, and Redis caching — plus CI/CD, an admin dashboard with real-time monitoring and threshold alerting, and a test suite that gates every release.",
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Drizzle ORM",
        "GitHub API",
        "Google Docs API",
        "Cloudinary",
      ],
      gradient: "gradient-green-teal",
      stat: "10–100×",
      statLabel: "Faster Cached Conversions",
    },
    {
      title: "Live Wildfire Tracker",
      subtitle: "https://livewildfiretracker.onrender.com",
      emoji: "🔥",
      description:
        "Sustains a live browser feed of 20,000+ active fire detections over WebSockets — push-based delivery with no client polling, refreshed on a 3-hour ingestion cycle across 52 global regions. Interactive MapLibre GL map with a 3D globe projection and four 2D tile styles, severity filtering, and click-through detail backed by cached OSM reverse geocoding.",
      tech: [
        "React 19",
        "TypeScript",
        "Redux Toolkit",
        "MapLibre GL",
        "Node.js",
        "ws",
        "MongoDB Atlas",
        "NASA FIRMS API",
      ],
      gradient: "gradient-red-pink",
      stat: "20K+",
      statLabel: "Live Fire Detections",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "JavaScript", icon: "💛" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "SASS/SCSS", icon: "💅" },
        { name: "HTML5", icon: "🌐" },
        { name: "PWA", icon: "📱" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "🟢" },
        { name: "NestJS", icon: "🐱" },
        { name: "REST APIs", icon: "🔗" },
        { name: "WebSockets", icon: "🔌" },
        { name: "JWT Auth", icon: "🔐" },
        { name: "OAuth 2.0", icon: "🛡️" },
        { name: "Rate Limiting", icon: "🚦" },
        { name: "Caching", icon: "⚡" },
      ],
    },
    {
      title: "Data & Infrastructure",
      items: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Drizzle ORM", icon: "💧" },
        { name: "Redis", icon: "🧱" },
        { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "📚" },
        { name: "CI/CD", icon: "🔁" },
        { name: "Vercel", icon: "🚀" },
        { name: "Render", icon: "🌍" },
        { name: "Jest", icon: "🃏" },
        { name: "Vitest", icon: "✅" },
      ],
    },
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
                  Shipping and operating production web apps...
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="name-title">
              <h1 className="name-gradient">KINAN SLIMAN</h1>
              <h2 className="subtitle">
                Full Stack <span className="highlight-purple">Developer</span>
              </h2>
              <p className="description">
                Shipping <span className="highlight-purple">end to end</span>{" "}
                with Next.js and NestJS —
                <span className="highlight-pink"> real-time systems</span> and
                <span className="highlight-cyan"> Arabic-first, RTL-correct</span>{" "}
                interfaces
              </p>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
              <div className="stat-card stat-card-pink">
                <div className="stat-number stat-number-pink">M.Sc.</div>
                <div className="stat-label">Web Technologies</div>
              </div>
              <div className="stat-card stat-card-purple">
                <div className="stat-number stat-number-purple">B.Sc.</div>
                <div className="stat-label">ICT Engineer</div>
              </div>
              <div className="stat-card stat-card-cyan">
                <div className="stat-number stat-number-cyan">RTL</div>
                <div className="stat-label">Arabic-First Interfaces</div>
              </div>
              <div className="stat-card stat-card-green">
                <div className="stat-number stat-number-green">Solo</div>
                <div className="stat-label">Build, Deploy &amp; Operate</div>
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
                  Full stack developer who ships and operates production web
                  applications end to end — architecture, database design,
                  security, deployment, and monitoring. Native Arabic speaker
                  specializing in Arabic-first, RTL-correct interfaces, down to
                  the layout details most libraries get wrong. Experienced with
                  AI-augmented development workflows gated by review and
                  automated tests.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="additional-tech-tag">Architect</span>
                  <span className="additional-tech-tag">Operator</span>
                  <span className="additional-tech-tag">RTL Specialist</span>
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
                      Built and launched a production SaaS — OAuth, conversion
                      pipeline, monitoring, and alerting included
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
                      Rendered right-to-left Arabic text inside WebGL, where the
                      standard libraries fail outright
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
                      Streamed 20,000+ live wildfire detections to the browser
                      over WebSockets, with zero client polling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">
              <span className="title-gradient title-gradient-pink-purple">
                EXPERIENCE
              </span>
            </h2>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase style={{ color: "#ec4899" }} size={32} />
                <div>
                  <h3 className="card-title">
                    Independent Full Stack Developer
                  </h3>
                  <p className="card-subtitle">
                    Self-directed product work · Remote · July 2025 – Present
                  </p>
                </div>
              </div>
              <p className="card-description">
                Design, build, deploy, and operate web products solo — market
                research, architecture, UI/UX, schema design, backend,
                deployment, and iteration — across SaaS, PWA, and real-time data
                platforms.
              </p>
              <p className="card-description">
                Deliver bilingual English/Arabic interfaces with full RTL
                mirroring, including cases where standard libraries fail
                outright: text shaping, bidirectional layout, and font fallback
                in WebGL.
              </p>
              <div className="tech-tags">
                <span className="tech-tag">SaaS</span>
                <span className="tech-tag">PWA</span>
                <span className="tech-tag">Real-Time Data</span>
                <span className="tech-tag">Bilingual EN/AR</span>
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
                      rel="noopener noreferrer"
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

            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="additional-skills-title">{group.title}</h3>
                <div className="skills-grid-compact">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="skill-card-compact">
                      <div className="skill-icon-compact">{skill.icon}</div>
                      <span className="skill-name-compact">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                    M.Sc. in Web Technologies
                  </h3>
                </div>
                <p className="education-institution">
                  Syrian Virtual University
                </p>
                <p className="education-period education-period-purple">
                  2021–2025
                </p>
              </div>

              <div className="education-card education-card-cyan">
                <div className="education-header">
                  <Coffee style={{ color: "#22d3ee" }} size={24} />
                  <h3 className="education-title">
                    B.Sc. in Information &amp; Communication Technology
                  </h3>
                </div>
                <p className="education-institution">Tartous University</p>
                <p className="education-period education-period-cyan">
                  2014–2021
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="languages-card">
              <h3 className="languages-title">
                <span className="flex items-center gap-2 justify-center">
                  <Globe style={{ color: "#22d3ee" }} size={22} />
                  Languages
                </span>
              </h3>
              <div className="languages-grid">
                <div className="language-item">
                  <div className="language-flag">🗣️</div>
                  <div className="language-name">Arabic</div>
                  <div className="language-level">Native</div>
                </div>
                <div className="language-item">
                  <div className="language-flag">🌐</div>
                  <div className="language-name">English</div>
                  <div className="language-level">Fluent</div>
                </div>
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
            © 2026 Kinan Sliman — Coded with{" "}
            <span style={{ color: "#ec4899" }}>♥</span> and{" "}
            <span style={{ color: "#eab308" }}>☕</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

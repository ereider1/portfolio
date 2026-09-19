import { useState, useEffect } from 'react';

// Import profile picture
import myPic2 from './assets/my-pic-02.png';

// Import project screenshots
import luleestudioImg from './assets/lulee-studio-001.png';
import laconchitaImg from './assets/laconchitabeach.jpg';
import balisafariImg from './assets/balisafaritour.jpg';
import robreiderImg from './assets/robreidervoice.jpg';

// Import business logos
import ereiderLogo from './assets/elizabeth-reider-logo.svg';
import crowdstrikeLogo from './assets/crowdstrike-logo.webp';
import yardiLogo from './assets/yardi-logo.webp';
import bonqoLogo from './assets/bonqo_logo.png';
import venablesLogo from './assets/venables-bell-logo.png';
import labjLogo from './assets/losangelesbusinessjournal-logo.jpg';
import sbindyLogo from './assets/independent.webp';

// Import tool logos
import coderabbitLogo from './assets/coderabbit-logo.svg';
import nodejsLogo from './assets/nodejs-logo.jpg';
import typescriptLogo from './assets/typescript-log0o.webp';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailClick = () => {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText('reiderea@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const toolsListDetail = [
    {
      name: 'VS Code',
      desc: 'My primary development environment, highly optimized with custom configurations, vim keys, and AI-augmented tools for rapid engineering.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M23.15 2.58L17.62.21c-.54-.23-1.15-.13-1.6.25l-10.3 8.4-4.1-3.1c-.46-.35-1.1-.35-1.56 0L.11 7.1c-.14.11-.14.31 0 .42L3.9 10.5.11 13.48c-.14.11-.14.31 0 .42l1.1 1.35c.46.35 1.1.35 1.56 0l4.1-3.1 10.3 8.4c.45.38 1.06.48 1.6.25l5.53-2.37c.54-.23.85-.75.85-1.33V3.91c0-.58-.31-1.1-.85-1.33zM16.5 18.5l-8.5-7 8.5-7v14z" />
        </svg>
      )
    },
    {
      name: 'React',
      desc: 'Building highly interactive, stateful web applications with component-driven architecture, advanced hooks, and fluid visual flows.',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      desc: 'Enforcing strict static typing, interfaces, and clean code contracts across modern client-side and backend database environments.',
      icon: (
        <img src={typescriptLogo} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      )
    },
    {
      name: 'Tailwind CSS',
      desc: 'Crafting premium, responsive layouts using utility-first classes, custom layout systems, variables, and responsive grids.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.2 1.8-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 1.8-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )
    },
    {
      name: 'Figma',
      desc: 'Designing high-fidelity UX prototypes, vector graphics, precise grid assets, and cohesive design system foundations.',
      icon: (
        <svg viewBox="0 0 38 57" width="16" height="24" fill="currentColor" aria-hidden="true">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
          <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
          <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
          <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      desc: 'Architecting fast execution scripts, command-line interfaces, server systems, and integration connectors.',
      icon: (
        <img src={nodejsLogo} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      )
    },
    {
      name: 'Git',
      desc: 'Structuring granular source control revisions, branching models, safe commits, and continuous release orchestration.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.627l2.76 2.76c.641-.215 1.374-.073 1.888.44.515.515.658 1.258.438 1.9l2.658 2.66c.64-.22 1.38-.078 1.9.442.715.715.715 1.876 0 2.59-.714.716-1.877.716-2.592 0-.52-.52-.663-1.274-.44-1.915l-2.63-2.63v6.524c.21.098.41.24.577.426.715.714.715 1.876 0 2.59-.715.716-1.877.716-2.592 0-0.715-.713-.715-1.876 0-2.59.17-.17.37-.31.58-.406V9.17c-.2-.096-.4-.24-.57-.424-.52-.52-.664-1.274-.44-1.915l-2.78-2.79L.452 10.93c-.603.605-.603 1.583 0 2.187l10.477 10.478c.604.604 1.582.604 2.187 0l10.43-10.43c.603-.603.603-1.582 0-2.187z" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      desc: 'Deploying robust serverless edge web infrastructures, configuring environment states, and monitoring build health.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
      )
    },
    {
      name: 'Code Rabbit',
      desc: 'Optimizing codebase maintenance using continuous, automated AI code reviews to enforce strict technical standards.',
      icon: (
        <img src={coderabbitLogo} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      )
    }
  ];

  const processList = [
    {
      step: 'IMAGINE/',
      desc: 'Interview with an agent about the project — defining goals, determining the best technical approach, and mapping possible hurdles before development begins.'
    },
    {
      step: 'PLAN/',
      desc: 'Choose the right model and align specialized AI agent skills to tackle complex sub-tasks efficiently and keep the implementation focused.'
    },
    {
      step: 'DIRECT/',
      desc: 'Direct multiple agents through a structured workflow. AI handles well-defined engineering tasks while I maintain direction, context, and product judgment.'
    },
    {
      step: 'VERIFY/',
      desc: 'Use VS Code, Code Rabbit, testing, and human review to inspect and validate the work as it is built—keeping quality and correctness in the loop.'
    }
  ];

  const workList = [
    {
      id: 1,
      title: 'balisafaritour.com',
      url: 'https://balisafaritour.com',
      meta: '2026 / CONVERSION ENGINE',
      desc: 'Premium marketing and booking site for a Bali-based tour operator, featuring a mobile-first experience and streamlined WhatsApp inquiry funnels designed to improve visitor-to-booking conversion.',
      stack: ['Next.js', 'Tailwind CSS', 'Clerk', 'Supabase'],
      image: balisafariImg
    },
    {
      id: 2,
      title: 'laconchitabeach.com',
      url: 'https://laconchitabeach.com',
      meta: '2026 / WEB PORTAL',
      desc: 'Resident portal for a coastal community featuring secure authentication, a resident directory, shared documentation, and live automated tide and surf conditions.',
      stack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Clerk'],
      image: laconchitaImg
    },
    {
      id: 3,
      title: 'Personal YouTube Production Studio',
      url: 'https://lulee-production.vercel.app/',
      meta: '2026 / APP',
      desc: 'I wanted a place to keep all my video prompts and assets organized for a YouTube channel I am creating- Lulee-Go! I started with a custom CMS, then I added features so I can edit, queue, and export prompts tailored for the AI video generator of my choice.',
      stack: ['Next.js', 'Tailwind CSS', 'Zustand'],
      image: luleestudioImg
    },
    {
      id: 4,
      title: 'robreidervoice.com',
      url: 'https://robreidervoice.com',
      meta: '2026 / DEMO REEL',
      desc: 'Portfolio and demo reel site for an Emmy-winning voice actor, combining custom audio-forward design with media streaming controls built to convert visitors and book auditions.',
      stack: ['React', 'Vite', 'HTML5 Audio'],
      image: robreiderImg
    }
  ];

  const experienceList = [
    {
      years: '2021 — now',
      company: 'ereider',
      title: 'Freelance Web Development',
      logo: ereiderLogo
    },
    {
      years: '2014 — 2020',
      company: 'CrowdStrike',
      title: 'Senior Web Developer',
      logo: crowdstrikeLogo
    },
    {
      years: '2011 — 2014',
      company: 'Yardi Systems',
      title: 'Front-End / UI Design',
      logo: yardiLogo
    },
    {
      years: '2010 — 2011',
      company: 'Bonqo.com',
      title: 'Front-End / Ad Design',
      logo: bonqoLogo
    },
    {
      years: '2009 — 2010',
      company: 'Venables Bell & Partners',
      title: 'Interactive Designer',
      logo: venablesLogo
    },
    {
      years: '2007 — 2009',
      company: 'Los Angeles Business Journal',
      title: 'Production Associate',
      logo: labjLogo
    },
    {
      years: '2005 — 2007',
      company: 'Santa Barbara Independent',
      title: 'Ad Production Designer',
      logo: sbindyLogo
    }
  ];

  return (
    <>
      {/* Primary navigation */}
      <nav
        className={`navbar ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <a href="#intro" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
          er.
        </a>

        <ul className="nav-links">
          <li><a href="#work">Selected Work</a></li>
          <li><a href="#process">How I Build</a></li>
          <li><a href="#tools">Technologies</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-navigation"
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="mobile-nav-links">
          <li><a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Selected Work</a></li>
          <li><a href="#process" onClick={() => setIsMobileMenuOpen(false)}>How I Build</a></li>
          <li><a href="#tools" onClick={() => setIsMobileMenuOpen(false)}>Technologies</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Hero / Intro */}
      <section id="intro" className="theme-dark" aria-labelledby="intro-heading">
        <div className="hero-container">
          <header className="hero-top-row">
            <h1 id="intro-heading" className="hero-giant-name">
              Elizabeth Reider
            </h1>

            <div className="hero-meta-col">
              SENIOR FRONT-END WEB DEVELOPER & AI ENGINEER
            </div>

            <div className="hero-meta-col" style={{ textAlign: 'right' }}>
              <a href="mailto:reiderea@gmail.com" onClick={handleEmailClick}>
                reiderea@gmail.com ↗
              </a>
            </div>
          </header>

          <div className="hero-main-content">
            <div className="hero-left-art">
              <img
                src={myPic2}
                alt="Elizabeth Reider, senior front-end web developer and AI engineer"
                className="hero-profile-pic"
              />
            </div>

            <div className="hero-right-text">
              <p className="hero-eyebrow">SENIOR FRONT-END WEB DEVELOPER & AI ENGINEER</p>

              <h2 className="hero-tagline">
                I build fast, intelligent, beautifully designed web experiences—combining modern front-end development with AI to turn ambitious ideas into working products.
              </h2>

              <div className="hero-bio">
                <p>
                  I started with a Bachelor of Fine Arts from Miami University and built my career across design, interactive media, front-end development, and technology. My experience includes web development at CrowdStrike, front-end and UI design at Yardi Systems, interactive design at Venables Bell & Partners, and freelance web development through ereider.
                </p>

                <p>
                  When I'm away from my computer, you'll usually find me at the beach with my dogs or pretending I know how to keep plants alive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="theme-light" aria-labelledby="work-heading">
        <div className="section-container">
          <header className="section-header">
            <div>
              <h2 id="work-heading">SELECTED WEB DEVELOPMENT PROJECTS</h2>
              <p className="section-intro">
                  I build modern web applications at the intersection of technology, design, and AI—using tools such as React, Next.js, TypeScript, Tailwind CSS, Node.js, and AI-assisted development workflows.
              </p>
            </div>
            <span className="section-number" aria-hidden="true">/01</span>
          </header>

          <div className="work-list">
            {workList.map((work, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <article
                  key={work.id}
                  className={`work-item-row ${isEven ? 'even' : 'odd'}`}
                >
                  <div className="work-image-col">
                    <div className="work-image-wrapper">
                      <div className="work-image-badge" aria-hidden="true">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <img
                        src={work.image}
                        alt={`${work.title} website project preview`}
                        className="work-item-image"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="work-details-col">
                    <div className="work-item-meta">
                      <span className="work-meta-prefix" aria-hidden="true">——</span>
                      <span>{work.meta}</span>
                    </div>

                    <div className="work-item-title-row">
                      <h3 className="work-item-title">
                        <a href={work.url} target="_blank" rel="noopener noreferrer">
                          {work.title}
                        </a>
                      </h3>

                      <span className="work-item-arrow" aria-hidden="true">
                        <a href={work.url} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                          ↗
                        </a>
                      </span>
                    </div>

                    <p className="work-item-desc">{work.desc}</p>

                    <div className="work-local-note">
                      <div className="work-local-note-label">TECH STACK</div>

                      <div className="work-item-stack">
                        {work.stack.map((tech, techIdx) => (
                          <span key={techIdx} className="work-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="work-visit-row">
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-visit-link"
                        aria-label={`Visit ${work.title}`}
                      >
                        VISIT SITE ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI-Assisted Development Process */}
      <section id="process" className="theme-light" aria-labelledby="process-heading">
        <div className="section-container">
          <header className="section-header">
            <div>
              <h2 id="process-heading">HOW I BUILD</h2>
              <p className="section-intro">
                AI-assisted development with human direction, engineering judgment, and verification at every stage.
              </p>
            </div>
            <span className="section-number" aria-hidden="true">/02</span>
          </header>

          <div className="process-grid">
            {processList.map((p, idx) => (
              <article key={idx} className="process-card">
                <h3 className="process-step">{p.step}</h3>
                <p className="process-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section id="tools" className="theme-light" aria-labelledby="tools-heading">
        <div className="section-container">
          <header className="section-header">
            <div>
              <h2 id="tools-heading">TECHNOLOGIES & TOOLS</h2>
              <p className="section-intro">
                Modern front-end technologies, development tools, and AI-assisted workflows for building fast, responsive, maintainable web applications.
              </p>
            </div>
            <span className="section-number" aria-hidden="true">/03</span>
          </header>

          <div className="tools-grid">
            {toolsListDetail.map((tool, idx) => (
              <article key={idx} className="tool-card">
                <div className="tool-icon-box" aria-hidden="true">
                  {tool.icon}
                </div>

                <div className="tool-text-col">
                  <h3 className="tool-title">{tool.name}</h3>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="theme-light" aria-labelledby="experience-heading">
        <div className="section-container">
          <header className="section-header">
            <div>
              <h2 id="experience-heading">EXPERIENCE</h2>
              <p className="section-intro">
                A career spanning graphic design, interactive design, front-end development, senior web development, and freelance engineering.
              </p>
            </div>
            <span className="section-number" aria-hidden="true">/04</span>
          </header>

          <div className="experience-grid">
            {experienceList.map((exp, idx) => (
              <article key={idx} className="experience-row">
                <div className="experience-logo-col" aria-hidden="true">
                  <img
                    className="experience-logo"
                    src={exp.logo}
                    alt=""
                  />
                </div>

                <div className="experience-text-col">
                  <div className="experience-meta">
                    <span className="experience-years">{exp.years}</span>
                  </div>

                  <h3 className="experience-company">{exp.company}</h3>
                  <p className="experience-title">{exp.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="theme-dark" aria-labelledby="contact-heading">
        <footer className="footer-container">
          <div className="footer-top-row">
            <div className="footer-left">
              <h2 id="contact-heading">Let's Build Something</h2>

              <p className="footer-subtext">
                Always open to new opportunities, collaborations, and projects that bring together technology, design, and purpose.
              </p>
            </div>

            <div className="footer-right">
              <div className="email-block">
                <span className="email-label">Email me</span>

                <a
                  href="mailto:reiderea@gmail.com"
                  className="email-link-wrapper"
                  onClick={handleEmailClick}
                >
                  <span className="email-link">reiderea@gmail.com</span>
                  <span className="email-arrow" aria-hidden="true">↗</span>
                </a>
              </div>

              <ul className="social-links" aria-label="Social Profiles">
                <li>
                  <a href="mailto:reiderea@gmail.com" onClick={handleEmailClick}>
                    email
                  </a>
                </li>

                <li>
                  {/* Replace with your actual LinkedIn profile URL */}
                  <a
                    href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                </li>

                <li>
                  <a
                    href="/elizabeth-reider-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume (pdf)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-meta-nav">
              <span>©2026 ELIZABETH REIDER</span>

              <ul className="footer-nav-list" aria-label="Footer Navigation">
                <li><a href="#process">How I Build</a></li>
                <li><a href="#tools">Technologies</a></li>
                <li><a href="#work">Selected Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li>
                  <a href="#intro" style={{ fontWeight: 600 }}>
                    ↑ Back to Top
                  </a>
                </li>
              </ul>
            </div>

            <p className="footer-giant-brand">Elizabeth Reider</p>
          </div>
        </footer>
      </section>

      {copied && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span>reiderea@gmail.com copied to clipboard!</span>
        </div>
      )}
    </>
  );
}

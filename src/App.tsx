import { useState, useEffect } from 'react';

// Import profile picture
import myPic2 from './assets/my-pic-02.png';

// Import project screenshots
import doodetectorImg from './assets/doodetector.png';
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
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M23.15 2.58L17.62.21c-.54-.23-1.15-.13-1.6.25l-10.3 8.4-4.1-3.1c-.46-.35-1.1-.35-1.56 0L.11 7.1c-.14.11-.14.31 0 .42L3.9 10.5.11 13.48c-.14.11-.14.31 0 .42l1.1 1.35c.46.35 1.1.35 1.56 0l4.1-3.1 10.3 8.4c.45.38 1.06.48 1.6.25l5.53-2.37c.54-.23.85-.75.85-1.33V3.91c0-.58-.31-1.1-.85-1.33zM16.5 18.5l-8.5-7 8.5-7v14z" />
        </svg>
      )
    },
    {
      name: 'React',
      desc: 'Building highly interactive, stateful web applications with component-driven architecture, advanced hooks, and fluid visual flows.',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.2">
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
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 1.5h21v21h-21v-21zm19.5 16.512c-.15-.945-.75-1.74-2.58-2.475-.63-.3-1.335-.51-1.53-.99-.075-.285-.09-.435-.03-.6.12-.555.84-.72 1.365-.675.51.03.915.195 1.29.51l.51-.975c-.6-.51-.9-.69-2.13-.69-1.11 0-1.95.3-2.38 1.035-.285.48-.335 1.11-.075 1.62.525 1.02 1.875 1.35 2.58 1.695.705.33.975.57 1.14.96.165.39.15 1.02-.165 1.38-.33.375-1.02.63-1.725.585-.765-.03-1.275-.33-1.755-.78l-.705.975c.57.525 1.395.9 2.46.9 1.74 0 2.76-.915 2.91-2.46zm-6.21-7.512h-4.44v9.78h-1.26v-9.78H4.11v-1.08h10.08v1.08z" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      desc: 'Crafting premium, responsive layouts using utility-first classes, custom layout systems, variables, and responsive grids.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      )
    },
    {
      name: 'Figma',
      desc: 'Designing high-fidelity UX prototypes, vector graphics, precise grid assets, and cohesive design system foundations.',
      icon: (
        <svg viewBox="0 0 38 57" width="16" height="24" fill="currentColor">
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
        <svg viewBox="0 0 256 284" width="24" height="24" fill="currentColor">
          <path d="M255.5 69.5L128 0 0.5 69.5v145L128 284l127.5-69.5v-145z" />
        </svg>
      )
    },
    {
      name: 'Git',
      desc: 'Structuring granular source control revisions, branching models, safe commits, and continuous release orchestration.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.627l2.76 2.76c.641-.215 1.374-.073 1.888.44.515.515.658 1.258.438 1.9l2.658 2.66c.64-.22 1.38-.078 1.9.442.715.715.715 1.876 0 2.59-.714.716-1.877.716-2.592 0-.52-.52-.663-1.274-.44-1.915l-2.63-2.63v6.524c.21.098.41.24.577.426.715.714.715 1.876 0 2.59-.715.716-1.877.716-2.592 0-.715-.713-.715-1.876 0-2.59.17-.17.37-.31.58-.406V9.17c-.2-.096-.4-.24-.57-.424-.52-.52-.664-1.274-.44-1.915l-2.78-2.79L.452 10.93c-.603.605-.603 1.583 0 2.187l10.477 10.478c.604.604 1.582.604 2.187 0l10.43-10.43c.603-.603.603-1.582 0-2.187z" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      desc: 'Deploying robust serverless edge web infrastructures, configuring environment states, and monitoring build health.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
      )
    },
    {
      name: 'Code Rabbit',
      desc: 'Optimizing codebase maintenance using continuous, automated AI code reviews to enforce strict technical standards.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H7a3 3 0 0 0-3 3v4a5 5 0 0 0 10 0V6a3 3 0 0 0-3-3h-2M15 3h2a3 3 0 0 1 3 3v4a5 5 0 0 1-10 0V6a3 3 0 0 1 3-3h2" />
          <path d="M12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="currentColor" />
          <path d="M8 15a4 4 0 0 0 8 0" />
        </svg>
      )
    }
  ];

  const processList = [
    {
      step: 'IMAGINE/',
      desc: 'Interview with agent about the project — defining goals, determining the absolute best technical approach, and preemptively mapping possible hurdles.'
    },
    {
      step: 'PLAN/',
      desc: 'Choosing the exact right model for the job and aligning specialized agent skills to tackle complex sub-tasks efficiently.'
    },
    {
      step: 'DIRECT/',
      desc: 'Directing multiple agents in an orchestrated, structured manner. Kept on a precise path and never left to run wild.'
    },
    {
      step: 'VERIFY/',
      desc: 'Using VS Code, Code Rabbit, and a human — me — checking and validating line-by-line as we build to ensure absolute correctness.'
    }
  ];

  const workList = [

    {
      id: 1,
      title: 'laconchitabeach.com',
      url: 'https://laconchitabeach.com',
      meta: '2026 / WEB PORTAL',
      desc: 'Resident portal for a coastal community — featuring custom secure login, directory, shared documentation storage, and live automated tide/surf conditions.',
      stack: ['Next.js', 'Tailwind', 'MongoDB', 'Clerk'],
      image: laconchitaImg
    },
    {
      id: 2,
      title: 'DooDetector',
      url: 'https://doodetector.com',
      meta: '2026 / APP',
      desc: 'I have 3 large dogs and 1 pool guy with poor eyesight. At my house he has network access to my outdoor cameras, which auto-fill the start image with a default "clean view" and then a "current view... many shoes saved.',
      stack: ['Next.js', 'Tailwind'],
      image: doodetectorImg
    },
    {
      id: 3,
      title: 'balisafaritour.com',
      url: 'https://balisafaritour.com',
      meta: '2026 / CONVERSION ENGINE',
      desc: 'Premium marketing and booking site for a Bali-based tour operator — featuring seamless WhatsApp-based inquiry funnels and optimized for mobile conversion.',
      stack: ['Next.js', 'Tailwind', 'Responsive Web'],
      image: balisafariImg
    },
    {
      id: 4,
      title: 'robreidervoice.com',
      url: 'https://robreidervoice.com',
      meta: '2026 / DEMO REEL',
      desc: 'Portfolio and demo reel site for an Emmy-winning voice actor — custom audio-forward design and media streaming controls built to convert and book auditions.',
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
      {/* Dynamic Mixed-blend Navigation Bar */}
      <nav className={`navbar ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
        <a href="#intro" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>er.</a>
        <ul className="nav-links">
          <li><a href="#work">Recent Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* Mobile Hamburger Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <ul className="mobile-nav-links">
          <li><a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Recent Work</a></li>
          <li><a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a></li>
          <li><a href="#tools" onClick={() => setIsMobileMenuOpen(false)}>Tools</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Intro Section (Dark Theme) */}
      <section id="intro" className="theme-dark" aria-labelledby="intro-heading">
        <div className="hero-container">
          <header className="hero-top-row">
            <h1 id="intro-heading" className="hero-giant-name">elizabeth reider</h1>
            <div className="hero-meta-col">
              creative designer & developer
            </div>
            <div className="hero-meta-col" style={{ textAlign: 'right' }}>
              <a href="mailto:reiderea@gmail.com" onClick={handleEmailClick}>reiderea@gmail.com ↗</a>
            </div>
          </header>

          <main className="hero-main-content">
            <div className="hero-left-art">
              <img 
                src={myPic2} 
                alt="Elizabeth Reider portrait" 
                className="hero-profile-pic"
              />
            </div>
            <div className="hero-right-text">
              <h2 className="hero-tagline">I combine design intuition with AI-powered engineering.</h2>
              <div className="hero-bio">
                <p>
                  Turning ideas into reality takes the right tools. I know how to use a lot of them.
                </p>
                <p>
                  I started with a bachelor of fine arts from Miami University. I learned fast-paced print design and production at the Santa Barbara Independent, animation at Venables Bell & Partners in San Francisco, web design at Yardi Systems, web development at CrowdStrike.
                </p>
                <p>
                  Now i use ai to automate tasks, explore, create, and build. 
                </p>
                <p>
                  When I'm away from my computer, you'll usually find me at the beach with my dogs or pretending I know how to keep plants alive.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Recent Work Section (Light Theme) */}
      <section id="work" className="theme-light" aria-labelledby="work-heading">
        <div className="section-container">
          <header className="section-header">
            <h2 id="work-heading">RECENT WORK</h2>
            <span className="section-number">/01</span>
          </header>

          <div className="work-list">
            {workList.map((work, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article
                  key={work.id}
                  className={`work-item-row ${isEven ? 'even' : 'odd'}`}
                >
                  {/* Image Column with Badge */}
                  <div className="work-image-col">
                    <div className="work-image-wrapper">
                      <div className="work-image-badge">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <img
                        src={work.image}
                        alt={`${work.title} preview`}
                        className="work-item-image"
                      />
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="work-details-col">
                    <div className="work-item-meta">
                      <span className="work-meta-prefix">——</span>
                      <span>{work.meta}</span>
                    </div>

                    <div className="work-item-title-row">
                      <h3 className="work-item-title">
                        <a href={work.url} target="_blank" rel="noopener noreferrer">
                          {work.title}
                        </a>
                      </h3>
                      <span className="work-item-arrow" aria-hidden="true">
                        <a href={work.url} target="_blank" rel="noopener noreferrer">↗</a>
                      </span>
                    </div>

                    <p className="work-item-desc">{work.desc}</p>

                    {/* Tech Stack Custom Note Block */}
                    <div className="work-local-note">
                      <div className="work-local-note-label">TECH STACK</div>
                      <div className="work-item-stack">
                        {work.stack.map((tech, techIdx) => (
                          <span key={techIdx} className="work-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Visit Site Action Row */}
                    <div className="work-visit-row">
                      <a href={work.url} target="_blank" rel="noopener noreferrer" className="work-visit-link">
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

      {/* Process Section (Light Theme) */}
      <section id="process" className="theme-light" aria-labelledby="process-heading">
        <div className="section-container">
          <header className="section-header">
            <h2 id="process-heading">PROCESS</h2>
            <span className="section-number">/02</span>
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

      {/* Tools Section (Light Theme) - Redesigned Grid Layout */}
      <section id="tools" className="theme-light" aria-labelledby="tools-heading">
        <div className="section-container">
          <header className="section-header">
            <h2 id="tools-heading">TOOLS</h2>
            <span className="section-number">/03</span>
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



      {/* Experience Section (Light Theme) */}
      <section id="experience" className="theme-light" aria-labelledby="experience-heading">
        <div className="section-container">
          <header className="section-header">
            <h2 id="experience-heading">EXPERIENCE</h2>
            <span className="section-number">/04</span>
          </header>


          <div className="experience-grid">
            {experienceList.map((exp, idx) => (
              <article key={idx} className="experience-row">
                <div className="experience-logo-col" aria-hidden="true">
                  <img 
                    className="experience-logo" 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
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

      {/* Contact & Footer Section (Dark Theme) */}
      <section id="contact" className="theme-dark" aria-labelledby="contact-heading">
        <footer className="footer-container">
          <div className="footer-top-row">
            <div className="footer-left">
              <h2 id="contact-heading">Contact</h2>
              <p className="footer-subtext">
                Always open to new opportunities, collaborations, and projects that bring together technology, design, and purpose.
              </p>
            </div>
            <div className="footer-right">
              <div className="email-block">
                <span className="email-label">Email me</span>
                <a href="mailto:reiderea@gmail.com" className="email-link-wrapper" onClick={handleEmailClick}>
                  <span className="email-link">reiderea@gmail.com</span>
                  <span className="email-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
              <ul className="social-links" aria-label="Social Profiles">
                <li><a href="mailto:reiderea@gmail.com" onClick={handleEmailClick}>email</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a></li>
                <li><a href="/elizabeth-reider-resume.pdf" target="_blank" rel="noopener noreferrer">resume (pdf)</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-meta-nav">
              <span>©2026 ELIZABETH REIDER</span>
              <ul className="footer-nav-list" aria-label="Footer Navigation">
                <li><a href="#process">Process</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#work">Recent Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#intro" style={{ fontWeight: 600 }}>↑ Back to Top</a></li>
              </ul>
            </div>
            <h2 className="footer-giant-brand">elizabeth reider</h2>
          </div>
        </footer>
      </section>

      {copied && (
        <div className="toast-notification" role="status">
          <span>reiderea@gmail.com copied to clipboard!</span>
        </div>
      )}
    </>
  );
}

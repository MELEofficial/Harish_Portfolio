import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faCuttlefish, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { 
  faChartLine, 
  faBrain, 
  faDownload, 
  faEye, 
  faMapMarkerAlt, 
  faEnvelope, 
  faDatabase,
  faRobot,
  faProjectDiagram,
  faArrowRight,
  faStar,
  faCalendarAlt,
  faUsers,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

import dp from '../../assets/harish_photo.jpg';

function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  // const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  
  const roles = [
    'Business Analyst',
    'Data Enthusiast',
    'ML Explorer',
    'Problem Solver'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Inventory Management System",
      category: "Python Development",
      icon: faPython,
      description: "Developed a comprehensive Python-based inventory management system using Tkinter GUI framework for a local retail business, featuring automated stock tracking, real-time reporting, and low-stock alerts.",
      technologies: ["Python", "Tkinter", "SQLite", "Pandas"],
      completedDate: "June 2023",
      metrics: ["40% faster stock tracking", "Reduced manual errors by 60%", "Real-time inventory updates"],
      color: "#3776ab"
    },
    {
      id: 2,
      title: "Embedded System Simulator",
      category: "C++ Development",
      icon: faCuttlefish,
      description: "Built a sophisticated C++ application to simulate real-time data processing for IoT-based electrical systems, optimizing performance for low-power embedded devices with multi-threading support.",
      technologies: ["C++", "Multi-threading", "Real-time Processing", "IoT"],
      completedDate: "December 2022",
      metrics: ["30% performance improvement", "Real-time data processing", "Low-power optimization"],
      color: "#00599c"
    },
    {
      id: 3,
      title: "Business Process Optimization",
      category: "Business Analysis",
      icon: faChartLine,
      description: "Conducted comprehensive requirement analysis and designed optimized workflows for a CRM system implementation, resulting in significant operational efficiency improvements for a mid-sized company.",
      technologies: ["Process Mapping", "Requirement Analysis", "CRM Design", "Workflow Optimization"],
      completedDate: "March 2024",
      metrics: ["15% efficiency improvement", "Streamlined 12 processes", "Cost reduction of $25K annually"],
      color: "#00bcd4"
    },
    {
      id: 4,
      title: "Customer Sentiment Analysis",
      category: "Machine Learning",
      icon: faBrain,
      description: "Developed an advanced machine learning model using Python and TensorFlow to analyze customer feedback sentiment, implementing NLP techniques for accurate emotion detection and business insights.",
      technologies: ["Python", "TensorFlow", "NLP", "Scikit-learn", "Pandas"],
      completedDate: "October 2024",
      metrics: ["85% accuracy achieved", "Processed 10K+ reviews", "Real-time sentiment tracking"],
      color: "#ff6f00"
    }
  ];

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    setDisplayText('');
    
    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  // Auto-slide projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      {/* Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="hero-content">
                <div className="availability-badge">
                  <div className="status-dot"></div>
                  <span>Available for Opportunities</span>
                </div>
                
                <h1 className="hero-name">
                  <span className="greeting">Hello, I'm</span>
                  <span className="name-primary">Harish</span>
                  <span className="name-secondary">Sivakumar</span>
                </h1>
                
                <div className="hero-role">
                  <span className="role-prefix">I'm a </span>
                  <span className="role-dynamic">{displayText}</span>
                  <span className="cursor">|</span>
                </div>
                
                <p className="hero-description">
                  Passionate about transforming complex data into actionable business insights. 
                  ECE graduate with expertise in Python, C++, and Machine Learning, currently 
                  exploring the frontier of Agentic Generative AI while seeking opportunities 
                  as a Business Analyst.
                </p>
                
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">4</div>
                    <div className="stat-label">Tech Stacks</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Dedication</div>
                  </div>
                </div>
                
                <div className="hero-actions">
                  <button className="btn btn-primary-custom" onClick={() => scrollToSection('resume')}>
                    <FontAwesomeIcon icon={faDownload} />
                    Download Resume
                  </button>
                  <button className="btn btn-outline-custom" onClick={() => scrollToSection('projects')}>
                    <FontAwesomeIcon icon={faEye} />
                    View Projects
                  </button>
                </div>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Chennai, Tamil Nadu</span>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>harish.sivakumar@email.com</span>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="#" className="social-link" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="hero-visual">
                <div className="profile-container">
                  <div className="profile-frame">
                    <img
                      src={dp}
                      alt="Harish Sivakumar"
                      className="profile-photo"
                    />
                    <div className="profile-ring"></div>
                    <div className="profile-glow"></div>
                  </div>
                  
                  <div className="floating-icons">
                    <div className="floating-icon icon-1">
                      <FontAwesomeIcon icon={faPython} />
                    </div>
                    <div className="floating-icon icon-2">
                      <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className="floating-icon icon-3">
                      <FontAwesomeIcon icon={faBrain} />
                    </div>
                    <div className="floating-icon icon-4">
                      <FontAwesomeIcon icon={faDatabase} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faProjectDiagram} />
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Showcasing my journey from electrical engineering to business analysis through innovative projects
            </p>
          </div>
          
          <div className="projects-showcase">
            <div className="project-navigation">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`nav-dot ${index === currentProject ? 'active' : ''}`}
                  onClick={() => setCurrentProject(index)}
                  style={{ '--dot-color': project.color }}
                />
              ))}
            </div>
            
            <div className="project-display">
              <div className="project-card-enhanced">
                <div className="project-header">
                  <div className="project-icon-container">
                    <FontAwesomeIcon 
                      icon={projects[currentProject].icon} 
                      className="project-icon-main"
                      style={{ color: projects[currentProject].color }}
                    />
                  </div>
                  <div className="project-meta">
                    <span className="project-category">{projects[currentProject].category}</span>
                    <h3 className="project-title">{projects[currentProject].title}</h3>
                    <div className="project-date">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>Completed: {projects[currentProject].completedDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-body">
                  <p className="project-description">
                    {projects[currentProject].description}
                  </p>
                  
                  <div className="project-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {projects[currentProject].technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-metrics">
                    <h4>Key Achievements:</h4>
                    <ul className="metrics-list">
                      {projects[currentProject].metrics.map((metric, idx) => (
                        <li key={idx}>
                          <FontAwesomeIcon icon={faStar} />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="project-footer">
                  <button className="project-action-btn">
                    <FontAwesomeIcon icon={faArrowRight} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="projects-grid-preview">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`preview-card ${index === currentProject ? 'active' : ''}`}
                  onClick={() => setCurrentProject(index)}
                >
                  <FontAwesomeIcon icon={project.icon} style={{ color: project.color }} />
                  <span>{project.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h3>Innovation</h3>
                <p>Constantly exploring new technologies and methodologies to solve complex business problems</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <h3>Collaboration</h3>
                <p>Strong team player with excellent communication skills for cross-functional project success</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <h3>Future-Ready</h3>
                <p>Actively learning AI/ML technologies to stay ahead in the evolving business landscape</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
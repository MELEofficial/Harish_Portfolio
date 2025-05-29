import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faCuttlefish} from '@fortawesome/free-brands-svg-icons';
import { 
  faChartLine, 
  faBrain, 
  faDatabase, 
  faFileExcel, 
  faCode,
  faCogs,
  faLightbulb,
  faUsers,
  faProjectDiagram,
  faRobot,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    setVisibleSkills([]);
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map((_, index) => index));
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: faCogs },
    { id: 'programming', name: 'Programming', icon: faCode },
    { id: 'business', name: 'Business Analysis', icon: faChartLine },
    { id: 'data', name: 'Data & Analytics', icon: faDatabase },
    { id: 'emerging', name: 'Emerging Tech', icon: faRobot }
  ];

  const skills = [
    {
      name: 'Python',
      icon: faPython,
      description: 'Advanced proficiency in Python for data analysis, automation, web scraping, and ML model development with libraries like Pandas, NumPy, and Matplotlib.',
      proficiency: 90,
      category: 'programming',
      color: '#3776ab',
      projects: ['Data Analysis Dashboard', 'ML Prediction Model', 'Process Automation Scripts'],
      yearsOfExperience: '2+'
    },
    {
      name: 'C++',
      icon: faCuttlefish,
      description: 'Solid foundation in C++ for embedded systems, performance-critical applications, and algorithm implementation with focus on optimization.',
      proficiency: 75,
      category: 'programming',
      color: '#00599c',
      projects: ['Embedded System Controller', 'Algorithm Optimization', 'Data Structure Implementation'],
      yearsOfExperience: '1.5+'
    },
    {
      name: 'Business Analysis',
      icon: faChartLine,
      description: 'Comprehensive skills in requirement gathering, process mapping, stakeholder communication, and business process optimization.',
      proficiency: 88,
      category: 'business',
      color: '#ff6b35',
      projects: ['Requirements Documentation', 'Process Flow Analysis', 'Stakeholder Workshops'],
      yearsOfExperience: '2+'
    },
    {
      name: 'Machine Learning',
      icon: faBrain,
      description: 'Hands-on experience with ML frameworks including TensorFlow, scikit-learn, and Keras for predictive modeling and data insights.',
      proficiency: 70,
      category: 'emerging',
      color: '#ff6f00',
      projects: ['Sales Prediction Model', 'Customer Segmentation', 'Sentiment Analysis Tool'],
      yearsOfExperience: '1+'
    },
    {
      name: 'SQL & Databases',
      icon: faDatabase,
      description: 'Advanced SQL skills for complex queries, database design, data extraction, transformation, and performance optimization.',
      proficiency: 85,
      category: 'data',
      color: '#336791',
      projects: ['Database Optimization', 'ETL Pipeline Design', 'Data Warehouse Creation'],
      yearsOfExperience: '2+'
    },
    {
      name: 'Excel & Power BI',
      icon: faFileExcel,
      description: 'Expert-level skills in advanced Excel functions, pivot tables, macros, and Power BI for comprehensive data visualization and reporting.',
      proficiency: 92,
      category: 'data',
      color: '#217346',
      projects: ['Executive Dashboard', 'Financial Analysis Reports', 'KPI Tracking Systems'],
      yearsOfExperience: '3+'
    },
    {
      name: 'Data Visualization',
      icon: faChartBar,
      description: 'Creating compelling visual stories with data using various tools and libraries for business intelligence and decision making.',
      proficiency: 80,
      category: 'data',
      color: '#e74c3c',
      projects: ['Interactive Dashboards', 'Business Intelligence Reports', 'Real-time Analytics'],
      yearsOfExperience: '2+'
    },
    {
      name: 'Project Management',
      icon: faProjectDiagram,
      description: 'Agile methodologies, project planning, resource allocation, and cross-functional team coordination for successful project delivery.',
      proficiency: 78,
      category: 'business',
      color: '#9b59b6',
      projects: ['Agile Implementation', 'Team Coordination', 'Process Improvement'],
      yearsOfExperience: '1.5+'
    },
    {
      name: 'Generative AI',
      icon: faRobot,
      description: 'Exploring cutting-edge AI technologies including GPT models, prompt engineering, and agentic AI systems for business applications.',
      proficiency: 65,
      category: 'emerging',
      color: '#00d4ff',
      projects: ['AI Chatbot Development', 'Process Automation with AI', 'Content Generation Tools'],
      yearsOfExperience: '6 months'
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getProficiencyLevel = (proficiency) => {
    if (proficiency >= 85) return 'Expert';
    if (proficiency >= 70) return 'Advanced';
    if (proficiency >= 55) return 'Intermediate';
    return 'Beginner';
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 85) return '#4CAF50';
    if (proficiency >= 70) return '#2196F3';
    if (proficiency >= 55) return '#FF9800';
    return '#F44336';
  };

  return (
    <div className="skills-container">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="hero-background">
          <div className="code-rain"></div>
        </div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Technical <span className="highlight">Expertise</span>
            </h1>
            <p className="hero-subtitle">
              Bridging Technology & Business Intelligence
            </p>
            <div className="hero-description">
              <p>
                As a Business Analyst with a strong technical foundation, I leverage cutting-edge technologies 
                to transform complex business challenges into data-driven solutions. My expertise spans from 
                traditional programming to emerging AI technologies.
              </p>
            </div>
            <div className="skills-stats">
              <div className="stat-item">
                <div className="stat-number">9+</div>
                <div className="stat-label">Core Skills</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-nav">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <FontAwesomeIcon icon={category.icon} className="category-icon" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="skills-grid-section">
        <div className="container">
          <div className="row">
            {filteredSkills.map((skill, index) => (
              <div key={skill.name} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className={`skill-card ${visibleSkills.includes(index) ? 'visible' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--skill-color': skill.color 
                  }}
                >
                  <div className="skill-header">
                    <div className="skill-icon-container">
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div className="skill-title">
                      <h3>{skill.name}</h3>
                      <span className="experience-badge">{skill.yearsOfExperience} years</span>
                    </div>
                  </div>
                  
                  <div className="skill-content">
                    <p className="skill-description">{skill.description}</p>
                    
                    <div className="proficiency-section">
                      <div className="proficiency-header">
                        <span className="proficiency-label">Proficiency</span>
                        <span 
                          className="proficiency-level"
                          style={{ color: getProficiencyColor(skill.proficiency) }}
                        >
                          {getProficiencyLevel(skill.proficiency)}
                        </span>
                      </div>
                      <div className="proficiency-bar">
                        <div 
                          className="proficiency-fill"
                          style={{ 
                            width: `${skill.proficiency}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                      <div className="proficiency-percentage">{skill.proficiency}%</div>
                    </div>

                    <div className="projects-section">
                      <h5 className="projects-title">
                        <FontAwesomeIcon icon={faLightbulb} />
                        Key Projects
                      </h5>
                      <ul className="projects-list">
                        {skill.projects.map((project, idx) => (
                          <li key={idx} className="project-item">
                            <i className="fas fa-check-circle"></i>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="skill-overlay">
                    <div className="overlay-content">
                      <FontAwesomeIcon icon={skill.icon} className="overlay-icon" />
                      <h4>{skill.name}</h4>
                      <p>Click to explore projects</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="skills-summary">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="summary-card">
                <div className="summary-header">
                  <FontAwesomeIcon icon={faUsers} className="summary-icon" />
                  <h3>Skills in Action</h3>
                </div>
                <div className="summary-content">
                  <p>
                    My diverse skill set enables me to approach business challenges from multiple angles. 
                    By combining traditional business analysis methodologies with modern programming and 
                    emerging AI technologies, I deliver innovative solutions that drive measurable results.
                  </p>
                  <div className="skill-highlights">
                    <div className="highlight-category">
                      <h5>
                        <FontAwesomeIcon icon={faCode} />
                        Programming & Development
                      </h5>
                      <p>Strong foundation in Python and C++ for building robust analytical solutions and automation tools.</p>
                    </div>
                    <div className="highlight-category">
                      <h5>
                        <FontAwesomeIcon icon={faChartLine} />
                        Business Intelligence
                      </h5>
                      <p>Expert-level proficiency in data visualization, reporting, and business process optimization.</p>
                    </div>
                    <div className="highlight-category">
                      <h5>
                        <FontAwesomeIcon icon={faBrain} />
                        Emerging Technologies
                      </h5>
                      <p>Actively exploring ML, AI, and generative technologies to stay ahead of industry trends.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
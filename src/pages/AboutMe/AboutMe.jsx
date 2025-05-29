import React, { useState, useEffect } from 'react';
import Timeline from '../../components/Timeline/Timeline';
import './AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dp from '../../assets/harish_photo.jpg';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      year: '2019-2022',
      title: 'B.Tech in Electronics and Communication Engineering',
      description: 'Completed B.Tech in ECE with distinction, focusing on electrical systems, embedded programming, and digital signal processing. Built strong analytical and problem-solving foundations.',
      icon: 'fa-graduation-cap',
      color: '#4CAF50'
    },
    {
      year: '2022',
      title: 'Programming Mastery - Python & C++',
      description: 'Self-taught Python and C++ through intensive online courses and hands-on projects. Developed proficiency in data structures, algorithms, and software development principles.',
      icon: 'fa-code',
      color: '#2196F3'
    },
    {
      year: '2023',
      title: 'Business Analysis Excellence',
      description: 'Executed comprehensive business analyst projects including requirement analysis, process optimization, stakeholder collaboration, and data-driven decision making frameworks.',
      icon: 'fa-chart-line',
      color: '#FF9800'
    },
    {
      year: '2024-Present',
      title: 'AI & Machine Learning Innovation',
      description: 'Pioneering exploration in machine learning and agentic generative AI to revolutionize business analytics capabilities while actively pursuing Business Analyst opportunities.',
      icon: 'fa-brain',
      color: '#9C27B0'
    },
  ];

  // const personalStats = [
  //   { number: '15+', label: 'Projects Completed', icon: 'fa-project-diagram' },
  //   { number: '3+', label: 'Years Learning', icon: 'fa-clock' },
  //   { number: '5+', label: 'Technologies Mastered', icon: 'fa-tools' },
  //   { number: '100%', label: 'Dedication', icon: 'fa-heart' }
  // ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to solve complex business problems',
      icon: 'fa-lightbulb',
      color: '#FFD700'
    },
    {
      title: 'Analytics',
      description: 'Data-driven approach to decision making with strong analytical and critical thinking skills',
      icon: 'fa-analytics',
      color: '#00BCD4'
    },
    {
      title: 'Collaboration',
      description: 'Effective stakeholder management and team collaboration to achieve business objectives',
      icon: 'fa-users',
      color: '#4CAF50'
    },
    {
      title: 'Continuous Learning',
      description: 'Committed to staying updated with latest industry trends and emerging technologies',
      icon: 'fa-graduation-cap',
      color: '#FF5722'
    }
  ];

  return (
    <div className="about-me-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className="hero-title">
                  About <span className="highlight">Harish Sivakumar</span>
                </h1>
                <p className="hero-subtitle">
                  Business Analyst | Data Enthusiast | AI Explorer
                </p>
                <div className="hero-description">
                  <p>
                    I'm a passionate Business Analyst fresher with a unique blend of technical expertise and analytical mindset. 
                    My journey from Electronics and Communication Engineering to Business Analysis represents my commitment to 
                    continuous learning and adaptability in today's dynamic business landscape.
                  </p>
                  <p>
                    With hands-on experience in Python, C++, and emerging AI technologies, I bring a fresh perspective to 
                    traditional business analysis, leveraging data-driven insights to drive meaningful business outcomes.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="profile-card">
                  <div className="profile-image-container">
                    <img 
                      src={dp}
                      alt="Harish Sivakumar" 
                      className="profile-image"
                    />
                    <div className="profile-status">
                      <i className="fa fa-circle status-indicator"></i>
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats-section">
        <div className="container">
          <div className="row">
            {personalStats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="stat-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="stat-icon">
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Core <span className="highlight">Values</span></h2>
            <p className="section-subtitle">The principles that drive my professional approach</p>
          </div>
          <div className="row">
            {coreValues.map((value, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-4">
                <div className="value-card">
                  <div className="value-icon" style={{ color: value.color }}>
                    <i className={`fas ${value.icon}`}></i>
                  </div>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Career <span className="highlight">Journey</span></h2>
            <p className="section-subtitle">My professional evolution and learning path</p>
          </div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Professional Summary */}
      <section className="summary-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="summary-card">
                <div className="summary-header">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <h3>Professional Summary</h3>
                </div>
                <div className="summary-content">
                  <p>
                    As a motivated Business Analyst fresher, I combine technical proficiency with strong analytical skills to deliver 
                    comprehensive business solutions. My background in Electronics and Communication Engineering provides me with a unique 
                    perspective on system integration and process optimization.
                  </p>
                  <p>
                    My expertise spans across programming languages like Python and C++, data analysis, and emerging technologies including 
                    Machine Learning and Generative AI. I'm passionate about translating complex technical requirements into actionable 
                    business strategies that drive organizational growth and efficiency.
                  </p>
                  <div className="summary-highlights">
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Strong analytical and problem-solving abilities</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Proficient in Python, C++, and data analysis tools</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Experience with ML and AI technologies</span>
                    </div>
                    <div className="highlight-item">
                      <i className="fas fa-check-circle"></i>
                      <span>Excellent stakeholder communication skills</span>
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

export default AboutMe;
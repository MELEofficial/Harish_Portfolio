import React, { useState, useEffect } from 'react';
import { Download, Eye, FileText, Award, Code, Briefcase } from 'lucide-react';
import './Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumePDF from '../../assets/resume.pdf';

function Resume() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // const resumePDF = "../../assets/resume.pdf";

  const stats = [
    { icon: <FileText size={24} />, label: "Professional Resume", value: "Updated 2025" },
    { icon: <Code size={24} />, label: "Technical Skills", value: "Python, C++, ML" },
    { icon: <Briefcase size={24} />, label: "Experience", value: "Business Analyst" },
    { icon: <Award size={24} />, label: "Background", value: "ECE Foundation" }
  ];

  return (
    <div className="resume-container">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      {/* Hero Section */}
      <section className={`intro-section text-center py-5 ${isLoaded ? 'loaded' : ''}`}>
        <div className="container">
          <div className="professional-badge mb-4">
            <FileText size={20} className="me-2" />
            <span>Professional Portfolio</span>
          </div>
          
          <h1 className="display-2 gradient-text mb-4">My Resume</h1>
          
          <p className="lead-enhanced mx-auto mb-5">
            Comprehensive overview of my professional journey as a 
            <span className="text-cyan"> Business Analyst</span> with expertise in 
            <span className="text-blue"> Python, C++, and Machine Learning</span>, 
            built on a solid <span className="text-purple">ECE foundation</span>.
          </p>

          {/* Stats Grid */}
          <div className="row g-3 justify-content-center mb-5">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className={`stat-card ${isLoaded ? 'loaded' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="stat-icon text-cyan mb-2">
                    {stat.icon}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Viewer Section */}
      <section className="resume-section py-5">
        <div className="container">
          <div className={`resume-card ${isLoaded ? 'loaded' : ''}`}>
            {/* Section Header */}
            <div className="text-center mb-5">
              <h2 className="section-title">Resume Document</h2>
              <div className="section-divider mx-auto"></div>
            </div>

            {/* PDF Viewer Container */}
            <div 
              className={`resume-viewer-enhanced ${isHovering ? 'hovering' : ''}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="glow-effect"></div>
              
              <div className="pdf-container">
                {/* PDF Placeholder - Replace with actual embed */}
                <div className="pdf-preview">
                  <div className="pdf-placeholder">
                    <Eye size={64} className="mb-3" />
                    <p className="placeholder-title">Resume Preview</p>
                    <p className="placeholder-subtitle">PDF document will be displayed here</p>
                  </div>
                  
                  {/* Uncomment and replace with your actual embed when implementing */}
                  
                  <embed
                    src={resumePDF}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    className="resume-pdf"
                  />
                 
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mt-4">
              <button className="btn btn-download-enhanced">
                <Download size={20} className="me-2 download-icon" />
                Download Resume
              </button>
              
              <button className="btn btn-view-enhanced">
                <Eye size={20} className="me-2 view-icon" />
                View Fullscreen
              </button>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-4">
              <p className="resume-info">
                Last updated: <span className="text-cyan">May 2025</span> • 
                Format: <span className="text-cyan">PDF</span> • 
                Size: <span className="text-cyan">2.3 MB</span>
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="feature-card">
                <FileText size={32} className="feature-icon text-cyan mb-3" />
                <h5 className="feature-title">Professional Format</h5>
                <p className="feature-description">Clean, ATS-friendly design optimized for both human readers and applicant tracking systems.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card">
                <Award size={32} className="feature-icon text-blue mb-3" />
                <h5 className="feature-title">Skills Showcase</h5>
                <p className="feature-description">Comprehensive overview of technical skills, projects, and professional achievements.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card">
                <Briefcase size={32} className="feature-icon text-purple mb-3" />
                <h5 className="feature-title">Industry Ready</h5>
                <p className="feature-description">Tailored for business analysis roles with emphasis on technical proficiency and analytical skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
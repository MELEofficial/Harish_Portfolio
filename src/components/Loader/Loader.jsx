import React, { useState, useEffect } from 'react';
import './Loader.css';

function Loader() {
  const [loadingText, setLoadingText] = useState('Initializing');
  const [progress, setProgress] = useState(0);

  const loadingSteps = [
    'Initializing System...',
    'Loading Components...',
    'Fetching Data...',
    'Analyzing Portfolio...',
    'Optimizing Experience...',
    'Almost Ready...'
  ];

  useEffect(() => {
    let stepIndex = 0;
    let progressValue = 0;

    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        setLoadingText(loadingSteps[stepIndex]);
        stepIndex++;
        progressValue += 16.67; // Increment progress
        setProgress(progressValue);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Generate random binary digits for the rain effect
  const generateBinaryRain = () => {
    const digits = [];
    for (let i = 0; i < 20; i++) {
      const digit = Math.random() > 0.5 ? '1' : '0';
      const left = Math.random() * 100;
      const animationDuration = 3 + Math.random() * 4;
      const animationDelay = Math.random() * 2;
      
      digits.push(
        <div
          key={i}
          className="binary-digit"
          style={{
            left: `${left}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`
          }}
        >
          {digit}
        </div>
      );
    }
    return digits;
  };

  return (
    <div className="loader-container">
      {/* Binary Rain Background */}
      <div className="binary-rain">
        {generateBinaryRain()}
      </div>

      <div className="loader">
        {/* Tech Spinner */}
        <div className="tech-spinner-container">
          <div className="spinner"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>

        {/* Loading Text */}
        <div className="loader-text">
          <span className="loading-dots">{loadingText}</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00bcd4, #64ffda)',
              height: '100%',
              borderRadius: '2px',
              transition: 'width 0.3s ease'
            }}
          ></div>
        </div>

        {/* Tech Info */}
        <div className="tech-info">
          <div className="status-text">
            Harish Sivakumar Portfolio
          </div>
          <div className="status-text">
            Business Analyst | ML Enthusiast
          </div>
          <div className="version-info">
            v2.0.1 | Build: {new Date().getFullYear()}.{String(Date.now()).slice(-6)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
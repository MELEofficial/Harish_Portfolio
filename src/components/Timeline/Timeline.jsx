// Timeline.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faChartLine, faBrain, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';

function Timeline({ events }) {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  const iconMap = {
    'fa-graduation-cap': faGraduationCap,
    'fa-code': faCode,
    'fa-chart-line': faChartLine,
    'fa-brain': faBrain,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, [events]);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline">
        <div className="timeline-line">
          <div className="timeline-progress"></div>
        </div>
        
        {events.map((event, index) => (
          <div
            key={index}
            data-index={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
              visibleItems.has(index) ? 'animate-in' : ''
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-content">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={iconMap[event.icon]} />
                </div>
                <div className="timeline-pulse"></div>
              </div>
              
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{event.title}</h3>
                  <div className="timeline-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{event.year}</span>
                  </div>
                </div>
                
                <div className="timeline-body">
                  <p className="timeline-description">{event.description}</p>
                </div>
                
                <div className="timeline-footer">
                  <div className="timeline-category">
                    <FontAwesomeIcon icon={iconMap[event.icon]} />
                    <span>
                      {event.icon === 'fa-graduation-cap' && 'Education'}
                      {event.icon === 'fa-code' && 'Programming'}
                      {event.icon === 'fa-chart-line' && 'Business Analytics'}
                      {event.icon === 'fa-brain' && 'AI/ML'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
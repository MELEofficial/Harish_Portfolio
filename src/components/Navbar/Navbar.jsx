import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProgress, setActiveProgress] = useState(0);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Calculate scroll progress
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);
      
      setActiveProgress(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update progress based on current route
  useEffect(() => {
    const routes = ['/', '/about', '/skills', '/resume'];
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex !== -1) {
      setActiveProgress((currentIndex / (routes.length - 1)) * 100);
    }
  }, [location]);

  const navItems = [
    { path: '/', label: 'Profile', icon: '🏠' },
    { path: '/about', label: 'About Me', icon: '👨‍💼' },
    { path: '/skills', label: 'Skills', icon: '🛠️' },
    { path: '/resume', label: 'Resume', icon: '📄' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark sticky-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        {/* Brand with Status Indicator */}
        <NavLink className="navbar-brand status-indicator" to="/">
          Harish Sivakumar
        </NavLink>

        {/* Custom Hamburger Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={item.path}>
                <NavLink 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                  to={item.path}
                  title={item.label}
                  onClick={() => {
                    // Close mobile menu after click
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarToggler && navbarCollapse.classList.contains('show')) {
                      navbarToggler.click();
                    }
                  }}
                >
                  <span className="nav-icon d-none d-md-inline me-1" role="img" aria-label={item.label}>
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Progress Indicator */}
          <div 
            className="nav-progress d-none d-lg-block"
            style={{ width: `${activeProgress}%` }}
          ></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
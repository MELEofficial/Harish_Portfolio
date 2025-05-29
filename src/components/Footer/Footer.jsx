import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand text-center">
            <h4>Harish Sivakumar</h4>
            <p className="footer-tagline">Business Analyst | ML Enthusiast | Problem Solver</p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/harish-sivakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Connect on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/harish-sivakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="View GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:harish.sivakumar@example.com"
              className="social-link"
              title="Send Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="tel:+919876543210"
              className="social-link"
              title="Call Me"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>

          {/* Quick Navigation Links */}
          <div className="quick-links">
            <Link to="/" className="quick-link" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/about" className="quick-link" onClick={scrollToTop}>
              About Me
            </Link>
            <Link to="/skills" className="quick-link" onClick={scrollToTop}>
              Skills
            </Link>
            <Link to="/resume" className="quick-link" onClick={scrollToTop}>
              Resume
            </Link>
          </div>

          {/* Divider */}
          <hr className="footer-divider" />

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              © {currentYear} Harish Sivakumar. All rights reserved.
            </p>
            <p className="footer-signature">
              Crafted with <span>passion</span> and <span>innovation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
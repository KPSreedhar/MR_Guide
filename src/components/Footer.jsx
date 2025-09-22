import { Link } from "react-router-dom";
import { FaCode, FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <FaCode className="logo-icon" />
                <span>Mr. Guide</span>
              </Link>
              <p className="footer-description">
                Your comprehensive coding companion for libraries, APIs, and frameworks. 
                Learn, explore, and master web development technologies.
              </p>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:contact@mrguide.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>Explore</h3>
            <ul className="footer-links">
              <li>
                <Link to="/libraries">Libraries</Link>
              </li>
              <li>
                <Link to="/apis">APIs</Link>
              </li>
              <li>
                <Link to="/frameworks">Frameworks</Link>
              </li>
              <li>
                <Link to="/">Popular Resources</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="/documentation" target="_blank" rel="noopener noreferrer">Documentation</a>
              </li>
              <li>
                <a href="/tutorials" target="_blank" rel="noopener noreferrer">Tutorials</a>
              </li>
              <li>
                <a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
              <li>
                <a href="/community" target="_blank" rel="noopener noreferrer">Community</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li>
                <a href="/help" target="_blank" rel="noopener noreferrer">Help Center</a>
              </li>
              <li>
                <a href="/contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
              </li>
              <li>
                <a href="/feedback" target="_blank" rel="noopener noreferrer">Feedback</a>
              </li>
              <li>
                <a href="/contribute" target="_blank" rel="noopener noreferrer">Contribute</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Mr. Guide. Made with <FaHeart className="heart-icon" /> for developers.
            </p>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaCode, FaSignInAlt, FaUser } from "react-icons/fa";
import { useAuth } from '../Firebase/AuthProvider';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleAuthClick = () => {
    closeMenu();
    if (userLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    // You'll need to implement logout functionality
    console.log("Logout clicked");
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <FaCode className="logo-icon" />
          <span>Mr. Guide</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/libraries" 
            className={`nav-link ${location.pathname === "/libraries" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Libraries
          </Link>
          <Link 
            to="/apis" 
            className={`nav-link ${location.pathname === "/apis" ? "active" : ""}`}
            onClick={closeMenu}
          >
            APIs
          </Link>
          <Link 
            to="/frameworks" 
            className={`nav-link ${location.pathname === "/frameworks" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Frameworks
          </Link>
          
          {userLoggedIn ? (
            <div className="user-profile-nav">
              <Link 
                to="/profile" 
                className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
                onClick={closeMenu}
              >
                <FaUser className="profile-icon" />
                {currentUser?.displayName || 'Profile'}
              </Link>
            </div>
          ) : (
            <button 
              className="auth-button"
              onClick={handleAuthClick}
            >
              <FaSignInAlt className="auth-icon" />
              Login
            </button>
          )}
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}
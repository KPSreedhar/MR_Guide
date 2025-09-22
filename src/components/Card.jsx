import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaLock } from 'react-icons/fa';
import { useAuth } from '../Firebase/AuthProvider';
import '../styles/Card.css';

export default function Card({ item, type, showCategory = false }) {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleExploreClick = (e) => {
    if (!userLoggedIn) {
      e.preventDefault();
      navigate('/login');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="card">
      {showCategory && (
        <div className="card-category">{item.category.replace('-', ' ')}</div>
      )}

      <h3 className="card-title">{item.name}</h3>

      <p className="card-description">{item.description}</p>

      <div className="card-footer">
        <div className="card-meta">
          <span className={`difficulty-badge ${item.difficulty}`}>
            {item.difficulty}
          </span>
          <span className="popularity">
            <FaStar /> {item.popularity}/5
          </span>
        </div>
        
        {userLoggedIn ? (
          <Link 
            to={`/${type}/${item.id}`} 
            className="explore-btn arrow-btn"
            onClick={handleExploreClick}
          >
            Explore
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : (
          <button
            className="login-required-btn"
            onClick={handleLoginRedirect}
            title="Login required to explore"
          >
            <FaLock className="lock-icon" />
            Login to Explore
          </button>
        )}
      </div>
    </div>
  );
}
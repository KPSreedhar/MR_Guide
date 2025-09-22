import { NavLink } from 'react-router-dom';
import '../styles/CategoryFilter.css'
import { 
  FaCode, 
  FaChartLine, 
  FaEthereum, 
  FaRobot, 
  FaFlask, 
  FaGlobe,
  FaPalette,
  FaCog
} from 'react-icons/fa';

const categories = [
  { id: 'state-management', icon: <FaCog />, label: 'State Management' },
  { id: 'animation', icon: <FaPalette />, label: 'Animation' },
  { id: 'styling', icon: <FaPalette />, label: 'Styling' },
  { id: 'data-visualization', icon: <FaChartLine />, label: 'Data Viz' },
  { id: 'web3', icon: <FaEthereum />, label: 'Web3' },
  { id: 'ai-ml', icon: <FaRobot />, label: 'AI/ML' },
  { id: 'testing', icon: <FaFlask />, label: 'Testing' },
  { id: 'i18n', icon: <FaGlobe />, label: 'i18n' },
  { id: 'frameworks', icon: <FaCode />, label: 'Frameworks' }
];

export default function CategoryFilter() {
  return (
    <div className="category-filter">
      <h3>Browse by Category</h3>
      <div className="filter-buttons">
        {categories.map(({ id, icon, label }) => (
          <NavLink 
            key={id}
            to={`/category/${id}`}
            className={({ isActive }) => 
              isActive ? 'filter-btn active' : 'filter-btn'
            }
          >
            <span className="icon">{icon}</span>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
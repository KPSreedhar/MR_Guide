import { useParams } from 'react-router-dom';
import { apis } from '../data/apis';
import { libraries } from '../data/libraries';
import { frameworks } from '../data/frameworks';
//apis, libraries, frameworks from '../data';
import { 
  FaExternalLinkAlt, 
  FaStar, 
  FaLock, 
  FaLockOpen,
  FaGithub,
  FaCode
} from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import '../styles/DetailsPage.css';

const dataSources = {
  api: apis,
  library: libraries,
  framework: frameworks
};

export default function DetailsPage() {
  const { id, type } = useParams();
  const item = dataSources[type]?.find(item => item.id === parseInt(id));

  if (!item) return <div className="not-found">{type} not found</div>;

  // Common fields
  const {
    name,
    icon,
    category,
    description,
    problem,
    pros = [],
    install,
    codeExample,
    docsLink,
    difficulty,
    popularity,
    lastUpdated,
    tags = [],
    useCases = []
  } = item;

  // Type-specific fields
  const specificFields = {
    api: {
      authRequired: item.authRequired,
      authType: item.authType,
      rateLimit: item.rateLimit,
      pricing: item.pricing,
      freeTier: item.freeTier
    },
    library: {
      bundleSize: item.bundleSize,
      githubStars: item.githubStars,
      weeklyDownloads: item.weeklyDownloads
    },
    framework: {
      bundleSize: item.bundleSize,
      githubStars: item.githubStars,
      ssrSupport: item.ssrSupport
    }
  };

  return (
    <div className={`details-container ${type}`}>
      {/* Header */}
      <header className="details-header">
        <div className="title-group">
          <h1>
            <span className="item-icon">{icon}</span>
            {name}
          </h1>
          <div className="meta-group">
            <span className={`category ${category}`}>
              {category.replace('-', ' ')}
            </span>
            <span className="difficulty" data-level={difficulty}>
              {difficulty}
            </span>
            <span className="popularity">
              <FaStar /> {popularity}/5
            </span>
          </div>
        </div>

        <div className="action-group">
          <a 
            href={docsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="docs-button"
          >
            <FaExternalLinkAlt /> Docs
          </a>
          {specificFields[type]?.githubStars && (
            <span className="github-stats">
              <FaGithub /> {specificFields[type].githubStars}
            </span>
          )}
        </div>
      </header>

      {/* Overview */}
      <section className="content-section">
        <h2>Overview</h2>
        <p className="description">{description}</p>
        
        <div className="problem-solution-grid">
          <div className="problem-card">
            <h3>Problem Solved</h3>
            <p>{problem}</p>
          </div>
          <div className="pros-card">
            <h3>Key Features</h3>
            <ul>
              {pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <div className="tech-details-grid">
        {/* Common Technical Details */}
        <div className="detail-card">
          <h3>Installation</h3>
          <div className="install-instruction">
            <SiNpm className="npm-icon" />
            <code>{install}</code>
          </div>
        </div>

        {/* Type-Specific Details */}
        {type === 'api' && (
          <>
            <div className="detail-card">
              <h3>Authentication</h3>
              <div className="auth-details">
                {specificFields.api.authRequired ? (
                  <>
                    <Flock className="auth-icon" />
                    <span>{specificFields.api.authType}</span>
                  </>
                ) : (
                  <>
                    <FlockOpen className="auth-icon open" />
                    <span>No authentication</span>
                  </>
                )}
              </div>
            </div>
            <div className="detail-card">
              <h3>Rate Limits</h3>
              <p>{specificFields.api.rateLimit}</p>
              {specificFields.api.freeTier && (
                <span className="free-badge">Free tier available</span>
              )}
            </div>
          </>
        )}

        {type === 'library' && (
          <>
            <div className="detail-card">
              <h3>Bundle Size</h3>
              <p>{specificFields.library.bundleSize}</p>
            </div>
            <div className="detail-card">
              <h3>Weekly Downloads</h3>
              <p>{specificFields.library.weeklyDownloads}</p>
            </div>
          </>
        )}

        {type === 'framework' && (
          <>
            <div className="detail-card">
              <h3>Bundle Size</h3>
              <p>{specificFields.framework.bundleSize}</p>
            </div>
            <div className="detail-card">
              <h3>SSR Support</h3>
              <p>{specificFields.framework.ssrSupport ? '✅ Yes' : '❌ No'}</p>
            </div>
          </>
        )}
      </div>

      {/* Code Example */}
      <section className="content-section">
        <h2>Code Example</h2>
        <pre className="code-block">
          <code>{codeExample}</code>
        </pre>
      </section>

      {/* Use Cases */}
      {useCases.length > 0 && (
        <section className="content-section">
          <h2>Use Cases</h2>
          <div className="use-cases-grid">
            {useCases.map((useCase, i) => (
              <div key={i} className="use-case-card">
                <div className="use-case-number">{i + 1}</div>
                <p>{useCase}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="tags-section">
          {tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="details-footer">
        <span className="last-updated">
          Last updated: {new Date(lastUpdated).toLocaleDateString()}
        </span>
        <span className="item-type">{type}</span>
      </div>
    </div>
  );
}
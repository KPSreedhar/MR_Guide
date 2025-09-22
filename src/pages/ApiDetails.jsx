import { useParams } from 'react-router-dom';
import { apis } from '../data/apis';
import { FaExternalLinkAlt, FaLock, FaLockOpen, FaStar } from 'react-icons/fa';
import '../styles/DetailsPage.css';

export default function ApiDetails() {
  const { id } = useParams();
  const api = apis.find(api => api.id === parseInt(id));

  return (
    <div className="details-container">
      {/* Header Section */}
      <header className="details-header">
        <h1>{api.name}</h1>
        <span className="category-badge">{api.category}</span>
      </header>

      {/* Overview Section */}
      <section className="details-section">
        <h2>Overview</h2>
        <p className="description">{api.description}</p>
      </section>

      {/* Details Grid */}
      <div className="details-grid">
        <section className="details-card">
          <h3>Problem Solved</h3>
          <p>{api.problem}</p>
        </section>

        <section className="details-card">
          <h3>Authentication</h3>
          <div className="auth-details">
            {api.authRequired ? (
              <>
                <FaLock className="auth-icon" />
                <span>{api.authType}</span>
              </>
            ) : (
              <>
                <FaLockOpen className="auth-icon open" />
                <span>No authentication required</span>
              </>
            )}
          </div>
        </section>

        <section className="details-card">
          <h3>Rate Limits</h3>
          <p>{api.rateLimit}</p>
          {api.freeTier && <span className="free-badge">Free tier available</span>}
        </section>
      </div>

      {/* Code Section */}
      <section className="code-section">
        <h2>Installation</h2>
        <pre className="code-block">
          <code>{api.install}</code>
        </pre>

        <h2>Example Usage</h2>
        <pre className="code-block">
          <code>{api.codeExample}</code>
        </pre>
      </section>

      {/* Use Cases */}
      <section className="details-section">
        <h2>Use Cases</h2>
        <ul className="use-case-list">
          {api.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </section>

      {/* Documentation Link */}
      <a
        href={api.docsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="docs-button"
      >
        <FaExternalLinkAlt /> Official Documentation
      </a>
    </div>
  );
}
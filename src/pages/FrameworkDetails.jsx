import { useParams } from 'react-router-dom';
import { frameworks } from '../data/frameworks';
import '../styles/DetailsPage.css';

export default function frameworkDetails() {
  const { id } = useParams();
  const framework = frameworks.find(lib => lib.id === parseInt(id));

  return (
    <div className="details-container">
      <header className="details-header">
        <h1>{framework.name}</h1>
        <span className="category-badge">{framework.category}</span>
      </header>

      <section className="details-section">
        <h2>Overview</h2>
        <p className="description">{framework.description}</p>
      </section>

      <div className="details-grid">
        <section className="details-card">
          <h3>Problem Solved</h3>
          <p>{framework.problem}</p>
        </section>

        <section className="details-card">
          <h3>Use Cases</h3>
          <ul>
            {framework.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </section>

        <section className="details-card">
          <h3>Key Advantages</h3>
          <ul>
            {framework.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="code-section">
        <h2>Installation</h2>
        <pre className="code-block">
          <code>{framework.install}</code>
        </pre>

        <h2>Example Usage</h2>
        <pre className="code-block">
          <code>{framework.codeExample}</code>
        </pre>
      </section>

      <a href={framework.docsLink} target="_blank" rel="noopener noreferrer" className="docs-button">
        View Official Documentation
      </a>
    </div>
  );
}
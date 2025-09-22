import { useParams } from 'react-router-dom';
import { libraries } from '../data/libraries';
import '../styles/DetailsPage.css';

export default function LibraryDetails() {
  const { id } = useParams();
  const library = libraries.find(lib => lib.id === parseInt(id));

  return (
    <div className="details-container">
      <header className="details-header">
        <h1>{library.name}</h1>
        <span className="category-badge">{library.category}</span>
      </header>

      <section className="details-section">
        <h2>Overview</h2>
        <p className="description">{library.description}</p>
      </section>

      <div className="details-grid">
        <section className="details-card">
          <h3>Problem Solved</h3>
          <p>{library.problem}</p>
        </section>

        <section className="details-card">
          <h3>Use Cases</h3>
          <ul>
            {library.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </section>

        <section className="details-card">
          <h3>Key Advantages</h3>
          <ul>
            {library.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="code-section">
        <h2>Installation</h2>
        <pre className="code-block">
          <code>{library.install}</code>
        </pre>

        <h2>Example Usage</h2>
        <pre className="code-block">
          <code>{library.codeExample}</code>
        </pre>
      </section>

      <a href={library.docsLink} target="_blank" rel="noopener noreferrer" className="docs-button">
        View Official Documentation
      </a>
    </div>
  );
}
import { useState } from 'react';
import Card from '../components/Card.jsx';
import '../styles/ContentListPage.css';

export default function ContentListPage({ title, items, type }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');


  const categories = ['all', ...new Set(items.map(item => item.category))];

  const filteredItems = items
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  return (
    <div className="content-list-page">
      <h1>{title}</h1>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder={`Search ${type}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category.replace('-', ' ')}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <p className="results-count">
        Showing {filteredItems.length} of {items.length} {type}
      </p>

      {/* Content Grid */}
      <div className="content-grid">
        {filteredItems.map(item => (
          <Card
            key={item.id}
            item={item}
            type={type}
            showCategory={true} // Show category on each card
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="empty-state">
          <p>No {type} found matching your criteria.</p>
          <button onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }}>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
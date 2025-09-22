import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { libraries } from "../data/libraries";
import { apis } from "../data/apis";
import { frameworks } from "../data/frameworks";
import Card from "../components/Card";
import '../styles/Home.css'
import { FaSearch, FaArrowRight, FaCode, FaServer, FaCubes } from "react-icons/fa";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter function for search
  const filterItems = (items) => 
    items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Get filtered items for each category
  const filteredLibraries = useMemo(() => filterItems(libraries), [searchTerm]);
  const filteredApis = useMemo(() => filterItems(apis), [searchTerm]);
  const filteredFrameworks = useMemo(() => filterItems(frameworks), [searchTerm]);

  // Get popular items (top 3 by popularity)
  const popularLibraries = libraries
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
  
  const popularApis = apis
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
  
  const popularFrameworks = frameworks
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the state, this just prevents form submission
  };

  // Handle popular search clicks
  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    setActiveCategory(term.toLowerCase());
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setActiveCategory("all");
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Learn to Code</h1>
          <p className="hero-subtitle">With Mr. Guide - Your coding companion</p>
          
          {/* Search Container */}
          <form onSubmit={handleSearch} className="search-container">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search libraries, APIs, frameworks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
              />
              {searchTerm && (
                <button 
                  type="button" 
                  className="clear-search"
                  onClick={clearSearch}
                >
                  ×
                </button>
              )}
            </div>
            <button type="submit" className="search-button">Search</button>
          </form>
          
          {/* Popular Searches */}
          <div className="popular-searches">
            <span>Popular: </span>
            <button 
              type="button"
              onClick={() => handlePopularSearch("TanStack Query")}
              className={activeCategory === "TanStack Query" ? "active" : ""}
            >
              TanStack Query
            </button>
            <button 
              type="button"
              onClick={() => handlePopularSearch("Weather")}
              className={activeCategory === "Weather" ? "active" : ""}
            >
              Weather
            </button>
            <button 
              type="button"
              onClick={() => handlePopularSearch("Next.js")}
              className={activeCategory === "Next.js" ? "active" : ""}
            >
              Next.js
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-snippet">
            <div className="code-line">function welcomeToMrGuide() {"{"}</div>
            <div className="code-line indent">console.log("Learn React");</div>
            <div className="code-line indent">return "Success";</div>
            <div className="code-line">{"}"}</div>
          </div>
        </div>
      </div>

      {/* Not Sure Section - Only show when not searching */}
      {!searchTerm && (
        <div className="not-sure-section">
          <div className="container">
            <h2>Not Sure Where To Begin?</h2>
            <p>Explore our curated resources to start your coding journey</p>
            <div className="begin-options">
              <div className="begin-option">
                <div className="option-icon">
                  <FaCode />
                </div>
                <h3>Libraries</h3>
                <p>Redux, TanStack, Framer Motion</p>
                <Link to="/libraries" className="option-link">
                  Explore <FaArrowRight />
                </Link>
              </div>
              <div className="begin-option">
                <div className="option-icon">
                  <FaServer />
                </div>
                <h3>APIs</h3>
                <p>Weather API, Map API, and Spotify API</p>
                <Link to="/apis" className="option-link">
                  Explore <FaArrowRight />
                </Link>
              </div>
              <div className="begin-option">
                <div className="option-icon">
                  <FaCubes />
                </div>
                <h3>Frameworks</h3>
                <p>Next.js, Remix, Native</p>
                <Link to="/frameworks" className="option-link">
                  Explore <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Results or Popular Sections */}
      <div className="container">
        {searchTerm ? (
          // Show search results
          <>
            {filteredLibraries.length > 0 && (
              <section className="category-section">
                <div className="section-header">
                  <h2>Library Results ({filteredLibraries.length})</h2>
                </div>
                <div className="grid">
                  {filteredLibraries.map((library) => (
                    <Card key={library.id} item={library} type="library" />
                  ))}
                </div>
              </section>
            )}

            {filteredApis.length > 0 && (
              <section className="category-section">
                <div className="section-header">
                  <h2>API Results ({filteredApis.length})</h2>
                </div>
                <div className="grid">
                  {filteredApis.map((api) => (
                    <Card key={api.id} item={api} type="api" />
                  ))}
                </div>
              </section>
            )}

            {filteredFrameworks.length > 0 && (
              <section className="category-section">
                <div className="section-header">
                  <h2>Framework Results ({filteredFrameworks.length})</h2>
                </div>
                <div className="grid">
                  {filteredFrameworks.map((framework) => (
                    <Card key={framework.id} item={framework} type="framework" />
                  ))}
                </div>
              </section>
            )}

            {filteredLibraries.length === 0 &&
            filteredApis.length === 0 &&
            filteredFrameworks.length === 0 && (
              <div className="no-results">
                <h3>No results found for "{searchTerm}"</h3>
                <p>Try searching for something else or browse our categories</p>
                <button onClick={clearSearch} className="clear-search-btn">
                  Clear Search
                </button>
              </div>
            )}
          </>
        ) : (
          // Show popular sections
          <>
            <section className="category-section">
              <div className="section-header">
                <h2>Popular Libraries</h2>
                <Link to="/libraries" className="view-all">
                  View All <FaArrowRight />
                </Link>
              </div>
              <div className="grid">
                {popularLibraries.map((library) => (
                  <Card key={library.id} item={library} type="library" />
                ))}
              </div>
            </section>

            <section className="category-section">
              <div className="section-header">
                <h2>Popular APIs</h2>
                <Link to="/apis" className="view-all">
                  View All <FaArrowRight />
                </Link>
              </div>
              <div className="grid">
                {popularApis.map((api) => (
                  <Card key={api.id} item={api} type="api" />
                ))}
              </div>
            </section>

            <section className="category-section">
              <div className="section-header">
                <h2>Popular Frameworks</h2>
                <Link to="/frameworks" className="view-all">
                  View All <FaArrowRight />
                </Link>
              </div>
              <div className="grid">
                {popularFrameworks.map((framework) => (
                  <Card key={framework.id} item={framework} type="framework" />
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      
      
    </div>
  );
}
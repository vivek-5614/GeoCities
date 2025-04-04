/* eslint-disable */

import React, { useState } from 'react';
import '../styles/Searchbox.css';

function SearchBox({ query, setQuery, onSearch, inputRef }) {
  const [focused, setFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className={`search-container ${focused ? 'focused' : ''}`}>
      <input
        type="text"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search places..."
        className="search-input"
      />
      <span className="shortcut">Ctrl + /</span>
    </div>
  );
}

export default SearchBox;

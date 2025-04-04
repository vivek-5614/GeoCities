/* eslint-disable */
import React, { useState } from 'react';
import '../styles/LimitSelector.css';

function LimitSelector({ limit, onLimitChange }) {
  const [localLimit, setLocalLimit] = useState(limit);

  const handleBlur = () => {
    const value = parseInt(localLimit, 10);
    if (value > 10) {
      alert('Max limit is 10');
      onLimitChange(10);
      setLocalLimit(10);
    } else if (value < 1 || isNaN(value)) {
      alert('Min limit is 1');
      onLimitChange(5); // reset to default
      setLocalLimit(5);
    } else {
      onLimitChange(value);
    }
  };

  return (
    <div className="limit-selector">
      <label htmlFor="limit-input">API Limit:</label>
      <input
        type="number"
        id="limit-input"
        min="1"
        max="10"
        value={localLimit}
        onChange={(e) => setLocalLimit(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default LimitSelector;

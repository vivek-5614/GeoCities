/* eslint-disable */
import React, { useState } from 'react';
import '../styles/LimitSelector.css';

function ItemsPerPageSelector({ value, onChange }) {
  const [local, setLocal] = useState(value);

  const handleBlur = () => {
    const intVal = parseInt(local);
    if (intVal < 1 || isNaN(intVal)) {
      alert('Minimum per-page value is 1');
      setLocal(3);
      onChange(3);
    } else {
      onChange(intVal);
    }
  };

  return (
    <div className="limit-selector">
      <label htmlFor="perPageInput">Items/Page:</label>
      <input
        type="number"
        id="perPageInput"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        onBlur={handleBlur}
        min="1"
      />
    </div>
  );
}

export default ItemsPerPageSelector;

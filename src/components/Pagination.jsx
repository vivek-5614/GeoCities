/* eslint-disable */
import React from 'react';
import '../styles/Pagination.css';

function Pagination({ totalItems, currentPage, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;

  const pageNumbers = [];

  const maxButtons = 10;
  const displayPages = totalPages <= maxButtons ? totalPages : maxButtons;

  for (let i = 1; i <= displayPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((num) => (
        <button
          key={num}
          className={`page-btn ${num === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;

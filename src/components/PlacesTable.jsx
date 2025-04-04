/* eslint-disable */

import React from 'react';
import '../styles/PlacesTable.css';

function PlacesTable({ places, query, itemsPerPage }) {
  if (!query.trim()) {
    return <div className="table-message">Start searching</div>;
  }

  if (places.length === 0) {
    return <div className="table-message">No result found</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="places-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {places.slice(0, itemsPerPage).map((place, index) => (
            <tr key={place.id}>
              <td>{index + 1}</td>
              <td>{place.name}</td>
              <td className="country-cell">
                <img
                  src={`https://flagsapi.com/${place.countryCode}/shiny/64.png`}
                  alt={place.country}
                  className="flag"
                />
                <span>{place.country}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlacesTable;

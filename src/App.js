/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import SearchBox from './components/SearchBox';
import PlacesTable from './components/PlacesTable';
import Pagination from './components/Pagination';
import LimitSelector from './components/LimitSelector';
import ItemsPerPageSelector from './components/ItemsPerPageSelector';
import Spinner from './components/Spinner';
import { fetchCities } from './utils/api';
import './styles/App.css';

function App() {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiLimit, setApiLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await fetchCities({
        query,
        limit: apiLimit,
        offset: 0,
      });
      setPlaces(data.data);
      setCurrentPage(1); // reset pagination
    } catch (err) {
      console.error(err);
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(places.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    const shortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', shortcut);
    return () => window.removeEventListener('keydown', shortcut);
  }, []);

  const handleLimitChange = async (val) => {
    const intVal = parseInt(val, 10);
    if (intVal > 10) {
      alert('Max limit is 10');
      return;
    }
  
    setApiLimit(intVal);
    setLoading(true);
    try {
      const data = await fetchCities({
        query,
        limit: intVal,       
        offset: 0,
      });
      setPlaces(data.data);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };
  

  const currentPageData = places.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="app-container">
      <span style={{ fontSize: '50px' , fontWeight: '700', marginBottom: '30px'}}>Geo Cities</span>
      <SearchBox query={query} setQuery={setQuery} onSearch={handleSearch} inputRef={inputRef} />
      {loading && <Spinner />}
      <PlacesTable places={currentPageData} query={query} currentPage={currentPage} />
      {places.length > 0 && (
        <div className="pagination-section">
            <Pagination
              totalItems={places.length}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={(pageNum) => setCurrentPage(pageNum)}
            />
            <div style={{ display: 'flex',marginTop: '20px',gap: '6px'}}>
              <LimitSelector limit={apiLimit} onLimitChange={handleLimitChange} />
              <ItemsPerPageSelector value={itemsPerPage} onChange={setItemsPerPage} />
            </div>
        </div>
      )}
    </div>
  );
}

export default App;

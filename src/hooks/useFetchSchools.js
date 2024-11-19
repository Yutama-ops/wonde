import { useState, useEffect } from 'react';

// used this once to identify Wonde Testing School ID
const useFetchSchools = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.wonde.com/v1.0/schools', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_WONDE_API_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  return { data, error };
};

// Fetch teacher data from Wonde API
const useFetchTeacher = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const includes = [
      "contact_details",
      "employment_details",
      "roles",
      "classes"
    ];

    const queryString = includes.join(',');

    const fetchData = (page) => {
      fetch(`https://api.wonde.com/v1.0/schools/A1930499544/employees?include=${queryString}&page=${page}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_WONDE_API_TOKEN}`
        }
      })
        .then(response => response.json())
        .then(responseData => {
          setData(responseData.data);
          setMeta(responseData.meta);
        })
        .catch(error => setError(error));
    };

    fetchData(currentPage);
  }, [currentPage]);

  const goToNextPage = () => {
    if (meta?.pagination?.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (meta?.pagination?.previous) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { data, meta, error, currentPage, goToNextPage, goToPreviousPage };
};




export { useFetchSchools, useFetchTeacher };
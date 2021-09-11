import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import { useHomeFetch } from '../hooks/useHomeFetch';

const Home = () => {
  const { state, loading, error,searchTerm, setSearchTerm,setIsLoadingMore } = useHomeFetch();
  const results = state.hits;
  return(
      <>
      <SearchBar setSearchterm={setSearchTerm}/>
      <ul>
        {results && results.map(news => (
          <li key ={news.objectID}>
            {news.title}
          </li>
        ))
        }
      </ul>
      
      </>
  )
};

export default Home;

import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Grid from './Grid';
import Thumb from './Thumb';

const Home = () => {
  const { state, loading, error,searchTerm, setSearchTerm,setIsLoadingMore } = useHomeFetch();
  return(
      <>
      <SearchBar setSearchterm={setSearchTerm}/>
      {console.log(state.hits)}
      <Grid header = {searchTerm ? 'Search Result' : 'Top News'}>
        {state.hits && state.hits.map(news => (
          <Thumb
           key ={news.objectID}
           text ={news.title}
           clickable={true}
           newsID = {news.objectID}
           />       
        ))}
      </Grid>
  
      </>
  )
};

export default Home;

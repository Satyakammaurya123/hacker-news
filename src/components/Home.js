import React from 'react';

import SearchBar from './SearchBar';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import Button from './Button';
import BreadCrumb from './BreadCrumb';

const Home = () => {
  const {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore
  } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return(
      <>
      <BreadCrumb />
      <SearchBar setSearchTerm = { setSearchTerm }/>
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
      {loading && <Spinner/>}
      {state.page < state.nbPages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
      </>
  )
};

export default Home;

import { useEffect,useState } from 'react';
import axios from 'axios';

const SEARCH_BASE_URL='http://hn.algolia.com/api/v1/search?query='
const apiSettings = {
  fetchNews: async(searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      return await (await fetch(endpoint)).json();
  }
}

export default apiSettings;
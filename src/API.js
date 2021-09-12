
const SEARCH_BASE_URL='https://hn.algolia.com/api/v1/search?query='
const API_URL='https://hn.algolia.com/api/v1/'
const apiSettings = {
  fetchNews: async(searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}&hitsPerPage=50`
      : `${SEARCH_BASE_URL}${searchTerm}&page=${page}&hitsPerPage=50`
      return await (await fetch(endpoint)).json();
  },
  fetchNew: async objectID => {
    const endpoint = `${API_URL}items/${objectID}`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;

const SEARCH_BASE_URL='https://hn.algolia.com/api/v1/search?query='
const API_URL='https://hn.algolia.com/api/v1/'
// const SEARCH_NEW_URL='https://hn.algolia.com/api/v1/search_by_date?query='
const apiSettings = {
  fetchNews: async(searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}&hitsPerPage=50`
      : `${SEARCH_BASE_URL}&page=${page}&hitsPerPage=50`
      return await (await fetch(endpoint)).json();
  },
  fetchNew: async objectID => {
    const endpoint = `${API_URL}items/${objectID}`;
    return await (await fetch(endpoint)).json();
  },
  // fetchNewNews: async(searchTerm, page) => {
  //   const endpoint = searchTerm
  //     ? `${SEARCH_NEW_URL}${searchTerm}&page=${page}&hitsPerPage=50`
  //     : `${SEARCH_NEW_URL}&page=${page}&hitsPerPage=50`
  //     return await (await fetch(endpoint)).json();
  // }
};

export default apiSettings;
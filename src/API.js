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




// const NewsList = () =>{
//     const [state, setState] = useState([]);


//   useEffect(() => {
//     axios.get(`http://hn.algolia.com/api/v1/search?query=`)
//       .then(res => {
//         const results = res.data;
//         // console.log(results);
//         setState(results.hits);
//       })
//   },[]);
//    console.log(state);
//    return (
//       <ul>
//         {state && state.map(s => { return <li key ={s.objectID}>{s.title}</li> })}
//       </ul>
//     )
// };

export default apiSettings;
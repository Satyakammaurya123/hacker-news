import React, { useEffect,useState } from 'react';
import axios from 'axios';

const NewsList = () =>{
    const [state, setState] = useState([]);


  useEffect(() => {
    axios.get(`http://hn.algolia.com/api/v1/search?query=`)
      .then(res => {
        const results = res.data;
        // console.log(results);
        setState(results.hits);
      })
  },[]);
   console.log(state);
   return (
      <ul>
        {state && state.map(s => { return <li key ={s.objectID}>{s.title}</li> })}
      </ul>
    )
};

export default NewsList;
import React, { useEffect,useState } from 'react';
import API from '../API';
const initialState = {
    hits: [],
    nbHits:0,
    page:0,
    nbPages: 0,
    hitsPerPage: 0,
    exhaustiveNbHits: true,
    query:"",
    params: '',
    processingTimeMS: 0
  };

export const useHomeFetch = () =>{
    const [searchTerm,setSearchTerm]= useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    const fetchNews = async (page, searchTerm = '') =>
    {
        try
        {
            setError(false);
            setLoading(true);
            const news = await API.fetchNews(searchTerm,page);
            setState(prev => ({
                ...news,
                hits:
                page > 0 ? [...prev.hits, ...news.hits] : [...news.hits]
            }))
        }
        catch(error)
        {
            setError(true);
        }
        setLoading(false);
    }

    //Initialisation & Search
    useEffect(() => {
        setState ([]);
        fetchNews(0,searchTerm);
    },[searchTerm]);

  useEffect(()=> {
    if(!isLoadingMore) return;
    
    fetchNews(state.page+1,searchTerm);
    setIsLoadingMore(false);
    
    },[isLoadingMore,searchTerm,state.page])

return {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore};
};


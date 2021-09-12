import { useState,useEffect } from "react";
import API from '../API';

export const useNewsFetch = objectID => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchNew = async () => {
            try{
                setLoading(true);
                setError(false);

                const news = await API.fetchNew(objectID);
                // console.log(news);
                setState(news);
                setLoading(false);
            }
            catch(error)
            {
                setError(true);
            }
        };

        fetchNew();
    },[objectID]);

    return { state, loading, error };
};
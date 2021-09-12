import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
import {useNewsFetch} from '../hooks/useNewsFetch';

const News = () => {
    const { objectID } = useParams();

    const {state: news, loading, error } = useNewsFetch(objectID);
    
    if (loading) return <Spinner/>;
    if (error) return <div>Something Went Wrong...</div>;
    console.log(news);
    
    return(
        <>
            Will Add News Here!!
        </>
    )
}
export default News;
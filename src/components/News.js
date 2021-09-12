import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
// import {useNewsFetch} from '../hook/useNewsFetch';

const News = () => {
    const { objectID } = useParams();
    //const {state: news, loading, error } = useMovieFetch(movieId);
    // if (loading) return <Spinner/>;
    // if (error) return <div>Something Went Wrong...</div>;

    return(
        <>
            Will Add News Here!!
        </>
    )
}
export default News;
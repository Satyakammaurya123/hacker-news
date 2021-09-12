import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
import {useNewsFetch} from '../hooks/useNewsFetch';

const News = () => {
    const { objectID } = useParams();

    const {state :news, loading, error } = useNewsFetch(objectID);
    
    if (loading) return <Spinner/>;
    if (error) return <div>Something Went Wrong...</div>;
    //console.log(state);
    
    const childrenText = news.children.flatMap(childrens => childrens.text 
        ? <li>{childrens.text.replace(/<[^>]*>?/gm, '')}</li>
        : []
        // <li>{childrens.text && childrens.text.replace(/<[^>]*>?/gm, '')}</li>
    );
    return(
        <>
        <h3>{news.title}</h3>
        <div>{news.points}</div>
        <ol>{childrenText}</ol>
        </>
    )
}
export default News;
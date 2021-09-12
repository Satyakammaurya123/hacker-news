import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
import {useNewsFetch} from '../hooks/useNewsFetch';
// import BreadCrumb from "./BreadCrumb";

const News = () => {
    const { objectID } = useParams();

    const {state :news, loading, error } = useNewsFetch(objectID);
    
    if (loading) return <Spinner/>;
    if (error) return <div>Something Went Wrong...</div>;
    //console.log(state);
    
    const childrenText = news.children.flatMap(childrens => childrens.text 
        ? <li key = {childrens.id}>{childrens.text.replace(/<[^>]*>?/gm, '')}</li>
        : []
        // <li>{childrens.text && childrens.text.replace(/<[^>]*>?/gm, '')}</li>
    );
    return(
        <>
        {/* <BreadCrumb/> */}
        <h3>{news.title}</h3>
        <div>Points: {news.points}</div>
        <h3>Comments: </h3>
        <ol>{childrenText}</ol>
        </>
    )
}
export default News;
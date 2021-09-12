import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";
import {useNewsFetch} from '../hooks/useNewsFetch';
// import BreadCrumb from "./BreadCrumb";
import { Wrapper } from "./News.styles";

const News = () => {
    const { objectID } = useParams();

    const {state :news, loading, error } = useNewsFetch(objectID);
    
    if (loading) return <Spinner/>;
    if (error) return <div>Something Went Wrong...</div>;
    //console.log(state);
    
    const childrenText = news.children.flatMap(childrens => childrens.text 
        ?<Wrapper>
            <li key = {childrens.id}>{childrens.text.replace(/<[^>]*>?/gm, '')}</li>
            <hr/>
        </Wrapper> 
        : []
        // <li>{childrens.text && childrens.text.replace(/<[^>]*>?/gm, '')}</li>
    );
    return(
        <>
        {/* <BreadCrumb/> */}
        <Wrapper>
            <h3>{news.title}</h3>
            <div><b>Points:</b> {news.points}</div>
            <h3>Comments: </h3>
            <ol>{childrenText}</ol>
        </Wrapper>
        </>
    )
}
export default News;
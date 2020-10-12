import React,{ createContext, useState } from 'react';

import GetAllPost from '../hooks/getAllPosts';

const initialState = { allPosts : [] , setAllPosts : (x)=>{ "nothing" } };
export const AllPostContext = createContext(initialState);

const AllPostProvider = ( props ) => {

    const data = GetAllPost();
    //console.log("context : ", data.allGraphCmsDevBlog.nodes );
    const [allPosts, setAllPosts] = useState(data.allGraphCmsDevBlog.nodes);
    //console.log("context allpost :", allPosts);

    return <AllPostContext.Provider value={ {allPosts, setAllPosts} }>
        { props.children }
    </AllPostContext.Provider>

};


export default AllPostProvider;
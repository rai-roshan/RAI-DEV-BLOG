import React,{ createContext, useState } from 'react';

import GetAllPost from '../hooks/getAllPost';

export const AllPostContext = createContext();

const AllPostProvider = ( props ) => {

    const data = GetAllPost();
    console.log("context : ", data.allMdx.nodes );
    const [allPosts, setAllPosts] = useState(data.allMdx.nodes);
    console.log("context allpost :", allPosts);

    return <AllPostContext.Provider value={ {allPosts, setAllPosts} }>
        { props.children }
    </AllPostContext.Provider>

};


export default AllPostProvider;
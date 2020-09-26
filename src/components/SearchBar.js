import React, { useContext, useState } from 'react';
import { AllPostContext } from '../contexts/AllPostContext';

import GetAllPost from '../hooks/getAllPost';

const SearchBar = ( ) => {

    const { allPosts, setAllPosts } = useContext(AllPostContext);
    const [query, setQuery] = useState('');
    const [searchResult, setResult] = useState([]);

    const handleInputChange = (event) => {
        const queryX = event.target.value;
        const allPostsX = allPosts;

        const filterData = allPostsX.filter( post => {
            const description = post.excerpt;
            const { title, tags } = post.frontmatter;

            return (
                description.toLowerCase().includes(queryX.toLowerCase()) ||        
                title.toLowerCase().includes(queryX.toLowerCase()) ||       
                (tags && tags.join("").toLowerCase().includes(queryX.toLowerCase()))
              );
        });

        setQuery(queryX);
        setResult(filterData);
    };

    if(query === ''){
        setAllPosts(GetAllPost().allMdx.nodes);
    }
    else{
        setAllPosts(searchResult);
    }

    return <div className="form-inline mr-auto">
    <input 
    className="form-control" 
    type="search" 
    placeholder="Search" 
    aria-label="Search" 
    onChange={ handleInputChange }/>
    </div>
};

export default SearchBar;
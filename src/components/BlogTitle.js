import React from 'react';

const heading = {
    fontSize: "4rem",
    fontWeight : "bolder",
};

const BlogTitle = ( {title, date } ) =>{

    return <div className="my-4 mx-5">
        <h1 style={ heading }>{ title }</h1>
        <p className="text-secondary">{ date }</p>
    </div>
};

export default BlogTitle;
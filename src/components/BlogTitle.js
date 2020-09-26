import React from 'react';

const heading = {
    fontSize: "4rem",
    fontWeight : "bolder",
};

const tagColor = ["secondary" , "success" , "danger" , "warning" , "info" , "dark" , "primary" , "outline-primary" , "outline-secondary" , "outline-success" , "outline-danger" , "outline-warning"];

const BlogTitle = ( {title, date, tags } ) =>{

    return <div className="my-4 mx-5">
        <h1 style={ heading }>{ title }</h1>
        <div className="d-flex flex-overflow align-items-center">
        <p className="text-secondary m-0">{ date }</p>
        <div>
            { tags.map( (tag, index) => {
                return <button 
                type="button" 
                className={`btn btn-${tagColor[index]} btn-sm ml-2`}>#{ tag }</button>
            })}
        </div>
        </div>
    </div>
};

export default BlogTitle;
import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

const BlackBg = {
    backgroundColor : "black",
    color : "white",
    width:"59px"
};

const bgColor = {
    backgroundColor : "#d1d8de",
};

const Footer=()=>{
    const { description , author, title } = useSiteMetadata();

    return(
        <div className="d-flex flex-column justify-content-center align-items-center py-3" style={ bgColor }>
        
            <small className="text-muted">{ title }</small>    
            <small className="text-muted">{ author }</small>
            <small className="text-muted">{ description }</small>
            <small className="text-muted">"all rights reserved 2020"</small>
        </div>
        )
    }

export default Footer;
//d1d8de;
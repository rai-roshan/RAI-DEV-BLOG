import { Link } from 'gatsby';
import React from 'react';

const BlackBg = {
    backgroundColor : "black",
    color : "white",
    
};

const Header = ({ siteTitle, siteDescription }) => {
    
    return <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
            <Link 
            className="card p-2" 
            to='/'
            style={ BlackBg }>
                <h3>{ siteTitle }</h3>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <span class="ml-auto navbar-text">
                { siteDescription }
            </span>
            </div>
    </div>
  </nav>
};

export default Header;
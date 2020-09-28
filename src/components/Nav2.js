import React from 'react';
import { Link } from 'gatsby';


const BlackBg = {
    backgroundColor : "black",
    color : "white",
};

const Nav2 = () => {

    return <nav className="navbar navbar-expand-lg navbar-light bg-transparent mb-3 fixed-top">
    <div className="container">
        
        <div className="d-flex w-100 align-items-center">
            <Link 
            className="card p-2  mr-sm-2 mr-md-4" 
            to='/'
            style={ BlackBg }>
                <span className="font-weight-bold h4 mb-0">{ "RAI" }</span>
            </Link>

            <span class="navbar-text">
                Share with the world what you know
            </span>
        </div>
    </div>
</nav>
};

export default Nav2;
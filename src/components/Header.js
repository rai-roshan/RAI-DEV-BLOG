import { Link } from 'gatsby';
import React from 'react';

import avatar from '../images/avatar.png';

const BlackBg = {
    backgroundColor : "black",
    color : "white",
};

const ImgHeight = {
    height: "3rem"
};

const Header = ({ siteTitle, siteDescription }) => {
    
    return <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container-xl">
            
            <div className="d-flex w-100 align-items-center">
                <Link 
                className="card p-2 mr-auto" 
                to='/'
                style={ BlackBg }>
                    <span className="font-weight-bold h4 mb-0">{ siteTitle }</span>
                </Link>

                <form class="form-inline">
                <input 
                class="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" />
                </form>

                <button className="btn btn-primary font-weight-bold mr-4">Contact</button>
                <Link to="#" >
                    <img 
                    src={ avatar } 
                    alt="rairoshan"
                    className="rounded-circle" 
                    style={ ImgHeight } />
                </Link>
            </div>
        </div>
  </nav>
};

export default Header;
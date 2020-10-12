import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';
import Footer from './footer';

const mt5rem = {
    marginTop : "5rem"
};

const Layout=( { children }) => {
    const { title, description } = useSiteMetadata();

    return <div>
            <Header 
            siteTitle={ title }
            siteDescription={ description } />
            <div 
            style={ mt5rem }
            className="container-xl">
                { children }
            </div>
            <Footer/>
            </div>
    };

export default Layout;
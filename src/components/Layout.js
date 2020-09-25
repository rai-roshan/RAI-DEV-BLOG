import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';


const Layout=( { children }) => {
    const { title, description } = useSiteMetadata();

    return <div>
            <Header 
            siteTitle={ title }
            siteDescription={ description } />
            <div 
            className="container-xl">
                { children }
            </div>
            </div>
    };

export default Layout;
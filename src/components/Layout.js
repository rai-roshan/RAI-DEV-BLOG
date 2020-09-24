import React from 'react';
import styled from 'styled-components';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';


const Layout=( { children }) => {
    const { title, description } = useSiteMetadata();

    return <div>
            <Header 
            siteTitle={ title }
            siteDescription={ description } />
            <div 
            className="container">
                { children }
            </div>
            </div>
    };

export default Layout;
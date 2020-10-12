import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import AllPostProvider from './src/contexts/AllPostContext';
import Code from './src/components/Code';

const components = {
    strong : ( {children} )=>(
    <h2 style={ {color : 'rebeccapurple'} }>{ children }</h2>
    ),
    img : (props)=>(
      <div className="d-flex align-items-center justify-content-between">
          <img className="mx-auto w-100" alt="name"  {...props} />
      </div>
    ),
    'p.inlineCode' : props => (
        <code>{ props.children }</code>
    ),
    Code : ({children}) => {   
        return <div>{ children }</div>
    },
    
};

export const wrapRootElement = ( {element} )=>(
    <AllPostProvider>
    <MDXProvider components={ components }>
        { element }
    </MDXProvider>
    </AllPostProvider>
);

/*
'
*/
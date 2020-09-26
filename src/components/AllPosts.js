import React from 'react';
//import { graphql } from 'gatsby';

import Dump from './Dump';
import PostCard from './PostCard';
import PreviewCard from './PreviewCard';

//
const AllPost = ({ allPosts }) => {
    console.log("data : ", allPosts);
    return (<div className="col-lg-6 col-md-8 col-sm-12">
          {allPosts.map(({ id, fields, excerpt, frontmatter }, index) => {
  
            return index === 0 ? <PreviewCard 
                  preview={ frontmatter.cover.childImageSharp.sizes }
                  key={id}
                  slug={ fields.slug }
                  title={ frontmatter.title }
                  date={ frontmatter.date }
                  sortCont={ excerpt }
                  time={ fields.readingTime.text }
                  tags={ frontmatter.tags } /> :
                  <PostCard 
                    key={id}
                    slug={ fields.slug }
                    title={ frontmatter.title }
                    date={ frontmatter.date }
                    sortCont={ excerpt }
                    time={ fields.readingTime.text }
                    tags={ frontmatter.tags } />
          })}
            
          {
          //<Dump data={ data }/>
          }
        </div>
    );
  
  };
  
export default AllPost;

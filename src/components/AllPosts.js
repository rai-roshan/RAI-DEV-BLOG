import React from 'react';
import FadeIn from 'react-fade-in';
//import { graphql } from 'gatsby';

import Dump from './Dump';
import PostCard from './PostCard';
import PreviewCard from './PreviewCard';

//
const AllPost = ({ allPosts }) => {
    console.log("data : ", allPosts);
    return (<div className="col-lg-6 col-md-8 col-sm-12">
          <FadeIn>
          
          {allPosts.map(({ id, fields, excerpt, frontmatter , featuredImg }, index) => {
  
            return index === 0 ? <PreviewCard 
                  preview={ featuredImg ? featuredImg.childImageSharp.sizes : null }
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
        </FadeIn>
        </div>
    );
  
  };
  
export default AllPost;

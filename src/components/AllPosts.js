import React from 'react';
import FadeIn from 'react-fade-in';
//import { graphql } from 'gatsby';

import Dump from './Dump';
import PostCard from './PostCard';
import PreviewCard from './PreviewCard';

//
const AllPost = ({ allPosts }) => {
    //console.log("data : ", allPosts);
    return (<div className="col-lg-6 col-md-8 col-sm-12">
          <FadeIn>
          
          {allPosts.map(({ id, remoteId, title, tags, date, author, contentMdx, coverPhoto }, index) => {
  
            return index === 0 ? <PreviewCard 
                  preview={ coverPhoto ? coverPhoto.localFile ? coverPhoto.localFile.childImageSharp.fluid : null : null }
                  key={id}
                  slug={ remoteId }
                  title={ title }
                  date={ date }
                  sortCont={ contentMdx.markdownNode.childMdx.excerpt }
                  time={ `${contentMdx.markdownNode.childMdx.wordCount.words} words` }
                  tags={ tags } /> :
                  <PostCard 
                  key={id}
                  slug={ remoteId }
                  title={ title }
                  date={ date }
                  sortCont={ contentMdx.markdownNode.childMdx.excerpt }
                  time={ `${contentMdx.markdownNode.childMdx.wordCount.words} words` }
                  tags={ tags } />
          }) }
            
          {
          //<Dump data={ allPosts }/>
          }
        </FadeIn>
        </div>
    );
  
  };
  
export default AllPost;
//contentMdx.markdownNode.childMdx.excerpt
//contentMdx.markdownNode.childMdx.excerpt
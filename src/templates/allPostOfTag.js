import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AllPost from '../components/AllPosts';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
//import Dump from '../components/Dump';

const AllPostOfTag = ({data}) => {

    return <Layout>
      <div className="row">
      <LeftPanel/>
      <AllPost allPosts={data.allGraphCmsDevBlog.nodes} /> 
      <RightPanel/>
      </div>
      </Layout>
};

export default AllPostOfTag;

export const myTagQuery = graphql`
query AllPostOfTagQuery($tag : String!) {
allGraphCmsDevBlog(filter: {tags: {glob: $tag}}) {
    nodes {
      author
      id
      remoteId
      title
      tags
      date
      contentMdx {
        markdownNode {
          childMdx {
            excerpt(pruneLength: 200)
            timeToRead
            wordCount {
              paragraphs
              sentences
              words
            }
          }
        }
      }
      coverPhoto {
        localFile {
          childImageSharp {
            fluid(maxWidth: 3000, maxHeight: 1400){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }}`;
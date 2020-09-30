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
      <AllPost allPosts={data.allMdx.nodes} /> 
      <RightPanel/>
      </div>
      </Layout>
};

export const AllPostOfTagQuery = graphql`
query AllPostOfTagQuery($tag : String!) {
    allMdx(filter: {frontmatter: {tags: {eq: $tag }}}) {
     nodes {
          excerpt(pruneLength: 250)   
          id
          frontmatter {
              date(formatString: "DD MMMM YYYY")
              published
              title
              tags
              cover {
                publicURL
                childImageSharp {
                    sizes(maxWidth: 3000, maxHeight: 1400) {
                    ...GatsbyImageSharpSizes
                    }
                }}
          }
          fields {
              slug
              readingTime {
              text
              }
          }
          } 
    }
  }
`; 

export default AllPostOfTag;

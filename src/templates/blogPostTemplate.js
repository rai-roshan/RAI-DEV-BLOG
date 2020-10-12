import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import BlogTitle from '../components/BlogTitle';
import RightPanel from '../components/RightPanel';
import Dump from '../components/Dump';

const Article = {
  maxWidth : "50rem",
  backgroundColor : "white",
  borderRadius : "5px"
};

const MainCont = {
  margin : "0 3rem"
}

const wid50rem = {
  width: "50rem"
};

const ImgHead = {
  width : "100%", 
  borderTopLeftRadius : "5px",
  borderTopRightRadius : "5px",
  margin : "0 auto",
}


const BlogPost = ({data}) => {
    const { id, title, date, tags, coverPhoto, contentMdx } = data.allGraphCmsDevBlog.nodes[0];
    //console.log("===========tags : ", tags);
    return (
    <Layout>
      <div className="row">
          
          <div style={ Article } className="col-lg-9 col-md-12 col-sm-12 mx-auto px-0">
            
            { coverPhoto ? <Img
            style={ ImgHead }
            fluid={coverPhoto.localFile.childImageSharp.fluid}/> : null }

            <BlogTitle
            title={ title }
            date={ date } 
            tags={ tags }/>

            <div style={ MainCont }>
            <MDXRenderer>{ contentMdx.markdownNode.childMdx.body }</MDXRenderer> 
            </div>

          </div>
          <RightPanel/>
      </div>
    </Layout>
  );
};

export const PostQuery = graphql`
    query PostQuery($slug: ID!) {
        allGraphCmsDevBlog(filter: {remoteId: {eq: $slug}}) {
          nodes {
            id
            title
            date
            tags
            coverPhoto {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 3000, maxHeight: 1400){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            contentMdx {
                markdownNode {
                  childMdx {
                    body
                  }
                }
              }
          }
        }
      }
      `;

export default BlogPost;
//maxHeight: 1400

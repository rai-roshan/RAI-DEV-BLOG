import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import BlogTitle from '../components/BlogTitle';
import RightPanel from '../components/RightPanel';

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
    const { frontmatter , body } = data.mdx;
    console.log("===========tags : ", frontmatter.tags);
    return (
    <Layout>
      <div className="row w-100">
          
          <div style={ Article } className="col-lg-9 col-md-12 mx-auto px-0">
            
            <Img
            style={ ImgHead }
            sizes={frontmatter.cover.childImageSharp.sizes}/>

            <BlogTitle
            title={ frontmatter.title }
            date={ frontmatter.date } 
            tags={ frontmatter.tags }/>

            <div style={ MainCont }>
            <MDXRenderer>{ body }</MDXRenderer>
            </div>

          </div>
          <RightPanel/>
      </div>
    </Layout>
  );
};

export const PostQuery = graphql`
     query PostQuery($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            frontmatter {
                date(formatString: "DD MMMM YYYY")
                title
                tags
                published
                cover {
                  publicURL
                  childImageSharp {
                    sizes(maxWidth: 3000, maxHeight: 1400) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
        body
    }}`;

export default BlogPost;


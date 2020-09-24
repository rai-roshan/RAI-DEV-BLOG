import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import BlogTitle from '../components/BlogTitle';

const Article = {
  maxWidth : "54rem",
  margin : "0 auto",
  backgroundColor : "white",
  borderRadius : "5px"
};

const MainCont = {
  margin : "0 3rem"
}

const ImgHead = {
  maxWidth : "54rem", 
  borderTopLeftRadius : "5px",
  borderTopRightRadius : "5px",
  margin : "0 auto",
}


const BlogPost = ({data}) => {
    const { frontmatter , body } = data.mdx;

    return (
    <Layout>

      <div style={ Article }>
        
        <Img
        style={ ImgHead }
        sizes={frontmatter.cover.childImageSharp.sizes}/>

        <BlogTitle
        title={ frontmatter.title }
        date={ frontmatter.date } />

        <div style={ MainCont }>
        <MDXRenderer>{ body }</MDXRenderer>
        </div>

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


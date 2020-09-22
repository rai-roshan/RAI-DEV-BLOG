import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';


const BlogPost = ({data}) => {
    const { frontmatter , body } = data.mdx;

    return (
    <Layout>
      <h1>{ frontmatter.title }</h1>
      <p>{ frontmatter.date }</p>
      <MDXRenderer>{ body }</MDXRenderer>
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
              }
        body
    }}`;

export default BlogPost;


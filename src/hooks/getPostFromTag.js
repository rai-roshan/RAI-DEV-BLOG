import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const GetPostFromTag = (tag) => {

   /* const { data } = useStaticQuery(
    graphql`
    query MyQuery {
        allMdx(filter: {frontmatter: {tags: {eq: ${tag} }}}) {
          nodes {
            frontmatter {
              title
            }
          }
        }
      }`);*/
};

export default GetPostFromTag;
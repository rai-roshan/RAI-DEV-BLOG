import React from "react";
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Dump from '../components/Dump';

const PostWrapper = styled.div``;

const App = ({data}) => {

  return (
    <>
      <Layout>
        <Dump data={ data }/>
        {data.allMdx.nodes.map(({ id, fields, excerpt, frontmatter }) => (
          <PostWrapper>
          <Link to={ fields.slug }>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </Link>
          </PostWrapper>
        ))}
      </Layout>
    </>
  );

};

export default App;

//excerpt //show a litle bit of content
export const query = graphql`
    query SITE_INDEX_QUERY {
      allMdx(
        filter: {frontmatter: {published: {eq: true}}}, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          excerpt(pruneLength: 250)   
          id
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            published
            title
          }
          fields {
            slug
          }
        }
      }
    }
`;

import React from "react";
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Dump from '../components/Dump';

const MaxWidth = {
  maxWidth: "40rem"
};

const App = ({data}) => {

  return (
    <>
      <Layout>
        {data.allMdx.nodes.map(({ id, fields, excerpt, frontmatter }) => (
          <Link to={ fields.slug } 
          style={ MaxWidth }
          className="card mb-2 p-3 mx-auto">
            <div className="d-flex flex-column ">
            <div className="flex-grow-1">
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
            </div>
            <p className="flex-grow-2">{excerpt}</p>
            </div>
          </Link>
        ))}
         <Dump data={ data }/>
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

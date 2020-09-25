import React from "react";
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AllPost from '../components/AllPosts';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPalnel';

const App = ({ data }) => {

  return <Layout>
      <div className="row">
      <LeftPanel/>
      <AllPost data={data} />
      <RightPanel/>
      </div>
      </Layout>
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
            tags
            cover {
            publicURL
            childImageSharp {
                sizes(maxWidth: 3000, maxHeight: 1400) {
                ...GatsbyImageSharpSizes
                }
            }
            }
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

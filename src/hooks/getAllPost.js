import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


//excerpt //show a litle bit of content
const GetAllPost = () => {
    const data = useStaticQuery(
        graphql`
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
`);

    return data;
} 

export default GetAllPost;
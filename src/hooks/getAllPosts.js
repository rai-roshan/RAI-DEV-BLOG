import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


//excerpt //show a litle bit of content
const GetAllPost = () => {
    const data = useStaticQuery(
        graphql`query AllPosts {
            allGraphCmsDevBlog(sort: {order: ASC, fields: date}) {
              nodes {
                author
                id
                remoteId
                title
                tags
                date
                contentMdx {
                  markdownNode {
                    childMdx {
                      excerpt(pruneLength: 200)
                      wordCount {
                        words
                      }
                    }
                  }
                }
                coverPhoto {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 3000, maxHeight: 1400){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
          
`);

    return data;
} 

export default GetAllPost;
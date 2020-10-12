import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
        query SiteMetaData {
            site {
              siteMetadata {
                description
                title
                author
              }
            }
          }
        `);

        return site.siteMetadata;
};

export default useSiteMetadata;
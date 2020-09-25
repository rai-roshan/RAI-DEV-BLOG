import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
        query MyQuery {
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
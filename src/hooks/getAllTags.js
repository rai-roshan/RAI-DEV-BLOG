import { graphql, useStaticQuery } from 'gatsby';

const GetAllTags = () => {
    const data = useStaticQuery(
        graphql`
        query AllTagsQuery {
            allMdx {
              group(field: frontmatter___tags) {
                fieldValue
                totalCount
              }
            }
          }
        `);

    return data.allMdx.group;
}

export default GetAllTags;
import { graphql, useStaticQuery } from 'gatsby';

const GetAllTags = () => {
    const data = useStaticQuery(
        graphql`
        query AllTagsQuery {
            allGraphCmsDevBlog {
              group(field: tags) {
                fieldValue
                totalCount
              }
            }
          }
        `);

    return data.allGraphCmsDevBlog.group;
}

export default GetAllTags;
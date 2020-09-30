const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    'src/templates/blogPostTemplate.js'
  );
  const allPostOfTag = path.resolve(
    'src/templates/allPostOfTag.js'
  );

  return graphql(`
    {
      allMdx {

        group(field: frontmatter___tags) {
          fieldValue
        }

        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;
    const tags = result.data.allMdx.group;

    // create page for each mdx file
    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      });
    });

    tags.forEach( tag => {
      createPage({
        path : tag.fieldValue,
        component : allPostOfTag,
        context : {
          tag : tag.fieldValue
        }
      });
    });

  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
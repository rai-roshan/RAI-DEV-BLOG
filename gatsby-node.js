const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }
    type Frontmatter {
      title: String!
      cover: String
    }
  `)
}

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

exports.onCreateNode = async ({ node, actions, getNode, store, cache, createNodeId }) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

  if (
    node.internal.type === "Mdx" &&
    node.frontmatter.cover !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.cover, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
};
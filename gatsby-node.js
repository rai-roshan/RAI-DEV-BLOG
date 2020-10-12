const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = ({ actions, graphql })=>{
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(
        'src/templates/blogPostTemplate.js'
      );
      const allPostOfTag = path.resolve(
        'src/templates/allPostOfTag.js'
      );

      return graphql(`{
      allGraphCmsDevBlog {
        group(field: tags) {
          fieldValue
        }
        nodes {
            remoteId
            title
          }
      }}`).then(result=>{
          if(result.errors){
              throw result.errors;
          }

          const posts = result.data.allGraphCmsDevBlog.nodes;
          const tags = result.data.allGraphCmsDevBlog.group;
          
          posts.forEach(post => {
              createPage({
                  path : post.remoteId,
                  component : blogPostTemplate,
                  context : {
                      slug : post.remoteId
                  }
              })
          });

          tags.forEach( tag => {
              createPage({
                  path : tag.fieldValue,
                  component : allPostOfTag,
                  context : {
                      tag : tag.fieldValue
                  }
              })
          });
      });
};
require('dotenv').config();

module.exports = {
    siteMetadata : {
        title : "RAI",
        description : "This is a blog platform specially for newbie developers",
        author : "Rai Roshan"
    },
    plugins : [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-styled-components',
        'gatsby-remark-reading-time',
        {
          resolve: `gatsby-source-graphcms`,
          options: {
            endpoint: process.env.GATSBY_ENDPOINT,
            buildMarkdownNodes: true,
            downloadLocalImages: true
          },
        },
        {
          resolve: `gatsby-plugin-mdx`,
          options: {
            extensions: [`.mdx`, `.md`],
          },
        },
      ]
};

/*
{
          resolve: 'gatsby-source-graphql',
          options: {
            typeName: 'GRAPHCMS',
            fieldName: 'graphCmsData',
            url: 'https://api-ap-northeast-1.graphcms.com/v2/ckfv9pug9j9wo01yzatik6onm/master',
          }
        }

        
*/
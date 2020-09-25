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
        {
            resolve : 'gatsby-plugin-mdx',
            options : {
                extensions : ['.mdx' , '.md']
            }
        },
        'gatsby-remark-reading-time',
        {
            resolve : 'gatsby-source-filesystem',
            options : {
                path : `${__dirname}/posts`,
                name : 'posts',
                gatsbyRemarkPlugins: [
                    {
                      resolve: `gatsby-remark-images`,
                      options: {
                        maxWidth: 590,
                      },
                    },
                  ],
                plugins: [
                    {
                      resolve: `gatsby-remark-images`,
                      options: {
                        maxWidth: 590,
                      },
                    },
                  ]
            }
        }]
};
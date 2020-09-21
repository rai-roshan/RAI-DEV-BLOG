module.exports = {
    siteMetadata : {
        title : "DEV BLOG",
        description : "This is a blog platform specially for newbie developers"
    },
    plugins : [
        'gatsby-plugin-styled-components',
        {
            resolve : 'gatsby-plugin-mdx',
            options : {
                extensions : ['.mdx' , '.md']
            }
        },
        {
            resolve : 'gatsby-source-filesystem',
            options : {
                path : `${__dirname}/posts`,
                name : 'posts'
            }
        }]
};
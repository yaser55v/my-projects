require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {

  siteMetadata: {
    title: 'Yasser Mahmoud Portfolio',
    description: 'Yasser Mahmoud Freelance front end developer',
    author: 'Yasser Mahmoud'
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `62a3szx8g03w`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}

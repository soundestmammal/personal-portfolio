module.exports = {
    plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
    fonts: [{
            family: `Roboto`,
            variants: [`400`, `700`]
        }],
    }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/R_logo.svg`,
      },
    }
  ],
}
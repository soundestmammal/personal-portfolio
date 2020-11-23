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
    resolve: `gatsby-plugin-google-fonts`,
    options: {
    fonts: [
            `Roboto\:400,700`,
      ],
      display: `swap`
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
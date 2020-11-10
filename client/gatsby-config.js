module.exports = {
    plugins: [
      `gatsby-plugin-fontawesome-css`,
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
    },
    }
  ],
}
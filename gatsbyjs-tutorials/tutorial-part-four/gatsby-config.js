module.exports = {
    siteMetadata: {
	title: `Pandas Eating Lotsssss`
    },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Innovacción Virtual`,
    description: `Un verano con lo mejor de la Industria 4.0`,
    author: `@FernandaOchoa`,
    siteUrl: `https://github.com/FernandaOchoa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

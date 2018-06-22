module.exports = {
    siteMetadata: {
        title: "Urlaub im Müllerhaus"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img/`
            }
        }
    ]
};

module.exports = {
    siteMetadata: {
        title: "Urlaub im Müllerhaus",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `documents`,
                path: `${__dirname}/src/documents/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-96104696-1",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
            },
        },
    ],
    flags: {
        THE_FLAG: false,
    },
};

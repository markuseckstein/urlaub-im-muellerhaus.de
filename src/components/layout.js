import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import Menu from "../components/menu";

import "../css/header-images.css";
import "../css/main.css";
import "../css/normalize.min.css";
import openGraphImage from "../img/logo-muellerhaus.png";

export default ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <div>
                    <Helmet title={data.site.siteMetadata.title}>
                        <html lang="de" />
                        <meta
                            name="description"
                            content="Ferienwohnung in Vogelsang-Warsin. Verbringen Sie erholsame Tage in einer der beiden liebevoll eingerichteten Ferienwohnungen des Müllerhauses. Genießen Sie dabei den großen Garten mit Grill, Liegen und Spielgeräten, die Sauna, die Nähe zum Strand und viel Natur."
                        />
                        <meta
                            name="keywords"
                            content="Ferienwohung, Vogelsang, Warsin, Altwarp, Stettiner Haff, Ueckermünde, Rostock, Müllerhaus, Ostsee, Usedom"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="57x57"
                            href="/favicons/apple-icon-57x57.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="60x60"
                            href="/favicons/apple-icon-60x60.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="72x72"
                            href="/favicons/apple-icon-72x72.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="76x76"
                            href="/favicons/apple-icon-76x76.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="114x114"
                            href="/favicons/apple-icon-114x114.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="120x120"
                            href="/favicons/apple-icon-120x120.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="144x144"
                            href="/favicons/apple-icon-144x144.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="152x152"
                            href="/favicons/apple-icon-152x152.png"
                        />
                        <link
                            rel="apple-touch-icon"
                            sizes="180x180"
                            href="/favicons/apple-icon-180x180.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="192x192"
                            href="/favicons/android-icon-192x192.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="32x32"
                            href="/favicons/favicon-32x32.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="96x96"
                            href="/favicons/favicon-96x96.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="16x16"
                            href="/favicons/favicon-16x16.png"
                        />
                        <link rel="manifest" href="/favicons/manifest.json" />
                        <meta name="theme-color" content="#ffffff" />

                        <meta
                            property="og:url"
                            content="https://www.urlaub-im-muellerhaus.de"
                        />
                        <meta property="og:type" content="website" />
                        <meta
                            property="og:title"
                            content="Willkommen im Müllerhaus in Vogelsang"
                        />
                        <meta
                            property="og:description"
                            content="Verbringen Sie erholsame Tage im liebevoll eingerichteten Müllerhaus"
                        />
                        <meta property="og:image" content={openGraphImage} />
                    </Helmet>
                    <Menu />
                    {children}
                </div>
            </>
        )}
    />
);

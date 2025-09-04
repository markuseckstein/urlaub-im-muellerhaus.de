/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import openGraphImage from "../img/logo-muellerhaus.png"

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const siteUrl = data.site.siteMetadata.siteUrl

  const pageTitle = title || siteTitle
  const pageDescription = description || siteDescription
  const pageKeywords =
    keywords ||
    "Ferienwohung, Vogelsang, Warsin, Altwarp, Stettiner Haff, Ueckermünde, Rostock, Müllerhaus, Ostsee, Usedom"
  const pageOgTitle = ogTitle || "Willkommen im Müllerhaus in Vogelsang"
  const pageOgDescription =
    ogDescription ||
    "Verbringen Sie erholsame Tage im liebevoll eingerichteten Müllerhaus"
  const pageOgImage = ogImage || openGraphImage

  return (
    <>
      <html lang="de" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />

      {/* Favicon and Apple Touch Icons */}
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

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:image" content={pageOgImage} />
    </>
  )
}

export default Seo

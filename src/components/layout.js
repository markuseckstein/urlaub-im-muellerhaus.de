/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import Menu from "./menu"

import "../css/header-images.css"
import "../css/main.css"
import "../css/normalize.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Menu />
        {children}
      </div>
    </>
  )
}

export default Layout

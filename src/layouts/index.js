import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Menu from "../components/menu";

import "../css/header-images.css";
import "../css/main.css";
import "../css/normalize.min.css";

const Layout = ({ children, data }) => (
    <div>
        <Helmet title={data.site.siteMetadata.title}>
            <html lang="de" />
        </Helmet>
        <Menu />
        {children()}
    </div>
);

Layout.propTypes = {
    children: PropTypes.func
};

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

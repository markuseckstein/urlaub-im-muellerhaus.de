import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";

const NotFoundPage = () => (
    <Layout>
        <div>
            <h1>Seite nicht gefunden!</h1>
            <p>Diese Seite existiert leider nicht.</p>
            <p>
                <Link to="/">Zur Homepage</Link>
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;

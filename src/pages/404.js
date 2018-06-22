import React from "react";
import Link from "gatsby-link";

const NotFoundPage = () => (
    <div>
        <h1>Seite nicht gefunden!</h1>
        <p>Diese Seite existiert leider nicht.</p>
        <p>
            <Link to="/">Zur Homepage</Link>
        </p>
    </div>
);

export default NotFoundPage;

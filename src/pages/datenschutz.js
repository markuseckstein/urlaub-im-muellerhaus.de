import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

class DatenschutzPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Müllerhaus - Datenschutz" />
                <div className="header-image header-image--impressum" />
                <div className="main-container">
                    <div className="main wrapper clearfix">
                        <article>
                            <header>
                                <h2>Datenschutz</h2>
                                <p>lorem</p>
                            </header>
                            <p>
                                <Link to="/">zurück zur Homepage</Link>
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default DatenschutzPage;

import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

class ImpressumPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Müllerhaus - Impressum" />
                <div className="header-image header-image--impressum" />
                <div className="main-container">
                    <div className="main wrapper clearfix">
                        <article>
                            <header>
                                <h2>Impressum und Kontakt</h2>
                                <p>
                                    Ute und Johannes Lochner<br /> Dorfstraße 24<br />{" "}
                                    17375 Vogelsang-Warsin<br /> Tel:{" "}
                                    <a href="tel:+4939773269972">
                                        039773-269972
                                    </a>
                                    <br />
                                    <a href="mailto:info@urlaub-im-muellerhaus.de">
                                        info@urlaub-im-muellerhaus.de
                                    </a>
                                    <br />
                                </p>
                                <p>
                                    <Link to="/datenschutz">Datenschutz</Link>
                                </p>
                            </header>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImpressumPage;

import React from "react";
import { Helmet } from "react-helmet";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const dtvStyle = {
    backgroundColor: "red",
    padding: 0,
};

const smallArticleStyle = {};

const ImpressumPage = (props) => (
    <Layout>
        <div>
            <Helmet title="Müllerhaus - Impressum" />
            <div className="header-image header-image--impressum" />
            <div className="main-container">
                <div className="main wrapper clearfix">
                    <article style={smallArticleStyle}>
                        <header>
                            <h2>Impressum und Kontakt</h2>
                            <p>
                                Ute und Johannes Lochner
                                <br /> Dorfstraße 24
                                <br /> 17375 Vogelsang-Warsin
                                <br /> Tel:{" "}
                                <a href="tel:+4939773269972">039773-269972</a>
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
                    <aside style={dtvStyle}>
                        <img
                            src={props.data.dtvLogo.childImageSharp.image.src}
                            width="100%"
                            alt="DTV-4-Sterne-Logo"
                        ></img>
                    </aside>
                </div>
            </div>
        </div>
    </Layout>
);
export const query = graphql`
    query Logo {
        dtvLogo: file(
            sourceInstanceName: { eq: "images" }
            relativePath: { eq: "dtv_4sterne.jpg" }
        ) {
            childImageSharp {
                image: resize(width: 600, quality: 77, toFormat: PNG) {
                    src
                    width
                    height
                }
            }
        }
    }
`;

export default ImpressumPage;

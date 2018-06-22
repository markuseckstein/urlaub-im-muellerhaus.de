import React from "react";
import Helmet from "react-helmet";
import Gallery from "react-grid-gallery";

class GartenPage extends React.Component {
    render() {
        const images = this.props.data.gartenImages.edges.map(x => {
            return {
                src: x.node.orig.src,
                thumbnail: x.node.thumb.src,
                thumbnailWidth: x.node.thumb.width,
                thumbnailHeight: x.node.thumb.height,
                caption: x.node.fields.exif.title
            };
        });

        return (
            <div>
                <Helmet title="Müllerhaus - Garten und Sauna" />
                <div className="header-image header-image--garten" />
                <div className="main-container">
                    <div className="main wrapper clearfix">
                        <article>
                            <header>
                                <h1 className="heading">Garten und Sauna</h1>
                            </header>
                            <section>
                                <p>
                                    Egal ob Sie sich auf einer Liege entspannen
                                    oder mit Ihren Kindern toben möchten, der
                                    Garten ist groß genug für alle Bedürfnisse.
                                    Nach Belieben stehen Ihnen Gartenmöbel,
                                    Spielgeräte, Sandkasten, Schaukel,
                                    Sonnenschirme, Grill und eine Feuerstelle
                                    zur Verfügung.
                                </p>
                            </section>
                        </article>
                        <aside>
                            <h2>Ausspannen in der Scheunen-Sauna</h2>
                            <p>
                                Lassen Sie Ihre Seele in der Außensauna des
                                Müllerhauses baumeln. Genießen Sie dabei ein
                                Glas Tee im Ruhebereich mit Blick über Feld und
                                Wiese in Richtung Haff.
                            </p>
                        </aside>
                    </div>
                </div>

                <div className="footer-container">
                    <footer>
                        <Gallery images={images} enableImageSelection={false} />
                        <div style={{ clear: "both" }}>&nbsp;</div>
                    </footer>
                </div>
            </div>
        );
    }
}

export const pageQuery = graphql`
    query GartenQuery {
        gartenImages: allImageSharp(
            sort: { fields: [id] }
            filter: { id: { regex: "//garten//" } }
        ) {
            edges {
                node {
                    orig: resize(width: 1300, quality: 80) {
                        src
                    }
                    thumb: resize(width: 280) {
                        src
                        width
                        height
                    }
                    fields {
                        exif {
                            title
                        }
                    }
                }
            }
        }
    }
`;

export default GartenPage;

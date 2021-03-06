import React from "react";
import { Helmet } from "react-helmet";
import Gallery from "react-grid-gallery";
import { graphql } from "gatsby";
import Layout from "../components/layout";

class WohnungenPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { areHometownsShown: false };
    }

    render() {
        const images = this.props.data.wohnungenImages.edges.map((x) => {
            return {
                src: x.node.orig.src,
                thumbnail: x.node.thumb.src,
                thumbnailWidth: x.node.thumb.width,
                thumbnailHeight: x.node.thumb.height,
                caption: x.node.fields.exif.title,
            };
        });

        return (
            <Layout>
                <div>
                    <Helmet title="Müllerhaus - Wohnungen" />
                    <div className="header-image header-image--wohnungen" />
                    <div className="main-container">
                        <div className="main wrapper clearfix">
                            <article>
                                <header>
                                    <h1 className="heading">
                                        Ursprünglichkeit sorgfältig ausgestattet
                                    </h1>
                                    <p>
                                        Im Dachgeschoss des Hauses befinden sich
                                        zwei 70-80 Quadratmeter große
                                        Ferienwohnungen:
                                    </p>
                                </header>
                                <section>
                                    <h2>
                                        Wohnung „Ueckermünde“ (2 - 5 Personen)
                                    </h2>
                                    <ul>
                                        <li>
                                            Geräumige Wohnküche mit Spielecke
                                        </li>
                                        <li>
                                            Schlafzimmer mit Doppelbett und zwei
                                            Einzelbetten
                                        </li>
                                        <li>Einzelzimmer</li>
                                        <li>
                                            Bequemes Ecksofa (ausziehbar) im
                                            Wohnzimmer
                                        </li>
                                    </ul>
                                    <p>
                                        Die helle Küche mit Blick in den Garten
                                        und einem Esstisch für bis zu sechs
                                        Personen lädt zum Beisammensein ein.
                                        Über einen kleinen Flur gelangen Sie in
                                        das große Badezimmer mit Fußbodenheizung
                                        und Dusche, in die kleine Schlafkammer
                                        mit Einzelbett und in das Wohnzimmer, in
                                        dem einst der Müllergeselle wohnte. Der
                                        Raum mit zum Teil naturbelassenen Wänden
                                        strahlt eine besonders gemütliche und
                                        warme Atmosphäre aus.
                                    </p>
                                    <p>
                                        Brettspiele, Sat-TV, Sitzmöbel und eine
                                        Eckcouch (ausziehbar) ermöglichen
                                        gemütliche Familienabende. Eine schmale
                                        Wendeltreppe führt vom Eingangsbereich
                                        der Wohnung in die obere Etage zum
                                        Schlafraum mit einem Doppelbett und zwei
                                        Einzelbetten.
                                    </p>
                                    <p>
                                        Überbelegung mit 2 Personen auf Anfrage
                                        möglich.
                                    </p>
                                </section>
                                <section>
                                    <h2>Wohnung „Altwarp“ (2 - 4 Personen)</h2>
                                    <ul>
                                        <li>Schlafzimmer mit Doppelbett</li>
                                        <li>Galerie mit Doppelbett</li>
                                        <li>
                                            Kinderbetten und Zusatzbett bei
                                            Bedarf
                                        </li>
                                        <li>Großes Wohnzimmer mit Eckcouch</li>
                                        <li>
                                            Herrlicher Ausblick bis hin zum Haff
                                        </li>
                                    </ul>
                                    <p>
                                        Eine große Fensterfront ermöglicht bei
                                        gutem Wetter einen Ausblick bis zum Haff
                                        und verleiht der Wohnung mit offener
                                        Küche ein wunderschönes Licht.
                                        Verbringen Sie im Wohnbereich mit den
                                        zum Teil lehmbelassenen Wänden, großer
                                        Eckcouch und TV gemütliche Spiele-, Lese
                                        und Fernsehabende.
                                    </p>
                                    <p>
                                        Der Esstisch bietet Platz für bis zu
                                        vier Personen. Von der Küche gelangen
                                        Sie in das Bad mit Dusche und
                                        Fußbodenheizung. Im separaten
                                        Schlafzimmer finden zwei Personen Ruhe
                                        (Kinderbett möglich), im offenen
                                        Galeriezimmer, das über eine schmale
                                        Wendeltreppe zu erreichen ist, weitere
                                        zwei Personen.
                                    </p>
                                </section>
                                <section>
                                    <h2>
                                        Die Ausstattung lässt keine Wünsche
                                        offen
                                    </h2>
                                    <p>Allgemein:</p>
                                    <ul>
                                        <li>
                                            Wandheizung in den Wohnräumen,
                                            Fußbodenheizung im Badezimmer
                                        </li>
                                        <li>
                                            Parkettböden in den Wohnräumen,
                                            Laminat in den Schlafgalerien
                                        </li>
                                        <li>
                                            Handtücher, Bettwäsche inklusive
                                        </li>
                                        <li>WLAN kostenfrei</li>
                                        <li>Sat-TV</li>
                                        <li>Fön</li>
                                        <li>Bügelbrett und -eisen</li>
                                        <li>
                                            Bluetooth-Stereo-Lautsprecher mit
                                            Wecker und Radio
                                        </li>
                                        <li>Zimmersafe</li>
                                        <li>Ganzkörperspiegel</li>
                                    </ul>

                                    <p>Küche:</p>
                                    <ul>
                                        <li>4-Plattenherd</li>
                                        <li>Backofen</li>
                                        <li>Kaffeemaschine</li>
                                        <li>Wasserkocher</li>
                                        <li>Geschirr</li>
                                        <li>
                                            übliche Kochutensilien (Töpfe,
                                            Pfannen, Auflaufform, Kochbesteck
                                            etc.)
                                        </li>
                                        <li>Geschirrspülmaschine</li>
                                        <li>Kühlschrank</li>
                                        <li>Toaster</li>
                                        <li>
                                            Kinderhochstuhl und -bettchen bei
                                            Bedarf
                                        </li>
                                    </ul>
                                </section>
                            </article>
                            <aside>
                                <h2>
                                    Unseren Gästen stehen außerdem zur Verfügung
                                </h2>
                                <ul>
                                    <li>Sauna im Nebengebäude</li>
                                    <li>Bollerwägen für Strandausflüge</li>
                                    <li>
                                        Garten mit Spielehaus inkl. Rutsche und
                                        Schaukeln, Sandkasten,
                                        Sitzgelegenheiten, Liege- und
                                        Spielflächen
                                    </li>
                                    <li>Holzkohlegrill</li>
                                    <li>Gartenmöbel</li>
                                    <li>Liegen</li>
                                    <li>
                                        Sport-Spielgeräte (Fußballtore,
                                        Speedminton-Netz und -Schläger, etc.)
                                    </li>
                                    <li>Waschmaschine im Nebengebäude</li>
                                    <li>Autostellplatz</li>
                                    <li>
                                        Absperrbare Scheune zur Unterbringung
                                        von Fahrrädern, Kinderwägen etc.
                                    </li>
                                    <li>
                                        Diverse Gästefahrräder und kleine
                                        Laufräder
                                    </li>
                                    <li>Kunstscheune mit Sitzgelegenheiten</li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="footer-container">
                        <footer>
                            <Gallery
                                images={images}
                                enableImageSelection={false}
                            />
                            <div style={{ clear: "both" }}>&nbsp;</div>
                        </footer>
                    </div>
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query WohnungenQuery {
        wohnungenImages: allImageSharp(
            sort: { fields: [fields___file___path] }
            filter: {
                fields: { file: { path: { regex: "//gallery/wohnungen//" } } }
            }
        ) {
            edges {
                node {
                    orig: resize(width: 1300, quality: 65) {
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

export default WohnungenPage;

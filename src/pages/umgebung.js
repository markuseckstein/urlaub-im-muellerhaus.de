import React from "react";
import { Helmet } from "react-helmet";
import Gallery from "react-grid-gallery";
import { graphql } from "gatsby";
import { fromEvent, Subscription } from "rxjs";
import { pluck, filter, bufferCount } from "rxjs/operators";
import Layout from "../components/layout";

const styleHidden = {
    display: "none",
};

class UmgebungPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { areHometownsShown: false };
    }

    _subscription = Subscription.EMPTY;

    render() {
        const images = this.props.data.umgebungImages.edges.map((x) => {
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
                    <Helmet title="Müllerhaus - Strand und Umgebung" />
                    <div className="header-image header-image--umgebung" />
                    <div className="main-container">
                        <div className="main wrapper clearfix">
                            <article>
                                <header>
                                    <h1 className="heading">
                                        Strand und Umgebung
                                    </h1>
                                    <h2>Naturstrand in Laufnähe</h2>
                                    <p>
                                        Vogelsang liegt direkt an der Küste des
                                        Stettiner Haffs. Der Sandstrand mit
                                        kleinem Bootshafen ist rund 15
                                        Gehminuten vom Müllerhaus entfernt. Das
                                        Ufer fällt langsam ab und bietet somit
                                        eine optimale Bade- und Spielmöglichkeit
                                        für Kinder. Bei gutem Wetter können Sie
                                        bis nach Usedom blicken.
                                    </p>
                                    <p>
                                        Weitere Strände in der Umgebung sind
                                        bequem mit dem Fahrrad oder dem Auto
                                        erreichbar, beispielsweise in Bellin (5
                                        Kilometer), Ueckermünde (8 Kilometer),
                                        Altwarp (8 Kilometer) oder Mönkebude (17
                                        Kilometer).
                                    </p>
                                </header>
                                <section>
                                    <h2>Kultur im Seebad Ueckermünde</h2>
                                    <p>
                                        Knapp acht Kilometer in Richtung Westen
                                        liegt das Seebad Ueckermünde. Eine
                                        Kleinstadt mit Bade- und
                                        Einkaufsmöglichkeiten, kleinen Boutiquen
                                        und einem reizenden historischen
                                        Stadtkern. Im „Kulturspeicher“ können
                                        Sie regionale Produkte erwerben oder
                                        Kunstausstellungen genießen. Der kleine
                                        Hafen bietet sich für Spaziergänge an.
                                        Weiterhin erwarten Sie ein Kletterwald,
                                        der Tierpark sowie ein großer Badestrand
                                        mit Gastronomie, Strandkörben,
                                        Volleyballfeld, Kinderspielplatz, Hunde-
                                        und FKK-Bereich und vielem mehr. Die
                                        Hafenstadt Ueckermünde ist außerdem
                                        Ausgangspunkt für Fährfahrten auf die
                                        Insel Usedom oder für Touren in die
                                        polnische Großstadt Stettin.
                                    </p>
                                </section>
                                <section>
                                    <h2>
                                        Idyll, Natur und fangfrischen Fisch in
                                        Altwarp
                                    </h2>
                                    <p>
                                        Die gleiche Strecke in Richtung Osten
                                        bringt Sie zum kleinen Fischerdorf
                                        Altwarp. Von hier aus können Sie
                                        Bootsausflüge machen, ursprüngliche
                                        Natur genießen, fangfrischen Fisch
                                        einkaufen oder gleich vor Ort
                                        verspeisen: Altwarp gilt als Geheimtipp
                                        für köstliche Fischrestaurants.
                                    </p>
                                </section>
                                <footer>
                                    <h2>Entfernungen</h2>

                                    <ul>
                                        <li>Ueckermünde: 8 Kilometer</li>
                                        <li>Altwarp: 8 Kilometer</li>
                                        <li>Rieth: 12 Kilometer</li>
                                        <li>Mönkebude: 16 Kilometer</li>
                                        <li>Torgelow: 21 Kilometer</li>
                                        <li>Stettin: 51 Kilometer</li>
                                        <li>Swinemünde: 70 Kilometer</li>
                                        <li>Neubrandenburg: 72 Kilometer</li>
                                        <li>Greifswald: 82 Kilometer</li>
                                        <li>
                                            Heringsdorf auf Usedom: 90 Kilometer
                                        </li>
                                        <li
                                            style={
                                                this.state.areHometownsShown
                                                    ? undefined
                                                    : styleHidden
                                            }
                                        >
                                            Pattenhofen: 634 Kilometer
                                        </li>
                                        <li
                                            style={
                                                this.state.areHometownsShown
                                                    ? undefined
                                                    : styleHidden
                                            }
                                        >
                                            Lindelburg: 642 Kilometer
                                        </li>
                                        <li
                                            style={
                                                this.state.areHometownsShown
                                                    ? undefined
                                                    : styleHidden
                                            }
                                        >
                                            Altenthann: 633 Kilometer
                                        </li>
                                    </ul>
                                </footer>
                            </article>
                            <aside>
                                <h2>Weitere Ausflugsziele</h2>
                                <ul>
                                    <li>Einzigartige Strände in Vogelsang, Bellin (mit {" "}
                                        <a
                                            href="https://www.facebook.com/bellinibeach/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Bar
                                        </a>{" "}), Mönkebude, Ueckermünde (mit Café, Imbiss und {" "}
                                        <a
                                            href="https://www.strandhalle-ueckermuende.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Restaurant
                                        </a>{" "})</li>
                                    <li>Frühstücken im {" "}
                                        <a
                                            href="https://wohlfuehleck-ueckermuende.eatbu.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Wohlfühleck
                                        </a>{" "} in {" "}
                                        <a
                                            href="https://www.ueckermuende.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ueckermünde
                                        </a>{" "}</li>
                                    <li>Filmabend im {" "}
                                        <a
                                            href="https://www.kino-ueckermuende.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Kino
                                        </a>{" "} Ueckermünde</li>
                                    <li>{" "}
                                        <a
                                            href="https://www.ueckermuende.de/portal/seiten/haffmuseum-mit-regionaler-geschichte-900000069-34850.html"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Haffmuseum
                                        </a>{" "} Ueckermünde</li>
                                    <li>Geschichte erleben im {" "}
                                        <a
                                            href="http://ukranenland.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ukranenland
                                        </a>{" "} Torgelow</li>
                                    <li>Fischerdorf {" "}
                                        <a
                                            href="https://www.fischerdorf-altwarp.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Altwarp
                                        </a>{" "}: Bootsfahrten und Fischspezialitäten</li>
                                    <li>{" "}
                                        <a
                                            href="https://www.naturpark-am-stettiner-haff.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Naturpark am Stettiner Haff
                                        </a>{" "}: Natur hautnah, Biber-Wanderungen, Führungen durch die Binnendüne, Informationszentrum</li>
                                    <li>{" "}
                                        <a
                                            href="https://tierpark-ueckermuende.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Tierpark
                                        </a>{" "} Ueckermünde</li>
                                    <li>Straußenfarm Ahlbeck</li>
                                    <li>Einkaufsbummel in Stettin</li>
                                    <li>Radtour auf der Insel Usedom</li>
                                    <li>Entspannen in der {" "}
                                        <a
                                            href="https://www.ostseetherme-usedom.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            OstseeTherme
                                        </a>{" "} Usedom</li>
                                    <li>Spaziergang auf den Strandpromenaden der Kaiserbäder Heringsdorf, Ahlbeck und Bansin</li>
                                    <li>Kreidefelsen und Störtebeker-Festspiele auf der Insel Rügen</li>
                                    <li>Sightseeing und Shopping in Greifswald</li>
                                    <li>{" "}
                                        <a
                                            href="https://www.ozeaneum.de/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ozeaneum
                                        </a>{" "} Stralsund</li>
                                    <li>Shopping und See in Neubrandenburg</li>
                                    <li>Fischer- und Künstlerdorf Rieth am Neuwarper See</li>
                                    <li>Hanseatische Kultur und Architektur in Rostock</li>
                                    <li>Weitere Schätze der <a href="https://www.kulturlandbuero.de/kulturlandschatzkarte/" target="_blank" rel="noreferrer">Kulturlandschatzkarte</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>

                    <div className="footer-container">
                        <footer className="wrapper">
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

    componentDidMount() {
        var codes = ["h", "o", "m", "e"];
        if (typeof document !== `undefined`) {
            this._subscription = fromEvent(document, "keyup")
                .pipe(
                    pluck("key"),
                    bufferCount(codes.length, 1),
                    filter(function (data) {
                        return data.toString() === codes.toString();
                    })
                )
                .subscribe(() => {
                    this.toggleHeimat();
                });
        }
    }

    componentWillUnmount() {
        this._subscription.unsubscribe();
    }

    toggleHeimat() {
        this.setState((prevState) => ({
            areHometownsShown: !prevState.areHometownsShown,
        }));
    }
}

export const pageQuery = graphql`
    query UmgebungQuery {
        umgebungImages: allImageSharp(
            sort: { fields: [fields___file___path] }
            filter: {
                fields: { file: { path: { regex: "//gallery/umgebung//" } } }
            }
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

export default UmgebungPage;

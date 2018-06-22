import React from "react";
import Helmet from "react-helmet";
import Gallery from "react-grid-gallery";
import { fromEvent, Subscription } from "rxjs";
import { pluck, filter, bufferCount } from "rxjs/operators";
import * as Hammer from "hammerjs";

class WohnungenPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { areHometownsShown: false };
    }

    _subscription = Subscription.EMPTY;
    mc = new Hammer.Manager(document.body);

    render() {
        const images = this.props.data.wohnungenImages.edges.map(x => {
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
                                <h2>Wohnung „Ueckermünde“ (2 - 6 Personen)</h2>
                                <ul>
                                    <li>Geräumige Wohnküche mit Spielecke</li>
                                    <li>
                                        Schlafzimmer mit Doppelbett und zwei
                                        Einzelbetten
                                    </li>
                                    <li>Einzelzimmer</li>
                                    <li>
                                        Bequeme Doppelschlafcouch im Wohnzimmer
                                    </li>
                                </ul>
                                <p>
                                    Die helle Küche mit Blick in den Garten und
                                    einem Esstisch für bis zu sechs Personen
                                    lädt zum Beisammensein ein. Über einen
                                    kleinen Flur gelangen Sie in das große
                                    Badezimmer mit Fußbodenheizung und Dusche,
                                    in die Schlafkammer mit Einzelbett und in
                                    das Wohnzimmer, in dem einst der
                                    Müllergeselle wohnte. Der Raum mit zum Teil
                                    naturbelassenen Wänden strahlt eine
                                    besonders gemütliche und warme Atmosphäre
                                    aus.
                                </p>
                                <p>
                                    Brettspiele, Sat-TV, Sitzmöbel und eine
                                    Eckcouch (ausziehbar) ermöglichen gemütliche
                                    Familienabende. Eine schmale Wendeltreppe
                                    führt vom Eingangsbereich der Wohnung in die
                                    obere Etage zum Schlafraum mit einem
                                    Doppelbett und zwei Einzelbetten.
                                </p>
                            </section>
                            <section>
                                <h2>Wohnung „Altwarp“ (2 - 4 Personen)</h2>
                                <ul>
                                    <li>Schlafzimmer mit Doppelbett</li>
                                    <li>Galerie mit Doppelbett</li>
                                    <li>
                                        Kinderbetten und Zusatzbett bei Bedarf
                                    </li>
                                    <li>Großes Wohnzimmer mit Eckcouch</li>
                                    <li>
                                        Herrlicher Ausblick bis hin zum Haff
                                    </li>
                                </ul>
                                <p>
                                    Eine große Fensterfront ermöglicht bei gutem
                                    Wetter einen Ausblick bis zum Haff und
                                    verleiht der Wohnung mit offener Küche ein
                                    wunderschönes Licht. Verbringen Sie im
                                    Wohnbereich mit den zum Teil lehmbelassenen
                                    Wänden, großer Eckcouch und TV gemütliche
                                    Spiele-, Lese und Fernsehabende.
                                </p>
                                <p>
                                    Der Esstisch bietet Platz für bis zu vier
                                    Personen. Von der Küche gelangen Sie in das
                                    Bad mit Dusche und Fußbodenheizung. Im
                                    separaten Schlafzimmer finden zwei Personen
                                    Ruhe (Kinderbett möglich), im offenen
                                    Galeriezimmer, das über eine schmale
                                    Wendeltreppe zu erreichen ist, weitere zwei
                                    Personen.
                                </p>
                            </section>
                            <section>
                                <h2>
                                    Die Ausstattung lässt keine Wünsche offen
                                </h2>
                                <p>Allgemein:</p>
                                <ul>
                                    <li>
                                        Wandheizung in den Wohnräumen,
                                        Fußbodenheizung im Badezimmer
                                    </li>
                                    <li>
                                        Parkettböden in den Wohnräumen, Laminat
                                        in den Schlafgalerien
                                    </li>
                                    <li>Handtücher, Bettwäsche inklusive</li>
                                    <li>WLAN kostenfrei</li>
                                    <li>Sat-TV</li>
                                    <li>Fön</li>
                                    <li>Bügelbrett und -eisen</li>
                                </ul>

                                <p>Küche:</p>
                                <ul>
                                    <li>4-Plattenherd</li>
                                    <li>Backofen</li>
                                    <li>Kaffeemaschine</li>
                                    <li>Wasserkocher</li>
                                    <li>Geschirr für bis zu 6 Personen</li>
                                    <li>
                                        übliche Kochutensilien (Töpfe, Pfannen,
                                        Auflaufform, Kochbesteck etc.)
                                    </li>
                                    <li>Geschirrspülmaschine</li>
                                    <li>Kühlschrank</li>
                                    <li>Toaster</li>
                                    <li>
                                        Kinderhochstuhl und -bettchen bei Bedarf
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
                                    Garten mit Schaukel, Sandkasten, Liege- und
                                    Spielflächen
                                </li>
                                <li>Holzkohlegrill</li>
                                <li>Gartenmöbel</li>
                                <li>Liegen</li>
                                <li>
                                    Diverse Spielgeräte (Fußballtor,
                                    Badmintonschläger etc.)
                                </li>
                                <li>Waschmaschine im Nebengebäude</li>
                                <li>Autostellplatz</li>
                                <li>
                                    Absperrbare Scheune zur Unterbringung von
                                    Fahrrädern, Kinderwägen etc.
                                </li>
                            </ul>
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
    query WohnungenQuery {
        wohnungenImages: allImageSharp(
            sort: { fields: [id] }
            filter: { id: { regex: "//wohnungen//" } }
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

export default WohnungenPage;

// <div id="gallery" style="display:none">
// <img alt="Der Esstisch in der Wohnung „Ueckermünde“ bietet Platz für sechs Personen."
//      src="img/gallery/wohnungen/thumbs/wohnungen_01.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_01.jpg">
// <img alt="Die Küchen sind voll ausgestattet mit 4-Plattenherd, Backofen, Geschirrspüler und den üblichen Kochutensilien."
//      src="img/gallery/wohnungen/thumbs/wohnungen_02.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_02.jpg">
// <img alt="Direkt neben dem Esstisch der Wohnung „Ueckermünde“ befindet sich die Spielecke."
//      src="img/gallery/wohnungen/thumbs/wohnungen_03.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_03.jpg">
// <img alt="Von der Küche führt der Flur ins Wohnzimmer, zum Einzelzimmer und ins Bad."
//      src="img/gallery/wohnungen/thumbs/wohnungen_04.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_04.jpg">
// <img alt="Das gemütliche Einzelzimmer der Wohnung „Ueckermünde“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_05.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_05.jpg">
// <img alt="Einst wohnte hier der Müllergeselle: Das Wohnzimmer des Appartements „Ueckermünde“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_06.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_06.jpg">
// <img alt="Besonders warmes Flair: Im Wohnzimmer des Appartements „Ueckermünde“ sind die Wände noch naturbelassen."
//      src="img/gallery/wohnungen/thumbs/wohnungen_07.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_07.jpg">
// <img alt="Mit Fußboden- und Handtuchheizung: Das geräumige Badezimmer der Wohnung „Ueckermünde“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_08.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_08.jpg">
// <img alt="Im gemütlichen Dachzimmer der Wohnung „Ueckermünde“ befinden sich ein Doppel- und zwei Einzelbetten."
//      src="img/gallery/wohnungen/thumbs/wohnungen_09.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_09.jpg">
// <img alt="Das Doppelbett im Dachzimmer der Wohnung „Ueckermünde“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_10.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_10.jpg">
// <img alt="Das gemütliche Wohnzimmer des Appartements „Altwarp“ lädt zu Spiele-, Lese- oder Fernsehabenden ein."
//      src="img/gallery/wohnungen/thumbs/wohnungen_11.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_11.jpg">
// <img alt="Gemütlicher Essplatz in der Wohnung „Altwarp“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_12.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_12.jpg">
// <img alt="Das Schlafzimmer der Wohnung „Altwarp“ sorgt für schöne Träume."
//      src="img/gallery/wohnungen/thumbs/wohnungen_13.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_13.jpg">
// <img alt="Das Schlafzimmer der Wohnung „Altwarp“ sorgt für schöne Träume."
//      src="img/gallery/wohnungen/thumbs/wohnungen_14.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_14.jpg">
// <img alt="Doppelbett in der offenen Galerie der Wohnung „Altwarp“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_15.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_15.jpg">
// <img alt="Mit Fußboden- und Handtuchheizung: Das geräumige Badezimmer der Wohnung „Altwarp“."
//      src="img/gallery/wohnungen/thumbs/wohnungen_16.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_16.jpg">
// <img alt="Treppenaufgang zu den Ferienwohnungen."
//      src="img/gallery/wohnungen/thumbs/wohnungen_17.jpg"
//      data-image="img/gallery/wohnungen/wohnungen_17.jpg">
//       </div>

import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const greetingStyle = {
    fontFamily: "Reenie Beanie, cursive",
    fontSize: "2.6em",
    transform: "rotate(2deg)",
};

const eventTeaserStyle = {
    backgroundColor: "#f1f1f1",
    padding: "0 1rem",
    borderRadius: "4px",
    float: "left",
    marginBottom: "1.5rem",
};

const asideStyle = {
    marginBottom: "1.5rem"
}

const IndexPage = (props) => (
    <Layout>
        <div>
            <div className="header-image header-image--index" />
            <div className="main-container">
                <div className="main wrapper clearfix">
                    <article>
                        <header>
                            <h1 className="heading">
                                Das Müllerhaus in Vogelsang
                            </h1>
                            <p>
                                Verbringen Sie erholsame Tage in einer der
                                beiden liebevoll eingerichteten Ferienwohnungen
                                des Müllerhauses. Genießen Sie dabei den großen
                                Garten mit Grill, Liegen und Spielgeräten, die
                                Sauna, die Nähe zum Strand und viel Natur.
                            </p>

                            <p>Wir freuen uns auf Ihren Besuch!</p>
                            <p>
                                <span style={greetingStyle}>
                                    Ihre Familie Lochner
                                </span>
                            </p>
                        </header>
                    </article>
                    <aside style={asideStyle}>
                        <h3>Modernes Leben in historischem Ambiente</h3>
                        <p>
                            Das denkmalgeschützte Fachwerkhaus liegt an der
                            vorpommerschen Küste. Es wurde 1830 erbaut und
                            diente einst einer wohlhabenden Müllerfamilie als
                            Wohnhaus. In den vergangenen knapp 200 Jahren hatte
                            es viele Bewohner und Gesichter. 2001 entdeckte ein
                            Liebhaber das Objekt und sanierte es von Grund auf.
                            Dabei legte er großen Wert darauf, mit den
                            originalgetreuen Materialien zu arbeiten und die
                            ursprüngliche Optik wiederherzustellen. Zugleich
                            stattete er das Haus mit Wand- und Fußbodenheizung,
                            Sauna, WLAN und Sat-TV aus. So verband er
                            historisches Ambiente mit modernem Wohnkomfort.
                        </p>
                    </aside>

                    <article style={eventTeaserStyle}>
                        <p>
                            <img
                                src={
                                    props.data.sterneSiegel.childImageSharp
                                        .image.src
                                }
                                width="100%"
                                alt="DTV-4-Sterne-Siegel Wohnung Altwarp"
                            ></img>
                        </p>
                        <h3>Würdigung für besondere Qualität</h3>

                        <p>
                            <strong>
                                Anlässlich des Qualitätstags, den der
                                Tourismusverband MV am 18. November in
                                Rövershagen veranstaltet hat, wurde unser
                                Müllerhaus unter dem Titel „Ausgezeichnete
                                Betriebe im Fokus“ geehrt.
                            </strong>
                        </p>
                        <p>
                            Die Urkunde für die „höherwertige Gesamtausstattung
                            und gehobenen Komfort“ unserer Ferienunterkunft mit
                            4-Sterne-Klassifizierung überreichte Wolfgang
                            Waldmüller (MDL, stellvertretender Vorsitzender des
                            Tourismusverbandes Mecklenburg-Vorpommern). In
                            seiner Rede betonte er: „Qualität ist kein Ziel, das
                            man erreicht oder abhakt, es ist ein ständiger
                            Prozess, zwischen der Region, den Gästen und uns
                            selbst“.
                        </p>

                        <p>
                            Dem können wir nur zustimmen und wir freuen uns
                            darauf, liebe Gäste, diesen Prozess in den kommenden
                            Jahren weiterhin kreativ und aufmerksam
                            voranzutreiben. Denn uns geht es darum, Euch einen
                            unvergesslichen Erholungsort anzubieten.
                        </p>
                        <p>Wir freuen uns auf Euch!</p>
                        <p>Eure Lochners</p>

                        <p>
                            <img
                                src={
                                    props.data.dtvLogo.childImageSharp.image.src
                                }
                                width="100%"
                                alt="DTV-4-Sterne-Logo"
                            ></img>
                        </p>
                    </article>

                    <article style={eventTeaserStyle}>
                        <h3>Der Müllerhaus-Garten im Zeichen der Kunst</h3>

                        <p>
                            Im Rahmen des Formats{" "}
                            <a
                                href="https://www.vorpommern.de/kunstoffen-in-vorpommern/"
                                target="_blank"
                            >
                                „Kunst Offen“
                            </a>{" "}
                            haben am Pfingstwochenende wieder über 200
                            Kunstinteressierte unsere Galerie im
                            Müllerhaus-Garten besucht. Hier stellt die Malerin{" "}
                            <a
                                href="https://www.brigitte-danner.de/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Brigitte Danner
                            </a>{" "}
                            ihre Werke aus, bei denen Sie verschiedenste
                            Materialien und Techniken zu abstrakten Motiven
                            vereint. Die Bilder geben in einer einzigartigen
                            Ästhetik Natur und Emotionen wieder.
                        </p>
                        <p>
                            Viele Gäste sind so begeistert von der
                            gestalterischen Harmonie ihrer Werke, dass sie der
                            Kunstscheune im Müllerhausgarten jedes Jahr an
                            Pfingsten einen Besuch abstatten.
                        </p>

                        <p>
                            Besichtigungen sind auch an anderen Tagen möglich.
                            Wir bitten dafür um{" "}
                            <Link to="/impressum">Kontaktaufnahme</Link> per
                            Mail oder telefonisch.
                        </p>
                        <p>
                            Außerdem wird Brigitte Danner im Frühjahr 2025 im
                            Kulturspeicher Ueckermünde ihre neuesten Werke
                            zeigen (Vernissage am 7. März 2025).
                        </p>


                        <p>
                            <img
                                src={
                                    props.data.kunstscheune.childImageSharp
                                        .image.src
                                }
                                width="100%"
                                alt="Kunstausstellung in der Kunstscheune"
                            ></img>
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </Layout>
);

export const query = graphql`
    query LogoAndZeitung {
        kunstscheune: file(
            sourceInstanceName: { eq: "images" }
            relativePath: { eq: "kunstscheune.jpg" }
        ) {
            childImageSharp {
                image: resize(width: 600, quality: 77, toFormat: JPG) {
                    src
                    width
                    height
                }
            }
        }
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
        sterneSiegel: file(
            sourceInstanceName: { eq: "images" }
            relativePath: { eq: "dtv_4sterne_siegel.png" }
        ) {
            childImageSharp {
                image: resize(width: 600, quality: 77, toFormat: JPG) {
                    src
                    width
                    height
                }
            }
        }
        zeitung: file(
            sourceInstanceName: { eq: "documents" }
            relativePath: { eq: "kunstoffen_2022_pfingsten.pdf" }
        ) {
            src: publicURL
        }
    }
`;

export default IndexPage;

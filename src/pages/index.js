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
    padding: "0 0.4rem",
    //padding: "3px 5% 10px",
    borderRadius: "4px",
};

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
                    <aside>
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
                        <h3>
                            Kunstscheune im Müllerhausgarten
                        </h3>
                        <p>
                            Etwa 200 Besucher haben am Pfingstwochenende im Rahmen von Kunst:Offen in unserer  Kunstscheune die neue Ausstellung von <a
                                href="https://www.brigitte-danner.de/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Brigitte Danner
                            </a> besichtigt. Die Künstlerin hat weitere Techniken für sich entdeckt und dadurch auch andere Motive, Formate und Stimmungen als in den Vorjahren mitgebracht.</p><p>
                            Treu blieb sie sich in der abstrakten Malerei harmonischer Kompositionen, wenngleich Interpretationen von Naturmotiven aus dem Haff hinzugekommen sind.</p>
                        <p>
                            Wer die Ausstellung verpasst hat, findet <a
                                href={props.data.zeitung.src}
                                target="_blank"
                                rel="noreferrer"
                            >
                                hier
                            </a> einen Rückblick.
                            Bis September können Sie auch vor Ort noch einen Einblick in die stimmungsvolle Malerei der Künstlerin bekommen - bitte vereinbaren Sie hierfür einen Termin (<Link to="/impressum">Kontakt</Link>). Wir freuen uns auf Ihren Besuch!
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
                    <article>
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
        zeitung: file(
            sourceInstanceName: { eq: "documents" }
            relativePath: { eq: "kunstoffen_2022_pfingsten.pdf" }
        ) {
            src: publicURL
        }
    }
`;

export default IndexPage;

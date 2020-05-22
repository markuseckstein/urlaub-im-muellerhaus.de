import React from "react";
import { graphql } from "gatsby";
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
                            Pfingsten 2020 -{" "}
                            <a
                                href="https://www.vorpommern.de/fileadmin/documents/kunst_offen/KunstOffen_Faltblatt_2020_web.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kunst:Offen
                            </a>{" "}
                            im Müllerhausgarten
                        </h3>
                        <p>
                            Über Pfingsten öffnet unsere Kunstscheune mit neuen
                            Werken ihre Tore: „Ruhe und Unruhe“ titelt die
                            Ausstellung von{" "}
                            <a
                                href="https://www.brigitte-danner.de/"
                                target="_blank"
                                rel="noopener"
                            >
                                Brigitte Danner
                            </a>{" "}
                            in diesem Jahr. Ihre abstrakten Werke greifen Themen
                            der Zeit, Inspiration durch das Haff und
                            Zwischenmenschlichkeit auf. Brigitte Danner hat sich
                            mit ihren Ausstellungen in Nordbayern einen Namen
                            gemacht. 2019 zeigte sie ihre Bilder erstmals in
                            Vorpommern und begeisterte die Besucher mit der
                            gestalterischen Harmonie ihrer Kunst. Hier ein{" "}
                            <a
                                href={props.data.zeitung.src}
                                target="_blank"
                                rel="noopener"
                            >
                                Rückblick
                            </a>
                            .
                        </p>
                        <p>
                            Öffnungszeiten: 30.5. bis 1.6. 2020, 10-18 Uhr.
                            Besichtigungen sind auch nach Pfingsten möglich. Wir
                            bitten dafür um{" "}
                            <a href="/impressum">Kontaktaufnahme</a> per Mail
                            oder telefonisch.
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
            relativePath: { eq: "kunstoffen_nordkurier.pdf" }
        ) {
            src: publicURL
        }
    }
`;

export default IndexPage;

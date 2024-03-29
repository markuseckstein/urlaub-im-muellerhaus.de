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
                            Pfingsten 2024: Der Müllerhaus-Garten im Zeichen der Kunst
                        </h3>
                        <p>
                            Im Rahmen des Formats „Kunst Offen“ laden wir vom 18. Bis 20. Mai Kunstinteressierte in unsere Galerie im Müllerhaus-Garten ein.
                        </p>
                        <p>
                            Hier stellt die Malerin{" "}
                            <a
                                href="https://www.brigitte-danner.de/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Brigitte Danner
                            </a>{" "}
                            ihre Werke aus, bei denen Sie verschiedenste Materialien und Techniken zu abstrakten Motiven vereint. Die Bilder geben in einer einzigartigen Ästhetik Natur und Emotionen wieder.
                        </p>
                        <p>
                            Die Künstlerin hat sich in den vergangen 25 Jahren mit ihren Arbeiten in Nordbayern einen Namen gemacht. Inspiriert durch das Stettiner Haff und die Ostsee, zeigt seit 2019 ihre Bilder auch in Mecklenburg-Vorpommern. Viele Gäste sind so begeistert von der gestalterischen Harmonie ihrer Werke, dass sie der Kunstscheune im Müllerhausgarten jährlich zu Pfingsten einen Besuch abstatten, um die Bilder auf sich wirken zu lassen.
                        </p>


                        <p>
                            Besichtigungen sind auch an anderen Tagen möglich.
                            Wir bitten dafür um{" "}
                            <Link to="/impressum">Kontaktaufnahme</Link> per
                            Mail oder telefonisch.
                        </p>

                        <p>
                            Weitere Informationen zu Kunst:Offen in Vorpommern
                            finden Sie{" "}
                            <a
                                href="https://www.vorpommern.de/kunstoffen-in-vorpommern/"
                                target="_blank"
                            >
                                hier
                            </a>
                            .
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

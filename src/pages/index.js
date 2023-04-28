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
                            Pfingsten 2023: Wir laden ein, zu „Kunst:Offen“ im
                            Müllerhausgarten!
                        </h3>
                        <p>
                            Zum fünften Mal in Folge nehmen wir an dem
                            wunderbaren Format „Kunst Offen“ teil, bei dem
                            Kunstinteressierte einen einmaligen Einblick in die
                            Künstlerszene, in offene Ateliers und
                            Kunstwerkstätten in Stadt und Land erhalten. Vom 27.
                            Bis 29. Mai laden wir alle Interessierten zu einem
                            Besuch in unsere Kunstscheune im Müllerhausgarten
                            ein. Hier stellt die Künstlerin{" "}
                            <a
                                href="https://www.brigitte-danner.de/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Brigitte Danner
                            </a>{" "}
                            ihre neuen Werke aus, bei denen Sie ihrer Art,
                            verschiedenste Materialien und Techniken zusammen zu
                            bringen treu bleibt und gleichzeitig neue Impulse
                            setzt. Techniken treffen dabei auf Emotionen: Neben
                            alt bewährten und von unseren regelmäßigen Besuchern
                            geschätzten Darstellungen, überrascht sie mit neuen
                            Formaten und Perspektiven. Wer sich einen Eindruck
                            vom letzten Jahr verschaffen möchte, findet{" "}
                            <a
                                href={props.data.zeitung.src}
                                target="_blank"
                                rel="noreferrer"
                            >
                                hier
                            </a>{" "}
                            einen Rückblick.
                        </p>
                        <p>
                            Brigitte Danner greift in ihren abstrakten Werken
                            Themen der Zeit auf – inspiriert durch das Haff, an
                            dem sie viel Zeit verbringt und die fränkische
                            Hügellandschaft in der sie zu Hause ist. Die
                            Künstlerin hat sich mit ihren Ausstellungen in
                            Nordbayern einen Namen gemacht. 2019 zeigte sie ihre
                            Bilder erstmals in Vorpommern und begeistert die
                            Besucher seither mit der gestalterischen Harmonie
                            ihrer Kunst.
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

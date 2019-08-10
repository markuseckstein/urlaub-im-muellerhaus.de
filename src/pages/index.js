import React from "react";

const greetingStyle = {
    fontFamily: "Reenie Beanie, cursive",
    fontSize: "2.6em",
    transform: "rotate(2deg)"
};

const eventTeaserStyle = {
    backgroundColor: "#f1f1f1",
    padding: "0 0.4rem",
    //padding: "3px 5% 10px",
    borderRadius: "4px"
};

const IndexPage = (props) => (
    <div>
        <div className="header-image header-image--index" />
        <div className="main-container">
            <div className="main wrapper clearfix">

                <article>
                    <header>
                        <h1 className="heading">Das Müllerhaus in Vogelsang</h1>
                        <p>
                            Verbringen Sie erholsame Tage in einer der beiden
                            liebevoll eingerichteten Ferienwohnungen des
                            Müllerhauses. Genießen Sie dabei den großen Garten
                            mit Grill, Liegen und Spielgeräten, die Sauna, die
                            Nähe zum Strand und viel Natur.
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
                        vorpommerschen Küste. Es wurde 1830 erbaut und diente
                        einst einer wohlhabenden Müllerfamilie als Wohnhaus. In
                        den vergangenen knapp 200 Jahren hatte es viele Bewohner
                        und Gesichter. 2001 entdeckte ein Liebhaber das Objekt
                        und sanierte es von Grund auf. Dabei legte er großen
                        Wert darauf, mit den originalgetreuen Materialien zu
                        arbeiten und die ursprüngliche Optik wiederherzustellen.
                        Zugleich stattete er das Haus mit Wand- und
                        Fußbodenheizung, Sauna, WLAN und Sat-TV aus. So verband
                        er historisches Ambiente mit modernem Wohnkomfort.
                    </p>
                </aside>
                <article style={eventTeaserStyle}>
                    <h3>Neu: Kunstscheune im Müllerhausgarten</h3>
                    <p>
                        Seit unserer Teilnahme bei{" "}
                        <a
                            href="https://www.vorpommern.de/fileadmin/documents/kunst_offen/TVV-KunstOffen-2019-Faltblatt-700x420mm-Web-gesamt.pdf"
                            target="_blank"
                        >
                            Kunst:Offen 2019
                        </a>{" "}
                        mit der Bildern der Malerin{" "}
                        <a
                            href="https://www.brigitte-danner.de/"
                            target="_blank"
                        >
                            Brigitte Danner
                        </a>{" "}
                        gibt es im Garten eine kleine Kunstscheune. Die
                        Dauerausstellung können unsere Gäste auf Nachfrage
                        besichtigen und die Sitzgruppen in der Galerie zum
                        gemütlichen Beisammensein nutzen.
                    </p>
                    <p>
                        Für Interessierte hier der <a href={props.data.zeitung.src} target="_blank">Zeitungsartikel</a>, der zu
                Kunst:Offen erschienen ist.
                    </p>
                </article>
                <article>
                    <p>
                        <img src={props.data.dtvLogo.childImageSharp.image.src} width={props.data.dtvLogo.childImageSharp.image.width} height={props.data.dtvLogo.childImageSharp.image.height} alt="DTV-4-Sterne-Logo"></img>

                    </p>
                </article>

            </div>
        </div>
    </div>
);


export const query = graphql`
query LogoAndZeitung {
    dtvLogo: file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "dtv_4sterne.jpg"}) {
      childImageSharp {
        image: resize(width: 600, quality: 77, toFormat: PNG) {
          src
          width
          height
        }
      }
    }
    zeitung:file(sourceInstanceName: {eq: "documents"}, relativePath: {eq: "kunstoffen_nordkurier.pdf"}) {
          src: publicURL
    }
  }
`

export default IndexPage;

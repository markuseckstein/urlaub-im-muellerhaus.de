import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const styleHidden = {
  display: "none",
}

const UmgebungPage = props => {
  const [index, setIndex] = useState(-1)
  const [areHometownsShown, setAreHometownsShown] = useState(false)

  const images = props.data.umgebungImages.edges.map(x => {
    return {
      src: x.node.orig.images.fallback.src,
      thumbnail: x.node.thumb.images.fallback.src,
      thumbnailWidth: 280,
      thumbnailHeight: 280,
      caption: x.node.fields.exif.title,
    }
  })

  const slides = images.map(({ src, caption }) => ({
    src,
    alt: caption,
    description: caption,
  }))

  
  useEffect(() => {
    const codes = ["h", "o", "m", "e"]
    let buffer = []
    const handler = event => {
      buffer.push(event.key.toLowerCase())
      if (buffer.length > codes.length) buffer.shift()
      if (buffer.join("") === codes.join("")) {
        setAreHometownsShown(true)
        buffer = []
      }
    }
    document.addEventListener("keyup", handler)
    return () => {
      document.removeEventListener("keyup", handler)
    }
  }, [])

  return (
    <>
      <Layout>
        <div>
          <div className="header-image header-image--umgebung" />
          <div className="main-container">
            <div className="main wrapper clearfix">
              <article>
                <header>
                  <h1 className="heading">Strand und Umgebung</h1>
                  <h2>Naturstrand in Laufnähe</h2>
                  <p>
                    Vogelsang liegt direkt an der Küste des Stettiner Haffs. Der
                    Sandstrand mit kleinem Bootshafen ist rund 15 Gehminuten vom
                    Müllerhaus entfernt. Das Ufer fällt langsam ab und bietet
                    somit eine optimale Bade- und Spielmöglichkeit für Kinder.
                    Bei gutem Wetter können Sie bis nach Usedom blicken.
                  </p>
                  <p>
                    Weitere Strände in der Umgebung sind bequem mit dem Fahrrad
                    oder dem Auto erreichbar, beispielsweise in Bellin (5
                    Kilometer), Ueckermünde (8 Kilometer), Altwarp (8 Kilometer)
                    oder Mönkebude (17 Kilometer).
                  </p>
                </header>
                <section>
                  <h2>Kultur im Seebad Ueckermünde</h2>
                  <p>
                    Knapp acht Kilometer in Richtung Westen liegt das Seebad
                    Ueckermünde. Eine Kleinstadt mit Bade- und
                    Einkaufsmöglichkeiten, kleinen Boutiquen und einem reizenden
                    historischen Stadtkern. Im „Kulturspeicher“ können Sie
                    regionale Produkte erwerben oder Kunstausstellungen
                    genießen. Der kleine Hafen bietet sich für Spaziergänge an.
                    Weiterhin erwarten Sie ein Kletterwald, der Tierpark sowie
                    ein großer Badestrand mit Gastronomie, Strandkörben,
                    Volleyballfeld, Kinderspielplatz, Hunde- und FKK-Bereich und
                    vielem mehr. Die Hafenstadt Ueckermünde ist außerdem
                    Ausgangspunkt für Fährfahrten auf die Insel Usedom oder für
                    Touren in die polnische Großstadt Stettin.
                  </p>
                </section>
                <section>
                  <h2>Idyll, Natur und fangfrischen Fisch in Altwarp</h2>
                  <p>
                    Die gleiche Strecke in Richtung Osten bringt Sie zum kleinen
                    Fischerdorf Altwarp. Von hier aus können Sie Bootsausflüge
                    machen, ursprüngliche Natur genießen, fangfrischen Fisch
                    einkaufen oder gleich vor Ort verspeisen: Altwarp gilt als
                    Geheimtipp für köstliche Fischrestaurants.
                  </p>
                </section>
                <section>
                  <h2>Weitere Ziele</h2>
                  <p>
                    Weitere interessante Ziele finden Sie auf der{" "}
                    <a
                      href="https://www.kulturlandbuero.de/kulturlandschatzkarte/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kulturlandschatzkarte
                    </a>
                    .
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
                    <li>Heringsdorf auf Usedom: 90 Kilometer</li>
                    <li style={areHometownsShown ? undefined : styleHidden}>
                      Pattenhofen: 634 Kilometer
                    </li>
                    <li style={areHometownsShown ? undefined : styleHidden}>
                      Lindelburg: 642 Kilometer
                    </li>
                    <li style={areHometownsShown ? undefined : styleHidden}>
                      Altenthann: 633 Kilometer
                    </li>
                  </ul>
                </footer>
              </article>
              <aside>
                <h2>Weitere Ausflugsziele</h2>
                <ul>
                  <li>
                    Einzigartige Strände in Vogelsang, Bellin (mit{" "}
                    <a
                      href="https://www.facebook.com/bellinibeach/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bar
                    </a>{" "}
                    ), Mönkebude, Ueckermünde (mit Café, Imbiss und{" "}
                    <a
                      href="https://www.strandhalle-ueckermuende.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Restaurant
                    </a>{" "}
                    )
                  </li>
                  <li>
                    Frühstücken im{" "}
                    <a
                      href="https://wohlfuehleck-ueckermuende.eatbu.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Wohlfühleck
                    </a>{" "}
                    in{" "}
                    <a
                      href="https://www.ueckermuende.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ueckermünde
                    </a>{" "}
                  </li>
                  <li>
                    Filmabend im{" "}
                    <a
                      href="https://www.kino-ueckermuende.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kino
                    </a>{" "}
                    Ueckermünde
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.ueckermuende.de/portal/seiten/haffmuseum-mit-regionaler-geschichte-900000069-34850.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Haffmuseum
                    </a>{" "}
                    Ueckermünde
                  </li>
                  <li>
                    Geschichte erleben im{" "}
                    <a
                      href="http://ukranenland.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ukranenland
                    </a>{" "}
                    Torgelow
                  </li>
                  <li>
                    Fischerdorf{" "}
                    <a
                      href="https://www.fischerdorf-altwarp.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Altwarp
                    </a>{" "}
                    : Bootsfahrten und Fischspezialitäten
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.naturpark-am-stettiner-haff.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Naturpark am Stettiner Haff
                    </a>{" "}
                    : Natur hautnah, Biber-Wanderungen, Führungen durch die
                    Binnendüne, Informationszentrum
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://tierpark-ueckermuende.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tierpark
                    </a>{" "}
                    Ueckermünde
                  </li>
                  <li>Straußenfarm Ahlbeck</li>
                  <li>Einkaufsbummel in Stettin</li>
                  <li>Radtour auf der Insel Usedom</li>
                  <li>
                    Entspannen in der{" "}
                    <a
                      href="https://www.ostseetherme-usedom.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      OstseeTherme
                    </a>{" "}
                    Usedom
                  </li>
                  <li>
                    Spaziergang auf den Strandpromenaden der Kaiserbäder
                    Heringsdorf, Ahlbeck und Bansin
                  </li>
                  <li>
                    Kreidefelsen und Störtebeker-Festspiele auf der Insel Rügen
                  </li>
                  <li>Sightseeing und Shopping in Greifswald</li>
                  <li>
                    {" "}
                    <a
                      href="https://www.ozeaneum.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ozeaneum
                    </a>{" "}
                    Stralsund
                  </li>
                  <li>Shopping und See in Neubrandenburg</li>
                  <li>Fischer- und Künstlerdorf Rieth am Neuwarper See</li>
                  <li>Hanseatische Kultur und Architektur in Rostock</li>
                </ul>
              </aside>
            </div>
          </div>

          <div className="footer-container">
            <footer className="wrapper">
              <Gallery
                images={images}
                enableImageSelection={false}
                backdropClosesModal={true}
                showImageCount={false}
                onClick={setIndex}
              />
              <div style={{ clear: "both" }}>&nbsp;</div>
            </footer>
          </div>
        </div>
      </Layout>

      <Lightbox
        plugins={[Captions]}
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  )
}

export const Head = () => <Seo title="Müllerhaus - Strand und Umgebung" />

export const pageQuery = graphql`
  query UmgebungQuery {
    umgebungImages: allImageSharp(
      sort: { fields: { file: { path: ASC } } }
      filter: { fields: { file: { path: { regex: "//gallery/umgebung//" } } } }
    ) {
      edges {
        node {
          orig: gatsbyImageData(width: 1300, quality: 80, formats: [JPG])
          thumb: gatsbyImageData(width: 280, formats: [JPG])
          fields {
            exif {
              title
            }
          }
        }
      }
    }
  }
`

export default UmgebungPage

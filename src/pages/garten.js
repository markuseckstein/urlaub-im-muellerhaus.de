import { graphql } from "gatsby"
import React, { useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/styles.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GartenPage = props => {
  const [index, setIndex] = useState(-1)

  const images = props.data.gartenImages.edges.map(x => {
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

  return (
    <>
      <Layout>
        <div>
          <div className="header-image header-image--garten" />
          <div className="main-container">
            <div className="main wrapper clearfix">
              <article>
                <header>
                  <h1 className="heading">Garten und Sauna</h1>
                </header>
                <section>
                  <p>
                    Egal ob Sie sich auf einer Liege entspannen oder mit Ihren
                    Kindern toben möchten, der Garten ist groß genug für alle
                    Bedürfnisse. Nach Belieben stehen Ihnen Gartenmöbel,
                    Spielgeräte, Sandkasten, Schaukel, Sonnenschirme, Grill und
                    eine Feuerstelle zur Verfügung.
                  </p>
                </section>
              </article>
              <aside>
                <h2>Ausspannen in der Scheunen-Sauna</h2>
                <p>
                  Lassen Sie Ihre Seele in der Außensauna des Müllerhauses
                  baumeln. Genießen Sie dabei ein Glas Tee im Ruhebereich mit
                  Blick über Feld und Wiese in Richtung Haff.
                </p>
              </aside>
            </div>
          </div>

          <div className="footer-container">
            <footer>
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

export const Head = () => <Seo title="Müllerhaus - Garten und Sauna" />

export const pageQuery = graphql`
  query GartenQuery {
    gartenImages: allImageSharp(
      sort: { fields: { file: { path: ASC } } }
      filter: { fields: { file: { path: { regex: "//gallery/garten//" } } } }
    ) {
      edges {
        node {
          id
          orig: gatsbyImageData(width: 1300, quality: 80, formats: [JPG])
          thumb: gatsbyImageData(width: 280, formats: [JPG])
          fields {
            exif {
              title
            }
            file {
              path
            }
          }
        }
      }
    }
  }
`

export default GartenPage

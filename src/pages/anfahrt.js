import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

class AnfahrtPage extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <Helmet title="Müllerhaus - Anfahrt" />
                    <iframe
                        title="Anfahrtskarte"
                        width="100%"
                        height="580px"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB8BouMAnBVAs9lRRXjxMp-chcj_JzxiOQ
    &q=Dorfstraße 24,Vogelsang-Warsin"
                        allowFullScreen
                    />
                    <div className="main-container">
                        <div className="main wrapper clearfix">
                            <article>
                                <header>
                                    <h2>Ihr Weg zu uns</h2>
                                    <p>
                                        Dorfstraße 24
                                        <br /> 17375 Vogelsang-Warsin
                                        <br />
                                    </p>
                                </header>
                            </article>
                            <aside>
                                <h2>Anfahrt</h2>
                                <p>
                                    Mit dem Auto kommend fahren Sie in Pasewalk
                                    die Bundestraße 109 Richtung Ueckermünde.
                                    Dort folgen sie Schildern Richtung Altwarp.
                                    Kurz nach dem Ortseingang Vogelsang-Warsin
                                    sehen Sie schon das rote Fachwerkhaus auf
                                    der linken Seite. Sie können direkt am
                                    Müllerhaus parken.
                                </p>
                                <p>
                                    Mit der Bahn fahren Sie bis Ueckermünde. Die
                                    Buslinie 908 (Achtung: Fährt nur ein paar
                                    Mal täglich!) bringt Sie nach
                                    Vogelsang-Warsin. Die Bushaltestelle ist
                                    etwa 500 Meter vom Müllerhaus entfernt.
                                </p>
                            </aside>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default AnfahrtPage;

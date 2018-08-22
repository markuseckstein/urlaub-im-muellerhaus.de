import React from "react";
import Helmet from "react-helmet";

class PreiseBuchungPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="Müllerhaus - Preise und Buchung" />
                <div className="header-image header-image--preise" />
                <div className="main-container">
                    <div className="main wrapper clearfix">
                        <article>
                            <header>
                                <h1 className="heading">Preise und Buchung</h1>
                                <p>
                                    Die angegebenen Preise verstehen sich pro
                                    Wohnung und Nacht, inkl. Sauna, Bad- und
                                    Bettwäsche, zzgl. 50 Euro Endreinigung.
                                    Babybett und Kinderhochstuhl stehen Ihnen
                                    auf Anfrage kostenfrei zur Verfügung. Die
                                    Mindestmietdauer beträgt zwei Nächte.
                                </p>
                            </header>
                            <section>
                                <h2>Wohnung „Ueckermünde“ (2-6 Personen)</h2>
                                1. Oktober bis 31. März: 85 Euro/Nacht
                                <br /> 1. April bis 30. September: 95 Euro/Nacht
                                <br /> Weihnachts- und Silvesterwoche 95
                                Euro/Nacht
                                <br />
                                <h2>Wohnung „Altwarp“ (2-4 Personen)</h2>
                                1. Oktober bis 31. März: 75 Euro/Nacht
                                <br /> 1. April bis 30. September: 85 Euro/Nacht
                                <br /> Weihnachts- und Silvesterwoche 85
                                Euro/Nacht
                                <br />
                            </section>
                        </article>
                        <aside>
                            <h2>Kontakt und Buchungsanfragen</h2>
                            <p>
                                Sie haben Fragen zu den Ferienwohnungen, rund um
                                Ihre Urlaubsplanung oder eine Buchungsanfrage?
                                Wir freuen uns über Ihre Kontaktaufnahme.
                            </p>
                            <p>
                                Familie Lochner
                                <br /> Email: info@urlaub-im-muellerhaus.de
                                <br /> Telefon: 039773-269972
                                <br />
                            </p>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreiseBuchungPage;

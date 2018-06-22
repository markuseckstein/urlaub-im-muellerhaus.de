import React from "react";

const greetingStyle = {
    fontFamily: "Reenie Beanie, cursive",
    fontSize: "2.6em",
    transform: "rotate(2deg)"
};

const IndexPage = () => (
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
            </div>
        </div>
    </div>
);

export default IndexPage;

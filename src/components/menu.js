import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo-muellerhaus.png";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };

        // This binding is necessary to make `this` work in the callback
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <div className="header-container">
                <header className="wrapper clearfix">
                    <div
                        id="navMenu"
                        onClick={this.toggle}
                        className={this.state.isOpen ? "animate" : ""}
                    >
                        <div
                            id="navMenuInner"
                            className={this.state.isOpen ? "animate" : ""}
                        />
                    </div>
                    <h1 className="title">Willkommen im Müllerhaus!</h1>
                    <nav
                        id="navMain"
                        className={this.state.isOpen ? "unhide" : ""}
                    >
                        <img className="logo" alt="" src={logo} />
                        <ul className="navMain__list">
                            <li>
                                <Link activeClassName="active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/wohnungen">
                                    Ferien&shy;wohnungen
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/garten">
                                    Garten &amp; Sauna
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/umgebung">
                                    Strand &amp; Umgebung
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClassName="active"
                                    to="/preise_und_buchung"
                                >
                                    Preise &amp; Buchung
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/anfahrt">
                                    Anfahrt
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/impressum">
                                    Impressum
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
}

export default Menu;

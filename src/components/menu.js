import React from "react";
import Link from "gatsby-link";
import { fromEvent } from "rxjs";
import { pluck, filter, bufferCount } from "rxjs/operators";

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
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    }

    componentDidMount() {
        var codes = ["s", "h", "a", "k", "e"];
        if (typeof document !== `undefined`) {
            this._subscription = fromEvent(document, "keyup")
                .pipe(
                    pluck("key"),
                    bufferCount(codes.length, 1),
                    filter(function (data) {
                        return data.toString() === codes.toString();
                    })
                )
                .subscribe(() => {
                    this.doTheShake();
                });
        }
    }

    doTheShake() {
        (function () {
            function c() {
                var e = document.createElement("link");
                e.setAttribute("type", "text/css");
                e.setAttribute("rel", "stylesheet");
                e.setAttribute("href", f);
                e.setAttribute("class", l);
                document.body.appendChild(e);
            }
            function h() {
                var e = document.getElementsByClassName(l);
                for (var t = 0; t < e.length; t++) {
                    document.body.removeChild(e[t]);
                }
            }
            function p() {
                var e = document.createElement("div");
                e.setAttribute("class", a);
                document.body.appendChild(e);
                setTimeout(function () {
                    document.body.removeChild(e);
                }, 100);
            }
            function d(e) {
                return { height: e.offsetHeight, width: e.offsetWidth };
            }
            function v(i) {
                var s = d(i);
                return (
                    s.height > e && s.height < n && s.width > t && s.width < r
                );
            }
            function m(e) {
                var t = e;
                var n = 0;
                while (!!t) {
                    n += t.offsetTop;
                    t = t.offsetParent;
                }
                return n;
            }
            function g() {
                var e = document.documentElement;
                if (!!window.innerWidth) {
                    return window.innerHeight;
                } else if (e && !isNaN(e.clientHeight)) {
                    return e.clientHeight;
                }
                return 0;
            }
            function y() {
                if (window.pageYOffset) {
                    return window.pageYOffset;
                }
                return Math.max(
                    document.documentElement.scrollTop,
                    document.body.scrollTop
                );
            }
            function E(e) {
                var t = m(e);
                return t >= w && t <= b + w;
            }
            function S() {
                var e = document.createElement("audio");
                e.setAttribute("class", l);
                e.src = i;
                e.loop = false;
                e.addEventListener(
                    "canplay",
                    function () {
                        setTimeout(function () {
                            x(k);
                        }, 500);
                        setTimeout(function () {
                            N();
                            p();
                            for (var e = 0; e < O.length; e++) {
                                T(O[e]);
                            }
                        }, 15500);
                    },
                    true
                );
                e.addEventListener(
                    "ended",
                    function () {
                        N();
                        h();
                    },
                    true
                );
                e.innerHTML =
                    " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
                document.body.appendChild(e);
                e.play();
            }
            function x(e) {
                e.className += " " + s + " " + o;
            }
            function T(e) {
                e.className +=
                    " " + s + " " + u[Math.floor(Math.random() * u.length)];
            }
            function N() {
                var e = document.getElementsByClassName(s);
                var t = new RegExp("\\b" + s + "\\b");
                for (var n = 0; n < e.length; ) {
                    e[n].className = e[n].className.replace(t, "");
                }
            }
            var e = 30;
            var t = 30;
            var n = 350;
            var r = 350;
            var i =
                "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";
            var s = "mw-harlem_shake_me";
            var o = "im_first";
            var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
            var a = "mw-strobe_light";
            var f =
                "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
            var l = "mw_added_css";
            var b = g();
            var w = y();
            var C = document.getElementsByTagName("*");
            var k = null;
            for (var L = 0; L < C.length; L++) {
                var A = C[L];
                if (v(A)) {
                    if (E(A)) {
                        k = A;
                        break;
                    }
                }
            }
            if (A === null) {
                console.warn(
                    "Could not find a node of the right size. Please try a different page."
                );
                return;
            }
            c();
            S();
            var O = [];
            for (var L = 0; L < C.length; L++) {
                var A = C[L];
                if (v(A)) {
                    O.push(A);
                }
            }
        })();
    }
}

export default Menu;

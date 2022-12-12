import React from "react";
import {Link} from "react-router-dom";
import {Link as L} from "react-scroll"
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <section className="navigation container">

        <div>
            <Link to="/logowanie"><button type="button" className="navigation-btn">Zaloguj</button></Link>
            <Link to="/rejestracja"><button type="button" className="navigation-btn selected">Załóż konto</button></Link>
        </div>

        <ul className="navigation__nav">
            <li><a href="/" className="navigation-el">Start</a></li>
            <li><a href="/" className="navigation-el">O co chodzi?</a></li>
            <li><a href="/" className="navigation-el">O nas</a></li>
            <li><a href="/" className="navigation-el">Fundacja i organizacje</a></li>
            <li><a href="/" className="navigation-el">Kontakt</a></li>
        </ul>
        </section>

        <Outlet />

        </>
        )
}

export default Navigation;
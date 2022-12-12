import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"

const HomeNavHeader = () => {

    return (
    <section className="header">

       <img className="header__img" src={require('../../assets/Home-Hero-Image.jpg')} alt="header-background" />

       <section className="header__content">

            <div className="login">
                <Link to="/logowanie"><button type="button" className="login-btn">Zaloguj</button></Link>
                <Link to="/rejestracja"><button type="button" className="login-btn login-active">Załóż konto</button></Link>
            </div>

            <ul className="nav-menu">
                <li className="nav-menu-item"><a href="/">Start</a></li>
                <li className="nav-menu-item"><LinkScroll to="steps" spy={true} smooth={true} offset={-100} duration={600}>O co chodzi?</LinkScroll></li>
                <li className="nav-menu-item"><LinkScroll to="about" spy={true} smooth={true} offset={-100} duration={600}>O nas</LinkScroll></li>
                <li className="nav-menu-item"><LinkScroll to="organisations" spy={true} smooth={true} offset={-100} duration={600}>Fundacja i organizacje</LinkScroll></li>
                <li className="nav-menu-item"><LinkScroll to="contact" spy={true} smooth={true} offset={-100} duration={600}>Kontakt</LinkScroll></li>
            </ul>

            <h1 className="header-text">Zacznij pomagać! <br></br> Oddaj niechciane rzeczy w zaufane ręce</h1>
            <img className="header-decoration" src={require('../../assets/Decoration.svg').default} alt="decoration" />
            <section className="header-buttons">
                <Link to="/logowanie"><button type="button" className="header-btn">ODDAJ<br></br> RZECZY</button></Link>
                <Link to="/logowanie"><button type="button" className="header-btn">ZORGANIZUJ ZBIÓRKĘ</button></Link>
            </section>
       </section>

    </section>
        )

}

export default HomeNavHeader;
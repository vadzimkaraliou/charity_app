import React from "react";
import {Link} from "react-router-dom";

const LogOut = () => {
    return (
        <section className="loginPage">
            <div className="loginPage-inner">
                <div className="loginPage-title logOutTitle">Wylogowanie nastąpiło pomyślnie!</div>
                <img className="logOutImg" src={require('../assets/Decoration.svg').default} alt="decoration" />
                    <Link to="/"><button type="button" className="loginPage-register loginPage-active">Strona główna</button></Link>
            </div>
        </section>
        )
}

export default LogOut;
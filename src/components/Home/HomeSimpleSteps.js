import React from "react";
import { Link } from "react-router-dom";

const HomeSimpleSteps = () => {
    return (
        
        <section className="steps" id="steps">
            <div className="steps-title">
                <div>Wystarczą 4 proste kroki</div>
                <img src={require('../../assets/Decoration.svg').default} alt="decoration" />
            </div>

            <div className="steps-descriptions">

                <div className="step-description">
                    <img src={require('../../assets/Icon-1.svg').default} alt="icon" />
                    <p className="step-title">Wybierz rzeczy</p>
                    <div className="steps-line"></div>
                    <p className="step-text">ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className="step-description">
                    <img src={require('../../assets/Icon-2.svg').default} alt="icon" />
                    <p className="step-title">Spakuj je</p>
                    <div className="steps-line"></div>
                    <p className="step-text">skorzystaj z worków na śmieci</p>
                </div>

                <div className="step-description">
                    <img src={require('../../assets/Icon-3.svg').default} alt="icon" />
                    <p className="step-title">Zdecyduj komu chcesz pomóc</p>
                    <div className="steps-line"></div>
                    <p className="step-text">wybierz zaufane miejsce</p>
                </div>

                <div className="step-description">
                    <img src={require('../../assets/Icon-4.svg').default} alt="icon" />
                    <p className="step-title">Zamów kuriera</p>
                    <div className="steps-line"></div>
                    <p className="step-text">kurier przyjedzie w dogodnym terminie</p>
                </div>

            </div>

            <Link to="/logowanie"><button type="button" className="steps-btn">ODDAJ<br></br> RZECZY</button></Link>
        </section>

    );
}

export default HomeSimpleSteps;
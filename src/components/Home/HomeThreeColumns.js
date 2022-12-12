import React from "react";

const HomeThreeColumns = () => {
    return (
        <section className="columns"> 
            <section className="columns__inner container">
                <div className="column">
                    <div className="column-number">10</div>
                    <div className="column-title">ODDANYCH WORKÓW</div>
                    <div className="column-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className="column">
                <div className="column-number">5</div>
                    <div className="column-title">WSPARTYCH ORGANIZACJI</div>
                    <div className="column-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className="column">
                <div className="column-number">7</div>
                    <div className="column-title">ZORGANIZOWANY ZBIÓREK</div>
                    <div className="column-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
            </section>
        </section>
    )
}

export default HomeThreeColumns;
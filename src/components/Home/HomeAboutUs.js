import React from "react";

const HomeAboutUs = () => {
    return (
    <section className="about" id="about">
        <div className="about-content">
            <div className="about-title">O nas</div>
            <img className="about-decoration" src={require('../../assets/Decoration.svg').default} alt="decoration" />
            <p className="about-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            <img className="signature" src={require('../../assets/Signature.svg').default} alt="signature" />
        </div>
        <img className="about-img" src={require('../../assets/People.jpg')} alt="people" />
    </section>
    )
}

export default HomeAboutUs;
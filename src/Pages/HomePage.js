// App.js
import React from 'react';
// import './HomePage.css'; // Import CSS file
import photo from '../assets/img/photo.jpg';
import { Link } from 'react-router-dom';
import { Content } from '../content';
import { Fade, Bounce } from "react-awesome-reveal";
import SVGContainer from '../assets/SVG';

const HomePage = () => {

    const content = [];

    Content.forEach(category => {
        category.services.forEach(service => {
            content.push({
                categoryName: category.categoryName,
                ...service
            });
        });
    });

    const mail = "info@gdcs.in";
    const phoneNumber = "+080 6218 0291";

    Content.forEach(content => content.services.forEach(c => console.log(c.title)));

    return (
        <>
            {/*=============== BOXICONS ===============*/}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
            />
            {/*=============== HEADER ===============*/}

            <main className="main">
                {/*=============== HOME ===============*/}
                <section className="home section" id="home">
                    <div id="db" />
                    <div className="home__container container grid">
                        <div className="home__data">
                            <h1 className="home__title">Welcome!!</h1>
                            <p className="home__description">
                                Think Innovative, Do Creative Our Innovative & Creative Concepts will Achieve Your Business Goals
                            </p>
                        </div>
                    </div>
                </section>
                {/*=============== ABOUT ===============*/}
                <section className="about section container" id="about">
                    <Fade direction='down' >
                        <div className="about__container grid">
                            <div className="about__data">
                                <h2 className="section__title-center">
                                    What We Do At GDCS?
                                </h2>
                                <p className="about__description">
                                    GDCS established in 2020, having its corporate office in India, has expertise in Web & Mobile Application Development using advanced research, strategic thinking and planning, and innovative procurements and implementations to maximize client business reach and enhancing efficiency.  Being an end-to-end Web Designing and Development Company, we get things done by creating long-term and tactical partnerships with the clients, brainstorm preliminary ideas, devising project plans, building & implementing cost-effective solutions, guided by well-directed support and maintenance procedures.                                </p>
                                <p className="about__description">
                                    Our goal is to provide better and more convenient services, ensuring a seamless experience from start to finish. Whether you need a captivating website, engaging content, or effective marketing strategies, GDCS is dedicated to helping you achieve your digital objectives with excellence and efficiency.                                </p>
                            </div>
                            <div className="notification">
                                <div className="notiglow" />
                                <div className="notiborderglow" />
                                <div className="notititle">Welcome To GDCS</div>
                                <div className="notibody">Building Bridges to Online Success Your Partner in Digital Growth</div>
                            </div>
                        </div>
                    </Fade>
                </section>
                {/*=============== moving area ===============*/}
                <section id="moving__area">
                    <div id="moving__text">
                        <SVGContainer />
                        <SVGContainer />
                        <SVGContainer />
                    </div>
                </section>
                {/*=============== SECURITY ===============*/}
                <section className="security section container">
                    <div className="security__container grid">
                        <div className="security__data">
                            <Fade direction='left'>

                                <p className="about__description" >
                                    In our Website Design and Development endeavor, we maintain cent-percent
                                    professionalism, know-how, and a forward-looking approach and our strength
                                    stems from decoding the client needs into effectual solutions. We can help you
                                    in surpassing the competition, standing out from your competitors, and becoming
                                    a market leader. Whether you’re a small-medium-sized business or large
                                    corporate requiring a business website, e-commerce website, or a Landing Page,
                                    we will deliver you the best IT solutions to have an impeccable online
                                    presence.
                                </p>
                                <p className="about__description" >
                                    Using the most advanced form of web development and design technologies,
                                    we will offer you wonderful software development services at the best
                                    competitive prices. Our Website Developers have years of expertise in Designing
                                    and Launching websites at affordable cost for businesses and individuals World
                                    over-starting from high-end online e-commerce websites to the simple static
                                    websites, helping our clients to realize their vision. We at Blue Digital Media
                                    & Web Solutions have turned unique because of innovative brand building,
                                    Web portals & Mobile Apps keeping modern-day digital needs in view.
                                    We effortlessly integrate branding and marketing strategies.
                                </p>
                            </Fade>
                        </div>
                        <Fade direction='right'>
                            <img alt='' src={photo} id='v1' width={500} height={100} />
                        </Fade>
                    </div>
                </section>


                {/*=============== SERVICES ===============*/}
                <section className="services section container" id="services" >
                    <h2 className="section__title">
                        Our Skill Sets
                    </h2>
                    <div className="services__container grid">
                        <Bounce>
                            {content.map((content, index) => (
                                <div className="services__data">
                                    <div key={index} className="card">
                                        <div className="text">
                                            <h2>{content.title}</h2>
                                            <p className="subtitle">Fully Functional</p>
                                        </div>
                                        <div className="icons">
                                            <Link className='btn' to={'/services/' + content.title}>Learn More{" "}</Link>
                                        </div>
                                    </div>
                                </div>))}
                        </Bounce>
                    </div>
                </section>
                {/*=============== CONTACT US ===============*/}
                <section className="contact section container" id="contact">
                    <Fade direction='down'>
                        <div className="contact__container grid">
                            <div className="contact__content">
                                <h2 className="section__title-center">
                                    Contact Us From <br />
                                    Here
                                </h2>
                                <p className="contact__description">
                                    You can contact us from here, you can write to us, call us or visit
                                    our service center, we will gladly assist you.
                                </p>
                            </div>
                            <ul className="contact__content grid">
                                <li className="contact__address">
                                    Telephone:
                                    <span className="contact__information"><a href={`tel:${phoneNumber}`} style={{ color: '#FDC212' }}>  {phoneNumber}</a></span>
                                </li>
                                <li className="contact__address">
                                    Email:
                                    <span className="contact__information"><a href={`mailto:${mail}`} style={{ color: '#FDC212' }}> {mail}</a></span>
                                </li>
                                <li className="contact__address">
                                    <a target='blank' href='https://www.google.com/maps?q=20.2131795,85.6998743'>
                                        Location: <span className="contact__information">Plot No- 502/1237, Ogalapada, Industrial Estate, Janla, Bhubaneswar, Odisha 752054</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="contact__content">
                                <a href="/contact" className="button">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </Fade>
                </section>
            </main>
        </>

    );
}

export default HomePage;

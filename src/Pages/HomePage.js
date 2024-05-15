// App.js
import React from 'react';
import './HomePage.css'; // Import CSS file
import vdo from '../assets/img/sucess.mp4';
import { useNavigate } from 'react-router-dom';
import { Content } from '../content';

const HomePage = () => {
    let navigate = useNavigate();

    const handleMouseEnter = (e) => {
        const vid = e.target
        vid.play()
    }
    // handle mouse leave
    const handleMouseLeave = (e) => {
        const vid = e.target
        vid.muted = false
        vid.currentTime = 0
        vid.pause()
    }

    const mail = "gtechnology.n@gmail.com";
    const phoneNumber = "+917645083377";

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
                                Explore, learn, and connect with us. Enjoy your experience!
                            </p>
                        </div>
                    </div>
                </section>
                {/*=============== ABOUT ===============*/}
                <section className="about section container" id="about">
                    <div className="about__container grid">
                        <div className="about__data">
                            <h2 className="section__title-center">
                                Find Out A Little More <br />
                                About Us
                            </h2>
                            <p className="about__description">
                                GDCS is India's upcoming online payment platform for all type of
                                BBPS services and various other free and paid online services .The
                                company is on a mission to cater service to all Indians in a cheaper
                                price than the other existing companies. GDCS founded by Gaurov
                                Kumar Singh the brand GDCS.
                            </p>
                        </div>
                        <div className="notification">
                            <div className="notiglow" />
                            <div className="notiborderglow" />
                            <div className="notititle">Welcome To GDCS</div>
                            <div className="notibody">It is headquartered in Bhubaneswar.</div>
                        </div>
                    </div>
                </section>
                {/*=============== moving area ===============*/}
                <section id="moving__area">
                    <div id="moving__text">
                        <div className="con">
                            <h2>Explore</h2>
                            <div className="cir" />
                            <h2>Learn</h2>
                            <div className="cir" />
                            <h2>Experience</h2>
                            <div className="cir" />
                        </div>
                        <div className="con">
                            <h2>Explore</h2>
                            <div className="cir" />
                            <h2>Learn</h2>
                            <div className="cir" />
                            <h2>Experience</h2>
                            <div className="cir" />
                        </div>
                        <div className="con">
                            <h2>Explore</h2>
                            <div className="cir" />
                            <h2>Learn</h2>
                            <div className="cir" />
                            <h2>Experience</h2>
                            <div className="cir" />
                        </div>
                    </div>
                </section>
                {/*=============== SECURITY ===============*/}
                <section className="security section container">
                    <div className="security__container grid">
                        <div className="security__data">
                            <h2 className="section__title-center">Expecation Vs Reality</h2>
                            <p className="security__description">
                                The harsh reality is that achieving success requires facing
                                challenges, problems, failures, obstacles, and delays. These
                                setbacks test our resilience and determination, ultimately shaping
                                us and our journey to success.
                            </p>
                        </div>

                        <video
                            width='300'
                            height='420'
                            autoPlay
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id='v1'
                        >
                            <source src={vdo} type='video/mp4' />
                        </video>
                    </div>
                </section>


                {/*=============== SERVICES ===============*/}
                <section className="services section container" id="services" >
                    <h2 className="section__title">
                        Some Services We <br />
                        Offer
                    </h2>
                    <div className="services__container grid">
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Dynamic Web Building</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.DynamicWeb })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Dynamic Desktop App Building</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.DynamicDesktop })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Digital marketing</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.digitaMarketing })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>3D/2D animation</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.animation3D })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Product animation /packing</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.AnimationProduct })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Video editing</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.VdoEdit })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Graphic design</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.GraphicsDesign })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Mobile App Developing</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.MobileApp })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                        <div className="services__data">
                            <div className="card">
                                <div className="text">
                                    <h2>Content writing</h2>
                                    <p className="subtitle">Fully Functional</p>
                                </div>
                                <div className="icons">
                                    <button className="btn" onClick={() => {
                                        navigate('/services', { state: Content.ContentWrite })
                                    }}>
                                        Learn More{" "}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*=============== CONTACT US ===============*/}
                <section className="contact section container" id="contact">
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
                                Location: <span className="contact__information">Bhubaneswar</span>
                            </li>
                        </ul>
                        <div className="contact__content">
                            {/* <a href="/contact" className="button">
                                    Contact Us
                                </a> */}
                            <button className="button" onClick={() => {
                                navigate('/contact')
                            }}>Contact Us</button>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}

export default HomePage;
